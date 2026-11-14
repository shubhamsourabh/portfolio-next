"use client";
import { useFavorites } from "./store/favorites";
export default function FavoriteCount(){
        const {favorites} =useFavorites();
        return (
           <span> Favorites({favorites.length})</span>
        )
}