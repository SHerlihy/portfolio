const iconProjects = (state = false, { type, bool }) => {
  switch (type) {
    case "SET_PROJECTS_CONTACT":
      return bool;
    default:
      return state;
  }
};

export default iconProjects;
