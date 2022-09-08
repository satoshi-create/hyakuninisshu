import React from "react";
import styles from "../styles/Tategaki.module.css";
import hyakuninisshu from "../libs/data";

// var arr = [["田中"], "太郎", "二郎", "三郎", "花子"];

const Tategaki = () => {
  return (
    <section className="section-grid">
      {/* <p>{arr.join(",")}</p> */}
      <div className={styles.conteiner}>
        {hyakuninisshu.map((item, index) => {
          const { kami, simo, author, authoren, fudekami, fudesimo } = item;
          console.log(kami);
          return (
            <div
              className={`${styles[`${authoren}`]} ${styles.card}`}
              key={index}
            >
              <p>{kami.join("")}</p>
              <p>{simo.join("")}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tategaki;
