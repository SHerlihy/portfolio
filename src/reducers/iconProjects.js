const iconProjects = (state = false, { type }) => {
  switch (type) {
    case "PROJECTS_TO_ICON":
      return true;
    default:
      return state;
  }
};

export default iconProjects;
