import React, { useContext } from "react";
import { ContextComponent } from "../libs/context";
import styles from "../styles/SwitchingButton.module.css";
import { List, Bookmark, Square } from "react-feather";
const SwitchingButton = () => {
  const { resetContents } = useContext(ContextComponent);

  return (
    <div className={`${styles.SwitchingButton} section-grid section-center`}>
      <div>
        <button onClick={() => resetContents(1)}>
          <Square />
        </button>
        <button onClick={() => resetContents(2)}>
          <Bookmark />
        </button>
        <button onClick={() => resetContents(3)}>
          <List />
        </button>
      </div>
    </div>
  );
};

export default SwitchingButton;
