"use client";

import { useQuery } from "@tanstack/react-query";

type Detail = {
    name: string;
    height: number;
    weight: number;
    sprites: { front_default: string };
    types: { type: { name: string } }[];
};

async function fetchDetail(name: string): Promise<Detail> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) throw new Error("Failed to load details");
    return res.json();
}

export default function PokemonDetail({ name }: { name: string }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["pokemon", name],
        queryFn: () => fetchDetail(name),
    });

    if (isLoading) return <p className="mt-8 text-gray-400">Loading...</p>;
    if (error) return <p className="mt-8 text-red-400">{error.message}</p>;
    if (!data) return null;
    return (
        <div className="mt-6 rounded-lg bg-gray-800 p-6">
            <img src={data.sprites.front_default} alt={data.name} />
            <h2 className="text-xl font-semibold capitalize">{data.name}</h2>
            <p className="mt-2 text-gray-400">Height: {data.height}</p>
            <p className="text-gray-400">Weight: {data.weight}</p>
            <p className="text-gray-400">
                Types: {data.types.map((t) => t.type.name).join(", ")}
            </p>
        </div>
    );
}