const viewVertical = (state = false, { type, payload }) => {
  switch (type) {
    case "CHANGE_VIEW_VERTICAL":
      return payload;
    default:
      return state;
  }
};

export default viewVertical;
