const iconProjects = (state = false, { type }) => {
  switch (type) {
    case "TOGGLE_SHOW_CONTACT":
      return !state;
    default:
      return state;
  }
};

export default iconProjects;
