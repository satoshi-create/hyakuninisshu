import React, { useState, useContext } from "react";
import styles from "../styles/Karuta.module.css";
import hyakuninisshu from "../libs/data";
import Image from "next/image";
import { ContextComponent } from "../libs/context";
import personImg from "../public/tenchitennou.png";

const Karuta = () => {
  const { data } = useContext(ContextComponent);

  if (data.length < 1) {
    return <h6>Sorry, no products matched your search</h6>;
  }

  return (
    <div className={styles.conteiner}>
      {data.map((item, index) => {
        const { kami, simo, author, authoren, karutaimg01, karutaimg02 } = item;
        return (
          <div
            className={`${styles[`${authoren}`]} ${styles.card}`}
            key={index}
          >
            {kami.map((item, index) => {
              return (
                <p key={index} className={styles.kami}>
                  {item}
                </p>
              );
            })}
            <figure className={`${styles[`${authoren}`]} ${styles.img}`}>
              <Image src={personImg} width={248} height={180} alt={authoren} />
            </figure>
            <h4 className={styles.author}>{author}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Karuta;
