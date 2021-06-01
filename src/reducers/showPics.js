const showPics = (state = false, { type }) => {
  switch (type) {
    case "TOGGLE_SHOW_PICS":
      const prev = { ...state };
      return !prev;
    default:
      return state;
  }
};

export default showPics;
