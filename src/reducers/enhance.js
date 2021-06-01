const enhance = (state = false, { type }) => {
  switch (type) {
    case "TOGGLE_ENHANCE":
      return !state;
    default:
      return state;
  }
};

export default enhance;
