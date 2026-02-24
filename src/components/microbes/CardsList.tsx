"use client";
import { useEffect, useRef } from "react";
import Card from "./Card";
import ListControls from "./ListControls";
import EmptyState from "../ui/EmptyState";
import SpeciesLoader from "./SpeciesLoader";
import { useMicrobeList } from "../../hooks/useMicrobeList";
import { Microbe } from "../../types/microbe";

const CardsList = () => {
  const { filter, setFilter, sortOrder, toggleSort, displayedData, totalCount, hasMore, loadMore } =
    useMicrobeList();

  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.5 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className="w-full pb-32">
      <div className="px-6 mx-auto mt-6 max-w-7xl">
        <div className="flex justify-center mb-16">
          <div className="p-2 bg-white border shadow-xl rounded-3xl shadow-black/5 border-black/5">
            <ListControls
              filter={filter}
              setFilter={setFilter}
              sortOrder={sortOrder}
              toggleSort={toggleSort}
              resultsCount={totalCount}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedData.map((microbe: Microbe) => (
            <Card key={microbe.id} {...microbe} />
          ))}
          {displayedData.length === 0 && <EmptyState />}
        </div>

        <SpeciesLoader ref={loaderRef} hasMore={hasMore} />
      </div>
    </div>
  );
};

export default CardsList;
