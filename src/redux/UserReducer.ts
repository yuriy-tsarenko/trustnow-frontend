import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../common/types/User";
import {RestClient} from "../common/api/RestClient";
import {axiosInstance} from "../common/api/Axios";

interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: [],
};

const restClient: RestClient<User> = new RestClient<User>(axiosInstance);

export const fetchAllUsers = createAsyncThunk(
    "users/fetchAll",
    async (params: { authToken: string }, {dispatch}) => {
        try {
            const users: User[] = await restClient.GET("/users", params.authToken);
            dispatch(pushAllUsers(users));
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    }
);

export const addUser = createAsyncThunk(
    "users/add",
    async (params: { authToken: string, user: User }, {dispatch}) => {
        try {
            const newUser = await restClient.POST<User>("/users", params.user, params.authToken);
            dispatch(pushUser(newUser));
        } catch (error) {
            console.error("Failed to add user:", error);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "users/delete",
    async (params: { authToken: string, userId: string, index: number }, {dispatch}) => {
        try {
            await restClient.DELETE("/users/{userId}", params.authToken, [params.userId]);
            dispatch(removeUser(params.index));
        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    }
);

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        pushUser(state, action: PayloadAction<User>) {
            state.users.push(action.payload);
        },
        pushAllUsers(state, action: PayloadAction<User[]>) {
            state.users.push(...action.payload);
        },
        removeUser(state, action: PayloadAction<number>) {
            const index = action.payload;
            state.users.splice(index, 1);
        }
    },
});

export const {
    pushUser,
    pushAllUsers,
    removeUser
} = usersSlice.actions;

export default usersSlice.reducer;
