const adWord = (state = "", { type, letter }) => {
  switch (type) {
    case "RESET_AD_WORD":
      return "";
    case "ADD_LETTER":
      const prev = [...state];
      const update = [prev, letter].toString();
      return update;
    default:
      return state;
  }
};

export default adWord;
