const adWord = (state = "", { type, letter }) => {
  switch (type) {
    case "RESET_AD_WORD":
      return "";
    case "ADD_LETTER":
      const update = state + letter;
      return update;
    default:
      return state;
  }
};

export default adWord;
