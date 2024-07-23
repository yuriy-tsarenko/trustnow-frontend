import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App Component", () => {
    beforeEach(() => {
        render(<App/>);
    });

    test("renders the UserGrid component", () => {
        let gridComponent = screen.getByTestId("grid-layout");
        expect(gridComponent).toBeInTheDocument();
        let userCard = gridComponent.children.item(0);
        expect(userCard).toBeInTheDocument();
    });
});