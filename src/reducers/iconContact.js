const iconContact = (state = false, { type }) => {
  switch (type) {
    case "CONTACT_TO_ICON":
      return true;
    default:
      return state;
  }
};

export default iconContact;
