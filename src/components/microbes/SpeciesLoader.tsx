import { forwardRef } from "react";

interface SpeciesLoaderProps {
  hasMore: boolean;
}

const SpeciesLoader = forwardRef<HTMLDivElement, SpeciesLoaderProps>(({ hasMore }, ref) => {
  if (!hasMore) return null;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center pt-10 mt-20 border-t border-black/5">
      <div className="w-10 h-10 mb-4 border-2 rounded-full border-primary/20 border-t-primary animate-spin" />
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30 animate-pulse">
        Observing more species...
      </p>
    </div>
  );
});

SpeciesLoader.displayName = "SpeciesLoader";

export default SpeciesLoader;
