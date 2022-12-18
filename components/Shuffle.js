import React,{useContext} from "react";
import styles from "../styles/Shuffle.module.css";
import { Shuffle } from "react-feather";
import { ContextComponent } from "../libs/context";

const ShuffleComp = () => {
  const { handleShuffle } = useContext(ContextComponent);

  return (
    <div className={styles.shuffle}>
      <button title="shuffle" onClick={handleShuffle}>
        <Shuffle />
      </button>
    </div>
  );
};

export default ShuffleComp;
