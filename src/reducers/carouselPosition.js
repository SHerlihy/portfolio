const carouselPosition = (state = {}, { type, uid, carouselLength }) => {
  const update = { ...state };
  if (state[uid] === undefined) update[uid] = 0;
  switch (type) {
    case "NEXT_SLIDE":
      if (state[uid] === carouselLength) {
        update[uid] = 0;
        return update;
      }
      update[uid]++;
      return update;
    case "PREVIOUS_SLIDE":
      if (state[uid] == 0 || state[uid] == undefined) {
        update[uid] = carouselLength;
        return update;
      }
      update[uid]--;
      return update;
    default:
      return state;
  }
};

export default carouselPosition;
