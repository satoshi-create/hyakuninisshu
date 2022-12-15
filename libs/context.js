import React, { useContext, useState, createContext, useEffect } from "react";
import hyakuninisshu from "../libs/data";

export const ContextComponent = createContext();

export const ContedtProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(null);

  const fetchData = (q) => {
    const filterdData = hyakuninisshu.filter((item) => {
      const kamiString = item.kami.join("");
      const simoString = item.simo.join("");
      const kamisimoString = kamiString + simoString;
      const poem = kamisimoString.includes(q);
      const poemen = item.poemen.replace(/\s+/g, "").includes(q);
      const author = item.author.includes(q);
      const authoren = item.authoren.includes(q);
      return author || authoren || poem || poemen;
    });
    console.log(filterdData);
    setData(filterdData);
  };
  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <ContextComponent.Provider
      value={{ value, setValue, data, index, setIndex,setData }}
    >
      {children}
    </ContextComponent.Provider>
  );
};
