import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

test("Renders Footer component correctly", () => {
  render(<Footer />);

  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
  expect(footerElement).toHaveClass("footer");
});
