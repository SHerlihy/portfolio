const currentPage = (state = "home", action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_PAGE":
      return action.payload;
    default:
      return state;
  }
};

export default currentPage;
