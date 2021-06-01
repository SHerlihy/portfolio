const currentPage = (state = "home", { type, payload }) => {
  switch (type) {
    case "CHANGE_CURRENT_PAGE":
      return payload;
    default:
      return state;
  }
};

export default currentPage;
