import React from "react";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import App from "./App";
import userReducer from "./redux/UserReducer";
import {configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {mockUsers} from "./common/Constants";

jest.mock("./common/api/RestClient", () => {
    const {MockRestClient} = require("./mocks/RestClientMock");
    return {
        RestClient: jest.fn().mockImplementation(() => new MockRestClient()),
    };
});


export const store = configureStore({
    reducer: {
        userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState: {
        userReducer: {
            users: mockUsers,
        },
    }
});

describe("App Component", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    });

    test("renders the UserGrid component", async () => {
        const gridComponent = await screen.findByTestId("grid-layout");
        expect(gridComponent).toBeInTheDocument();
        const userCard = gridComponent.children.item(0);
        expect(userCard).toBeInTheDocument();
    });
});
