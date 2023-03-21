import type { ReactNode } from "react";

interface iChildren {
  children: ReactNode;
}

interface iComicsContext {
  getComics(): void;
  listComics: iComic[];
}

interface iComic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export type { iChildren, iComicsContext, iComic };