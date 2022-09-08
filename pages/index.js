import React from "react";
import Brush from "../components/Brush";
import KarutaConteiner from "../components/KarutaConteiner";
import Tategaki from "../components/Tategaki"

const index = () => {
  return (
    <div>
      <KarutaConteiner />
      <Tategaki />
      <Brush/>
    </div>
  );
};

export default index;
