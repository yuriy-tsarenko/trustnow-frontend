import React, {FunctionComponent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserCard} from "./UserCard";
import {User} from "../common/types/User";
import "./UserGrid.css";
import {AppDispatch, RootState} from "../redux/ReduxStore";
import {deleteUser, fetchAllUsers} from "../redux/UserReducer";

export const UserGrid: FunctionComponent<any> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users: User[] = useSelector((state: RootState) => state.userReducer.users);

    //TODO: implement authentication and handle token
    const authToken: string = "DUMMY_VALUE";

    useEffect(() => {
        dispatch(fetchAllUsers({authToken}));
    }, [dispatch]);

    const handleDeleteUser = (userId: string, index: number) => {
        dispatch(deleteUser({authToken, userId, index}));
    };

    return (
        <div data-testid={"grid-layout"} className="user-grid">
            {users.map((user: User, index: number) => (
                <UserCard key={user.id} user={user} index={index} onDelete={handleDeleteUser}/>
            ))}
        </div>
    );
};
