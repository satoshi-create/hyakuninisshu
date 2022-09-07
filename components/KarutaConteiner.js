import React from "react";
import Karuta from "./Karuta"
import styles from "../styles/Karuta.module.css";

const Karutaconteiner = () => {
  return (
    <section className={`section-grid section-center`}>
      <Karuta />
    </section>
  );
};

export default Karutaconteiner;
