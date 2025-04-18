import { create } from "zustand";
import {persist} from "zustand/middleware"
import { PhotoParams } from "../pages/AlbumDetail";


export interface FavsParams {
    favorites: PhotoParams[],
    addFav: (photo: PhotoParams, url:string ) => void,
    removeFav: (id: number) => void,
    userId: number
}


export const useStore = create<FavsParams>()(
    persist(
      (set) => ({
        favorites: [],
        userId: 0, // Varsayılan userId ekledik
        addFav: (photo: PhotoParams, url:string) =>
          set((state) => ({
            favorites: [...state.favorites, {...photo, url:url}],
          })),
        removeFav: (id: number) =>
          set((state) => ({
            favorites: state.favorites.filter((photo) => photo.id !== id),
          })),
        setUserId: (id: number) => set(() => ({ userId: id })), // Kullanıcı ID'sini değiştirme fonksiyonu
      }),
      {
        name: "favs-store",
      }
    )
  );
  