const iconProjects = (state = false, { type }) => {
  switch (type) {
    case "TOGGLE_SHOW_CONTACT":
      const prev = { ...state };
      return !prev;
    default:
      return state;
  }
};

export default iconProjects;
