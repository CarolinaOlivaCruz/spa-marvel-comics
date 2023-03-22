import type { ReactNode } from "react";

interface iChildren {
  children: ReactNode;
}

interface iComicsContext {
  getComics(): void;
  listComics: iComic[];
  setListComics(list: iComic[]): void;
}

interface iComic {
  id: number;
  title: string;
  description: string;
  images: any;
  prices: any;
  variantDescription: string;
}

export type { iChildren, iComicsContext, iComic };
