import React, { useState, useContext, useReducer, useEffect } from "react";
import styles from "../styles/Karuta.module.css";
import hyakuninisshu from "../libs/data";
import Image from "next/image";
import { ContextComponent } from "../libs/context";
import personImg from "../public/tenchitennou.png";
import { eraColor } from "../libs/func";

const Karuta = () => {
  const { toggleContent, state, toggleEraColor } = useContext(ContextComponent);

  if (state.data.length < 1) {
    return <h6>Sorry, no products matched your search</h6>;
  }
  return (
    <div className={styles.conteiner}>
      {state.data.map((item, index) => {
        const {
          kami,
          simo,
          author,
          authoren,
          karutaimg01,
          karutaimg02,
          bln,
          id,
          era,
        } = item;
        return (
          <div
            className={`${styles[`${authoren}`]} ${styles.card} ${
              bln && styles.flipped
            }`}
            key={index}
            onClick={() => toggleContent(id)}
          >
            <div
              className={`${
                toggleEraColor ? styles[`${eraColor(era)}`] : styles.color
              } ${styles.frontBack} ${styles.front}`}
            >
              {kami.map((item, index) => {
                return (
                  <p key={index} className={styles.kami}>
                    {item}
                  </p>
                );
              })}
              <h4 className={styles.author}>{author}</h4>
            </div>
            <div
              className={`${
                toggleEraColor ? styles[`${eraColor(era)}`] : styles.color
              } ${styles.frontBack} ${styles.back}`}
            >
              {simo.map((item, index) => {
                return (
                  <p key={index} className={styles.simo}>
                    {item}
                  </p>
                );
              })}
              <h4 className={styles.author}>{author}</h4>
              {/* <figure className={`${styles[`${authoren}`]} ${styles.img}`}>
                <Image
                  src={personImg}
                  width={248}
                  height={180}
                  alt={authoren}
                />
              </figure> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Karuta;
