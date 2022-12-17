import React, { useContext } from "react";
import styles from "../styles/Sort.module.css";
import { ContextComponent } from "../libs/context";

const Sort = () => {
  const { handleSort } = useContext(ContextComponent);

  return (
    <div className={`${styles.sort} section-grid section-center`}>
      <select name="sort" onChange={(e) => handleSort(e)}>
        {/* <option value="ASC">選択してください</option> */}
        <option value="ASC" selected>
          昇順
        </option>
        <option value="DEC">降順</option>
        <option value="AtoN">五十音順（あ→ん）</option>
        <option value="NtoA">五十音順（ん→あ）</option>
      </select>
    </div>
  );
};

export default Sort;
