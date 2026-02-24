import React from "react";

interface ListControlsProps {
  filter: "all" | "bacteria" | "fungi";
  setFilter: (filter: "all" | "bacteria" | "fungi") => void;
  sortOrder: "alpha" | "asc" | "desc";
  toggleSort: () => void;
  resultsCount: number;
}

const ListControls: React.FC<ListControlsProps> = ({ filter, setFilter, sortOrder, toggleSort, resultsCount }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex p-1 border glass rounded-2xl border-white/10">
        {(["all", "bacteria", "fungi"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all capitalize ${
              filter === type ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-white/5 opacity-50"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <button
        onClick={toggleSort}
        className={`flex items-center gap-3 px-5 py-2 text-xs font-bold border transition-all glass rounded-2xl border-white/10 hover:bg-white/5 ${
          sortOrder !== "alpha" ? "border-primary/50 text-primary" : "text-foreground/60"
        }`}
      >
        <span className="tracking-tighter uppercase opacity-50">Sort</span>
        <div className="flex flex-col items-center leading-none text-[10px]">
          <span className={sortOrder === "asc" ? "text-primary scale-125" : "opacity-30"}>▲</span>
          <span className={sortOrder === "desc" ? "text-primary scale-125" : "opacity-30"}>▼</span>
        </div>
        <span className="text-left min-w-18.75">
          {sortOrder === "alpha" && "A-Z"}
          {sortOrder === "desc" && "High First"}
          {sortOrder === "asc" && "Low First"}
        </span>
      </button>

      <div className="px-4 py-2 text-xs font-medium text-center border glass rounded-xl border-white/10 min-w-28">
        Results: {resultsCount}
      </div>
    </div>
  );
};

export default ListControls;
