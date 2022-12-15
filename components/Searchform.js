import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "../styles/Searchform.module.css";
import { ContextComponent } from "../libs/context";
import allData from "../libs/data";

const Searchform = () => {
  const { value, setValue, data, setData } = useContext(ContextComponent);

  console.log(value);
  // const searchValue = useRef();
  // useEffect(() => {
  //   searchValue.current.focus();
  // }, []);

  const setAttribute = [
    "全て",
    ...new Set(allData.map((item) => item.attribute)),
  ];

  const handleAttribute = (e) => {
    const el = e.target;

    if (el.dataset.id === "全て") {
      setData(allData);
    } else {
      const attributeData = allData.filter(
        (item) => item.attribute === el.dataset.id
      );
      setData(attributeData);
    }
    setValue("");
  };
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
