import React from "react";
import Card from "@/components/Card/Card";
import HomeImg from "@/assets/home.png";

export default function Home() {
  return (
    <main className="flex min-h-screen">
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
        textColor="text-black"
      />
    </main>
  );
}
