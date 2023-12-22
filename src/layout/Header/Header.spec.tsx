import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("Renders Header component correctly", () => {
  render(<Header />);

  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});
