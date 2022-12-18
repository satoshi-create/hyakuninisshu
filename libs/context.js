import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  useReducer,
} from "react";
import hyakuninisshu from "../libs/data";

export const ContextComponent = createContext();

export const ContedtProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(hyakuninisshu);
  const [index, setIndex] = useState(null);
  const [toggleEraColor, setToggleEracolor] = useState(false);
  console.log(toggleEraColor);
  const init = {
    data: data,
  };

  const resetContents = (i) => {
    setIndex(i);
    dispatch({ type: "RESET_CONTENT" });
  };

  const toggleContent = (id) => {
    dispatch({ type: "TOGGLE_CONTENT", payload: id });
  };

  const handleAttribute = (e) => {
    const el = e.target;
    dispatch({ type: "ATTRIBUTE_ITEMS", payload: el });
    setValue("");
  };

  const handleSort = (e) => {
    const el = e.target.value;
    console.log(el);
    dispatch({ type: "SORT_ITEMS", payload: el });
  };

  const handleShuffle = () => {
    dispatch({ type: "SHUFFLE_ITEMS" });
  };

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
    dispatch({ type: "DISPLAY_ITEMS", payload: filterdData });
  };

  const reducer = (state, action) => {
    if (action.type === "TOGGLE_CONTENT") {
      let tempData = state.data.map((item) => {
        if (item.id === action.payload) {
          return { ...item, bln: !item.bln };
        }
        return item;
      });
      return { data: tempData };
    }
    if (action.type === "DISPLAY_ITEMS") {
      return { ...state, data: action.payload };
    }
    if (action.type === "ATTRIBUTE_ITEMS") {
      if (action.payload.dataset.id === "全て") {
        return { ...state, data: data };
      } else {
        let tempData = data.filter(
          (item) => item.attribute === action.payload.dataset.id
        );
        return { ...state, data: tempData };
      }
    }
    if (action.type === "RESET_CONTENT") {
      let tempData = data.sort((a, b) => {
        return a.id - b.id;
      });
      return { ...state, data: tempData };
    }
    if (action.type === "SORT_ITEMS") {
      switch (action.payload) {
        case "ASC": {
          let tempData = state.data.sort((a, b) => {
            return a.id - b.id;
          });
          return { ...state, data: tempData };
          break;
        }
        case "DEC": {
          let tempData = state.data.sort((a, b) => {
            return b.id - a.id;
          });
          return { ...state, data: tempData };
          break;
        }
        case "AtoN": {
          let tempData = state.data.sort((a, b) => {
            return a.poemhira.localeCompare(b.poemhira, "ja");
          });
          return { ...state, data: tempData };
          break;
        }
        case "NtoA": {
          let tempData = state.data.sort((a, b) => {
            return b.poemhira.localeCompare(a.poemhira, "ja");
          });
          return { ...state, data: tempData };
          break;
        }
        default:
          console.log("error");
      }
    }
    if (action.type === "SHUFFLE_ITEMS") {
      const shuffleArray = (sourceArr) => {
        const newData = sourceArr.concat();
        for (let i = sourceArr.length - 1; i >= 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [sourceArr[i], sourceArr[randomIndex]] = [
            sourceArr[randomIndex],
            sourceArr[i],
          ];
        }
        return newData;
      };
      return { ...state, data: shuffleArray(state.data) };
    }
  };

  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <ContextComponent.Provider
      value={{
        value,
        setValue,
        data,
        index,
        setIndex,
        setData,
        toggleContent,
        handleAttribute,
        state,
        resetContents,
        handleSort,
        toggleEraColor,
        setToggleEracolor,
        handleShuffle,
      }}
    >
      {children}
    </ContextComponent.Provider>
  );
};
