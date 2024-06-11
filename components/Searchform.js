import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "../styles/Searchform.module.css";
import { ContextComponent } from "../libs/context";
import hyakuninisshu from "../libs/data";

const Searchform = () => {
  const { kamiword, setKamiword, handleAttribute, setData, newArr } =
    useContext(ContextComponent);

  return (
    <section className={`section-grid section-center`}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="上の句を入力してください"
          id="name"
          // ref={searchValue}
          value={kamiword}
          onChange={(e) => setKamiword(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Searchform;
