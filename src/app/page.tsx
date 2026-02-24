import CardsList from "@/components/microbes/CardsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="">
        <div className="py-10 text-center text-white bg-secondary">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-5xl italic font-bold tracking-tight md:text-6xl">
              Hello<span className="prose text-primary">Biome</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg font-medium text-white/60">
              Decoding clusters of skin profiles based on thousands of identified microbial species.
            </p>
          </div>
        </div>
        <CardsList />
      </main>
    </div>
  );
}
