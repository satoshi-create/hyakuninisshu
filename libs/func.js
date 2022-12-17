const eraColor = (x) => {
  switch (x) {
    case "飛鳥":
      return "darkseagreen";
      break;
    case "奈良":
      return "blue";
      break;
    case "平安":
      return "pink";
      break;
    case "鎌倉":
      return "darkgreen";
      break;
    case "不明":
      return "brown";
      break;
    default:
      break;
  }
};


export {eraColor}