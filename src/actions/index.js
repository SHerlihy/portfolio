export const changeCurrentPage = (page) => {
  return {
    type: "CHANGE_CURRENT_PAGE",
    payload: page,
  };
};

export const changeViewVertical = (vertical) => {
  return {
    type: "CHANGE_VIEW_VERTICAL",
    payload: vertical,
  };
};
