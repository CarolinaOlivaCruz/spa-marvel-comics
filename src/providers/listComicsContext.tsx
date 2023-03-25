import React from "react";
import md5 from "md5";
import moment from "moment";
import env from "react-dotenv";
import { createContext, useState } from "react";
import { iChildren, iComic, iComicsContext } from "../interfaces";
import {apiService} from "../services/api";

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

  const generateHash = (ts: string) => {
    const privateKey = env.PRIVATE_KEY || '';
    const publicKey = env.PUBLIC_KEY || '';
    return md5(ts + privateKey + publicKey);
  };

  const getComics = async () => {
    try {
      const ts = moment().utc().format("x");
      const hash = generateHash(ts);
      const response = await apiService.get(
        `/comics?ts=${ts}&apikey=${env.PUBLIC_KEY}&hash=${hash}`
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