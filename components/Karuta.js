import React, { useState } from "react";
import styles from "../styles/Karuta.module.css";
import hyakuninisshu from "../libs/data";

const Karuta = () => {
  console.log(hyakuninisshu);
  return (
    <div className={styles.conteiner}>
      {hyakuninisshu.map((item, index) => {
        const { kami, simo, author, authoren } = item;
        return (
          <div
            className={`${styles[`${authoren}`]} ${styles.card}`}
            key={index}
          >
            {kami.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
            <h4 className={styles.author}>{author}</h4>
          </div>
        );
      })}

      {/* <div className={`${styles.yakamochi} ${styles.card}`}>
        <p>かささぎのわたせる</p>
        <p>橋におく霜の</p>
        <h4 className={styles.author}>中納言　家持</h4>
      </div> */}
    </div>
  );
};

export default Karuta;
