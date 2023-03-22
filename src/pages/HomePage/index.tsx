import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ListComics from "../../components/ListComics";
import { iComic } from "../../interfaces";
import { ComicsContext } from "../../providers/listComicsContext";
import StyledImg from "./style";

const HomePage = () => {
  const { getComics, listComics } = useContext(ComicsContext);
  const [selectedComic, setSelectedComic] = useState<iComic | undefined>();

  useEffect(() => {
    getComics();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setSelectedComic(listComics.find((item) => item.id === 1590));
  }, [listComics]);

  return (
    <>
      <Header />
      <main>
        {selectedComic && (
          <StyledImg
            src={`${selectedComic?.images[0]?.path}.${selectedComic?.images[0]?.extension}`}
            alt={selectedComic?.title}
          />
        )}
        <ListComics />
      </main>
    </>
  );
};

export default HomePage;
