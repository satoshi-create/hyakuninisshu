import React from "react";
import styles from "../styles/Brush.module.css";
import hyakuninisshu from "../libs/data";

const Brush = () => {
  return (
    <section className="section-grid">
      <div className={styles.conteiner}>
        {hyakuninisshu.map((item, index) => {
          const { author, authoren, fudekami, fudesimo, kami, simo } = item;
          return (
            <React.Fragment key={index}>
              {fudekami && (
                <img
                  src={fudekami}
                  alt={author}
                  className={`${styles[`${authoren}`]} ${styles.fudekami}`}
                />
              )}
              {fudekami && (
                <img
                  src={fudesimo}
                  alt={author}
                  className={`${styles[`${authoren}`]} ${styles.fudesimo}`}
                />
              )}
              <p className={`${styles[`${authoren}`]} ${styles.kami}`}>
                {kami.join("")}
              </p>
              <p className={`${styles[`${authoren}`]} ${styles.simo}`}>
                {simo.join("")}
              </p>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Brush;
