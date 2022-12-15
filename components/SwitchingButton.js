import React, { useContext } from "react";
import { ContextComponent } from "../libs/context";
import styles from "../styles/SwitchingButton.module.css";
import { List, Bookmark, Square } from "react-feather";
const SwitchingButton = () => {
  const { setIndex } = useContext(ContextComponent);

  return (
    <div className={`${styles.SwitchingButton} section-grid section-center`}>
      <div>
        <button onClick={() => setIndex(1)}>
          <Square />
        </button>
        <button onClick={() => setIndex(2)}>
          <Bookmark />
        </button>
        <button onClick={() => setIndex(3)}>
          <List />
        </button>
      </div>
    </div>
  );
};

export default SwitchingButton;
