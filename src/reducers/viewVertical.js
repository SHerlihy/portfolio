const viewVertical = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_VIEW_VERTICAL":
      return action.payload;
    default:
      return state;
  }
};

export default viewVertical;
