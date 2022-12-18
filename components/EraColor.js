import React, { useContext } from "react";
import styles from "../styles/EraColor.module.css";
import { ContextComponent } from "../libs/context";

const EraColor = () => {
  const { toggleEraColor, setToggleEracolor } = useContext(ContextComponent);

  return (
    <div className={styles.era}>
      <button
        className="btn"
        onClick={() => setToggleEracolor(!toggleEraColor)}
      >
        時代ごとに色分け
      </button>
    </div>
  );
};

export default EraColor;
