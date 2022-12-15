import React, { useState, useContext } from "react";
import KarutaConteiner from "../components/KarutaConteiner";
import List from "../components/List";
import Searchform from "../components/Searchform";
import Tanzaku from "../components/Tanzaku";
import { ContextComponent } from "../libs/context";
import SwitchingButton from "../components/SwitchingButton";

const Home = () => {
  const { index } = useContext(ContextComponent);
  const contents = () => {
    if (index === 1) {
      return <KarutaConteiner />;
    } else if (index === 2) {
      return <Tanzaku />;
    } else {
      return <List />;
    }
  };
  return (
    <div>
      <Searchform />
      <SwitchingButton />
      {index === null ? <KarutaConteiner /> : contents()}
    </div>
  );
};

export default Home;
