import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ListComics from "../../components/ListComics";
import { iComic } from "../../interfaces";
import { ComicsContext } from "../../providers/listComicsContext";

const HomePage = () => {
  const { getComics, listComics } = useContext(ComicsContext);
  
  useEffect(() => {
    getComics();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <main>
        <ListComics />
      </main>
    </>
  );
};

export default HomePage;
