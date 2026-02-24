import { useState, useMemo, useCallback } from "react";
import { MICROBE_DATA } from "@/data/microbes";

export const useMicrobeList = () => {
  const [filter, setFilter] = useState<"all" | "bacteria" | "fungi">("all");
  const [sortOrder, setSortOrder] = useState<"alpha" | "asc" | "desc">("alpha");
  const [visibleItems, setVisibleItems] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filteredAndSortedData = useMemo(() => {
    const result = [...MICROBE_DATA].filter((microbe) => (filter === "all" ? true : microbe.type === filter));

    if (sortOrder === "alpha") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result.sort((a, b) => (sortOrder === "asc" ? a.abundance - b.abundance : b.abundance - a.abundance));
    }

    return result;
  }, [filter, sortOrder]);

  const displayedData = useMemo(() => {
    return filteredAndSortedData.slice(0, visibleItems);
  }, [filteredAndSortedData, visibleItems]);

  const toggleSort = useCallback(() => {
    setSortOrder((prev) => {
      if (prev === "alpha") return "desc";
      if (prev === "desc") return "asc";
      return "alpha";
    });
  }, []);

  const loadMore = useCallback(() => {
    if (isLoadingMore || visibleItems >= filteredAndSortedData.length) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 6);
      setIsLoadingMore(false);
    }, 600);
  }, [isLoadingMore, visibleItems, filteredAndSortedData.length]);

  const handleFilterChange = (newFilter: "all" | "bacteria" | "fungi") => {
    setFilter(newFilter);
    setVisibleItems(6);
  };

  return {
    filter,
    setFilter: handleFilterChange,
    sortOrder,
    toggleSort,
    displayedData,
    totalCount: filteredAndSortedData.length,
    hasMore: visibleItems < filteredAndSortedData.length,
    isLoadingMore,
    loadMore,
  };
};
