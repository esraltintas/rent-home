import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import HomeImg from "../../assets/images/home.png";

describe("Card Component", () => {
  test("renders Card component correctly", () => {
    render(
      <Card
        src={HomeImg}
        alt="Home"
        description="Sunny Designer apartment with rooftop terrace"
        link="/rent/home"
        price={2000}
        location="Berlin"
        size={90}
        room={3}
        bgColor="bg-white"
        dataTestId="home-card"
      />
    );
    expect(screen.getByTestId("home-card")).toBeInTheDocument();
  });
});
