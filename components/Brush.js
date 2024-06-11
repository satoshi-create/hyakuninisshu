import React from "react";
import styles from "../styles/Brush.module.css";
import hyakuninisshu from "../libs/data";
import Image from "next/image";

const Brush = () => {
  return (
    
    <section className="section-grid">
      <div className={styles.conteiner}>
        {hyakuninisshu.map((item, index) => {
          const { author, authoren, fudekami, fudesimo, kami, simo } = item;
          return (
            <React.Fragment key={index}>
              <figure className={`${styles[`${authoren}`]} ${styles.fudekami}`}>
                <Image
                  src={fudekami}
                  layout="responsive"
                  width={343}
                  height={874}
                  alt={authoren}
                  // sizes="(min-width:786px) 80vw,100vw "
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
                />
              </figure>
              <figure className={`${styles[`${authoren}`]} ${styles.fudesimo}`}>
                <Image
                  src={fudesimo}
                  layout="responsive"
                  width={255}
                  height={1350}
                  alt={authoren}
                  // sizes="(min-width:786px) 80vw,100vw "
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
                />
              </figure>

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
