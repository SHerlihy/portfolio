const iconContact = (state = false, { type, bool }) => {
  switch (type) {
    case "SET_ICON_CONTACT":
      return bool;
    default:
      return state;
  }
};

export default iconContact;
