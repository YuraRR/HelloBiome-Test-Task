import CardsList from "@/components/microbes/CardsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="">
        <div className="py-12 text-center text-white bg-secondary md:py-20">
          <div className="max-w-4xl px-6 mx-auto space-y-4">
            <h1 className="text-4xl italic font-bold tracking-tight md:text-6xl lg:text-7xl">
              Hello<span className="prose text-primary">Biome</span>
            </h1>
            <p className="max-w-xl mx-auto text-base font-medium md:text-lg text-white/60">
              Decoding clusters of skin profiles based on thousands of identified microbial species.
            </p>
          </div>
        </div>
        <CardsList />
      </main>
    </div>
  );
}
