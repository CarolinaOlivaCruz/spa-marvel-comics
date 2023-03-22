import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import ListComics from "../../components/ListComics";
import { ComicsContext } from "../../providers/listComicsContext";

const HomePage = () => {
  const { getComics } = useContext(ComicsContext);
  
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
