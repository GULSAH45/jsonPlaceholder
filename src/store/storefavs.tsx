import { create } from "zustand";
import {persist} from "zustand/middleware"
import { PhotoParams } from "../pages/AlbumDetail";


interface FavsParams {
    favorites: PhotoParams[],
    addFav: (photo: PhotoParams ) => void,
    removeFav: (id: number) => void,
    userId: number
}



export const useStore = create()(
persist(
    (set) => ({
        favorites: [],
        addFav:(photo:PhotoParams)=>set((state) => ({favorites: [...state.favorites, photo],})),
        removeFav:(id:number)=>set((state) => ({favorites: state.favorites.filter((photo) => photo.id !== id),})),
    }),
    {
        name: 'favs-store',
    }
)
)