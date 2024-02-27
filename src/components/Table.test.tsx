import { render, screen } from "@testing-library/react";
import Table from "./Table";
import "@testing-library/jest-dom";

describe("Table component", () => {
  test("render component", () => {
    render(
        <Table />
    );
    expect(screen.getByLabelText("table-component")).toBeInTheDocument();
  });
});
