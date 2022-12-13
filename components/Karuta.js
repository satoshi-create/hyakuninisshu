import React, { useState } from "react";
import styles from "../styles/Karuta.module.css";
import hyakuninisshu from "../libs/data";
import Image from "next/image";
const Karuta = () => {
  console.log(hyakuninisshu);
  return (
    <div className={styles.conteiner}>
      {hyakuninisshu.map((item, index) => {
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
            {/* <figure className={`${styles[`${authoren}`]} ${styles.img01}`}>
              <Image
                src={karutaimg01}
                layout="responsive"
                width={358}
                height={341}
                // objectFit="cover"
                alt={authoren}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
              />
            </figure>
            <figure className={`${styles[`${authoren}`]} ${styles.img02}`}>
              <Image
                src={karutaimg02}
                layout="responsive"
                width={411}
                height={440}
                // objectFit="cover"
                alt={authoren}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
              />
            </figure> */}
            <h4 className={styles.author}>{author}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Karuta;
