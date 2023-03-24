import md5 from "md5";
import "dotenv/config";
import { createContext, useState } from "react";
import { iChildren, iComic, iComicsContext } from "../interfaces";
import apiService from "../services/api";

const time = Number(new Date());
const privateKey = process.env.PRIVATE_KEY || '';

const hash = md5(time + privateKey + process.env.PUBLIC_KEY);

const ComicsContext = createContext<iComicsContext>({
  listComics: [],
  setListComics: () => [],
  getComics: async () => {},
  setIsModal: () => {},
  isModal: false,
  isComic: undefined,
  setIsComic: () => {},
});

const ComicsProvider = ({ children }: iChildren) => {
  const [listComics, setListComics] = useState<iComic[]>([]);
  const [isModal, setIsModal] = useState(false);
  const [isComic, setIsComic] = useState<iComic | undefined>(undefined);

  const getComics = async () => {
    try {
      const response = await apiService.get(
        `comics?ts=${time}&apikey=${privateKey}&hash=${hash}`
      );

      setListComics(response.data.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ComicsContext.Provider
      value={{
        listComics,
        getComics,
        setListComics,
        setIsModal,
        isModal,
        isComic,
        setIsComic,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export { ComicsProvider, ComicsContext };
