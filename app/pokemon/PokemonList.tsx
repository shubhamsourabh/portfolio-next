"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import PokemonDetail from "./PokemonDetails";

type Pokemon = { name: string; url: string };

async function fetchPokemon(): Promise<Pokemon[]> {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    if (!res.ok) throw new Error("Failed to load Pokémon");
    const data = await res.json();
    return data.results
}

export default function PokemonList() {
    const [selected, setSelected] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const { data, isLoading, error } = useQuery({
        queryKey: ["pokemon"],
        queryFn: fetchPokemon,
    });

    if (isLoading) return <p className="mt-8 text-gray-400">Loading...</p>;
    if (error) return <p className="mt-8 text-red-400">{error.message}</p>;
    const filtered = (data ?? []).filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Pokémon"
                className="mt-8 w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-white"
            />
            {selected && <PokemonDetail name={selected} />}
            <ul className="mt-8 flex flex-col gap-4">
                {filtered?.map((p) => <li key={p.name} className="bg-gray-800 rounded-lg p-6 text-lg capitalize hover:bg-gray-700 transition-colors">
                    <button
                        onClick={() => setSelected(p.name)}
                        className="w-full text-left"
                    >{p.name}</button>{p.name}</li>)}
            </ul>
        </>
    );
}