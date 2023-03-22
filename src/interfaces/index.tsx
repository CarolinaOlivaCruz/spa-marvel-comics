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
