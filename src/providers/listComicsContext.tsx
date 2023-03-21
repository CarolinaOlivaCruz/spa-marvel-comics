import md5 from "md5";
import { createContext, useState } from "react";
import { iChildren, iComic, iComicsContext } from "../interfaces";
import apiService from "../services/api";

const publicKey = "47c67153788247549eb5dcc43c36a616";
const privateKey = "45c4c36067cffe248cf71395ffb42395bf74a225";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const ComicsContext = createContext<iComicsContext>({
  listComics: [],
  getComics: async () => {},
});

const ComicsProvider = ({ children }: iChildren) => {
  const [listComics, setListComics] = useState<iComic[]>([]);

  const getComics = async () => {
    try {
      const response = await apiService.get(
        `comics?ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
      console.log(response);
      
      setListComics(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ComicsContext.Provider
      value={{
        listComics,
        getComics,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export { ComicsProvider, ComicsContext };