import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RentButton from "./RentButton";

jest.mock("../../store/stepStore", () => ({
  useStepStore: () => ({
    setStep: jest.fn(),
    updateData: jest.fn(),
    completeStep: jest.fn(),
    clearCompletedSteps: jest.fn(),
  }),
}));

describe("RentButton Component", () => {
  test("Renders RentButton correctly", () => {
    render(<RentButton href="/rent/home" />);
    const rentButtonElement = screen.getByText("Rent Now");
    expect(rentButtonElement).toBeInTheDocument();
  });

  test("handles click event correctly", () => {
    render(<RentButton href="/rent/home" />);
    const rentButtonElement = screen.getByText("Rent Now");

    fireEvent.click(rentButtonElement);
  });
});
