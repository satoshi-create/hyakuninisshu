import React,{useContext} from 'react'
import { ContextComponent } from "../libs/context";
import styles from "../styles/Searchform.module.css";
import hyakuninisshu from "../libs/data";

const AttributeButton = () => {
   const { value, setValue, handleAttribute, setData, newArr } =
    useContext(ContextComponent);

      const setAttribute = [
    "全て",
    ...new Set(hyakuninisshu.map((item) => item.attribute)),
  ];

  return (
            <section className={`section-grid section-center`}>
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
  )
}

export default AttributeButton