
import { create } from "zustand";

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (name: string) => void;
}

export const useFavorites = create<FavoritesState>((set) => ({
  favorites: [],
  toggleFavorite: (name) =>
    set((state) => ({
      favorites:state.favorites.includes(name)
      ?state.favorites.filter((n) => n !== name)
      :[...state.favorites,name]
    })),
}));