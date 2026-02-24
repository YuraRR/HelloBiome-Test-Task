import React from "react";

const AbundanceBar = ({ abundance }: { abundance: number }) => {
  const getBarColor = (val: number) => {
    if (val < 20) return "bg-slate-300"; // Low
    if (val < 60) return "bg-primary"; // Moderate
    return "bg-secondary"; // High
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold ">
          {abundance}
          <span className="text-xl opacity-20">%</span>
        </span>
        <span className="mt-1 card-subtitle">Abundance</span>
      </div>
      <div className="w-full h-1.5 overflow-hidden rounded-full bg-black/5">
        <div
          className={`h-full transition-all duration-1000 ease-out animate-grow ${getBarColor(abundance)}`}
          style={{ width: `${abundance}%` }}
        />
      </div>
    </div>
  );
};

export default AbundanceBar;
