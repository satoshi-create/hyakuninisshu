import React, { useContext, useState } from "react";
import styles from "../styles/Tanzaku.module.css";
import Image from "next/image";
import { ContextComponent } from "../libs/context";
import personImg from "../public/tenchitennou.png";

const Tanzaku = () => {
  // const [toggle, setToggle] = useState(false);
  const { toggleContent, state } = useContext(ContextComponent);
  console.log(state.data);

  if (state.data.length < 1) {
    return <h6>Sorry, no products matched your search</h6>;
  }
  return (
    <div className={styles.conteinerTanzaku}>
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
        } = item;
        return (
          <div
            className={`${styles[`${authoren}`]} ${styles.tanzaku}  ${
              bln && styles.flipped
            }`}
            key={index}
            onClick={() => toggleContent(id)}
          >
            <div className={` ${styles.frontBackTanzaku} ${styles.front}`}>
              {kami.map((item, index) => {
                return (
                  <p key={index} className={styles.kami}>
                    {item}
                  </p>
                );
              })}
              <h4 className={styles.authorTanzaku}>{author}</h4>
            </div>
            <div className={` ${styles.frontBackTanzaku} ${styles.back}`}>
              {simo.map((item, index) => {
                return (
                  <p key={index} className={styles.simo}>
                    {item}
                  </p>
                );
              })}
              <h4 className={styles.authorTanzaku}>{author}</h4>
            </div>
            <figure className={`${styles[`${authoren}`]} ${styles.imgTanzaku}`}>
              <Image src={personImg} width={248} height={180} alt={authoren} />
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Tanzaku;
