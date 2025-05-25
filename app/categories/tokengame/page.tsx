"use client";
import { useState } from "react";
import Image from "next/image";

const sports = [
  { id: "all", name: "하이로우10초", icon: "/icon_token.png" },
  { id: "soccer", name: "하이로우5초", icon: "/icon_token.png" },
];

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("all");

  const renderContent = () => {
    switch (selectedSport) {
      case "all":
        return (
          <div className="p-4 text-lg text-white">
            <p>Put API here for 하이로우10초.</p>
          </div>
        );
      case "soccer":
        return (
          <div className="p-4 text-lg text-white">
            <p>put API for 하이로우5초.</p>
          </div>
        );
      default:
        return (
          <div className="p-4 text-lg text-white">
            <p>Invalid selection.</p>
          </div>
        );
    }
  };

  return (
    <>
      <div className="col-span-8 gap-1">
        <div className="grid grid-cols-2 bg-neutral-900">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className={`grid grid-cols-1 place-items-center py-2 border-r-2 border-zinc-950/50 ${
                selectedSport === sport.id ? "bg-zinc-800" : ""
              }`}
              onClick={() => setSelectedSport(sport.id)}
            >
              <button className="flex flex-col items-center justify-center space-y-1 focus:outline-none">
                <Image
                  src={sport.icon}
                  height={30}
                  width={30}
                  alt={sport.name}
                />
                <p className="font-medium">{sport.name}</p>
              </button>
            </div>
          ))}
        </div>

        <div className="flex p-2 text-2xl bg-neutral-900 my-2">
          {renderContent()}
        </div>
      </div>
    </>
  );
}
