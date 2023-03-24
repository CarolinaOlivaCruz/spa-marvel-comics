import React, { useContext, useEffect } from "react";
import ButtonArrow from "../../components/ButtonArrow";
import Header from "../../components/Header";
import ListComics from "../../components/ListComics";
import CardDetails from "../../components/ModalCard";
import { ComicsContext } from "../../providers/listComicsContext";

const HomePage = () => {
  const { getComics, isModal } = useContext(ComicsContext);
  
  useEffect(() => {
    getComics();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    {isModal && <CardDetails />}
      <Header />
      <main>
        <ListComics />
        <ButtonArrow/>
      </main>
    </>
  );
};

export default HomePage;
