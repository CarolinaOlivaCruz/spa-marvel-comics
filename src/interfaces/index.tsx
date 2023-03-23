import type { ReactNode } from "react";

interface iChildren {
  children: ReactNode;
}

interface iComicsContext {
  getComics: () => Promise<void>;
  listComics: iComic[];
  setListComics(list: iComic[]): void;
  setIsModal: (isModal: boolean) => void;
  isModal: boolean;
  setIsComic(comic: iComic | undefined): void;
  isComic: iComic | undefined;
}

interface iComic {
  id: number;
  title: string;
  description: string;
  images: any;
  prices: any;
  variantDescription: string;
  creators: iCreator[];
  characters: iItems;
}

interface iItems {
  items: { name: string }[];
}

interface iCreator {
  name: string;
  role: string;
}

interface iCartContext {
  setCurrentSale(data: iComic[]): void;
  addCart(data: iComic): void;
  deleteCart(index: number): void;
  currentSale: iComic[];
  Total: number;
}

export type {
  iChildren,
  iComicsContext,
  iComic,
  iCreator,
  iItems,
  iCartContext,
};
