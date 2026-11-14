"use client";
import { useFavorites } from "./store/favorites";
export default function FavoriteCount(){
        const {favorites} =useFavorites();
        return (
           <span className="text-gray-300"> Favorites({favorites.length})</span>
        )
}