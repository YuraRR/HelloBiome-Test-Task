const EmptyState = () => {
  return (
    <div className="py-20 text-center glass rounded-4xl border-white/10 col-span-full">
      <div className="mb-4 text-4xl">🔍</div>
      <p className="text-lg font-medium text-foreground/40">No microbes found matching your criteria.</p>
      <p className="mt-2 text-sm text-foreground/20">Try adjusting your filters or sort order.</p>
    </div>
  );
};

export default EmptyState;
