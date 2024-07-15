import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders the User Manager Dashboard", () => {
    expect(screen.getByText("User Manager Dashboard")).toBeInTheDocument();
  });

  test("renders initial users", () => {
    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.getByText("Bob Smith")).toBeInTheDocument();
    expect(screen.getByText("Charlie Brown")).toBeInTheDocument();
  });
});
