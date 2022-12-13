import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  it("ul in document", () => {
    render(<App />);

    const listElement = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass("animals");
    expect(listItems.length).toBe(5);
  });
});
