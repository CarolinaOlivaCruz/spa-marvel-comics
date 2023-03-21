import React from "react";
import Header from "../../components/Header";
import ListComics from "../../components/ListComics";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <ListComics/>
      </main>
    </>
  );
};

export default HomePage;
