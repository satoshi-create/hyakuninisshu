import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "../styles/Searchform.module.css";
import { ContextComponent } from "../libs/context";
import hyakuninisshu from "../libs/data";

const Searchform = () => {
  const { value, setValue, handleAttribute, setData, newArr } =
    useContext(ContextComponent);

  const setAttribute = [
    "全て",
    ...new Set(hyakuninisshu.map((item) => item.attribute)),
  ];

  return (
    <section className={`section-grid section-center`}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="input value"
          id="name"
          // ref={searchValue}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div>
        {setAttribute.map((item, i) => {
          return (
            <button
              key={i}
              onClick={(e) => handleAttribute(e)}
              data-id={item}
              className={`btn ${styles.attributeBtn}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Searchform;
