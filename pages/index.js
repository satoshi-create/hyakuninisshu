import React, { useState, useContext } from "react";
import KarutaConteiner from "../components/KarutaConteiner";
import Searchform from "../components/Searchform";
import SwitchingButton from "../components/SwitchingButton";
import Karuta from "../components/Karuta";
import List from "../components/List";
import Tanzaku from "../components/Tanzaku";
import { ContextComponent } from "../libs/context";

const Home = () => {
  const { index } = useContext(ContextComponent);

  const contents = () => {
    if (index === 1) {
      return <Karuta />;
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
      <section className={`section-grid section-center`}>
        {/* <Karuta/> */}
        {index === null ? <Karuta /> : contents()}
      </section>
    </div>
  );
};

export default Home;
