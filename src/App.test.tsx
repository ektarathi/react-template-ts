import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App component", () => {
  test("render component", () => {
    render(
        <App />
    );
    expect(screen.getByLabelText("main-component")).toBeInTheDocument();
  });

  test("render heading", () => {
    render(
        <App />
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Expenses"
    );
  });
});
