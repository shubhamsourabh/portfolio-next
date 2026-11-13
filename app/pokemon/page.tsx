import PokemonList from "./PokemonList";

export default function PokemonPage() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Pokémon</h1>
      <p className="mt-2 text-gray-400">Fetched in the browser with React Query.</p>
      <PokemonList />
    </main>
  );
}