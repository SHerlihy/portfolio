const showPics = (state = false, { type, uid }) => {
  const update = { ...state };
  if (state[uid] === undefined) update[uid] = false;
  switch (type) {
    case "TOGGLE_SHOW_PICS":
      update[uid] = !update[uid];
      return update;
    default:
      return state;
  }
};

export default showPics;
