"use client";
import { Microbe } from "@/types/microbe";
import CardHeader from "./CardHeader";
import AbundanceBar from "./AbundanceBar";

const Card = ({ name, type, abundance, role }: Microbe) => {
  return (
    <div className="relative flex flex-col items-center p-8 overflow-hidden border border-black/5 card-hover group">
      <div className="flex flex-col items-center w-full h-full space-y-4 text-center">
        <CardHeader type={type} role={role} />

        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight text-secondary">{name}</h3>
          <p className="text-xs font-black tracking-[0.25em] uppercase text-black/45">{type} species</p>
        </div>

        <AbundanceBar abundance={abundance} />
      </div>
    </div>
  );
};

export default Card;
