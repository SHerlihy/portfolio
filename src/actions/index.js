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

export const resetAdWord = () => {
  return {
    type: "RESET_AD_WORD",
  };
};

export const addLetter = (letter) => {
  return {
    type: "ADD_LETTER",
    letter,
  };
};

export const nextCarouselSlide = (uid, carouselLength) => {
  return {
    type: "NEXT_SLIDE",
    uid,
    carouselLength,
  };
};

export const prevCarouselSlide = (uid, carouselLength) => {
  return {
    type: "PREVIOUS_SLIDE",
    uid,
    carouselLength,
  };
};

export const toggleEnhance = () => {
  return {
    type: "TOGGLE_ENHANCE",
  };
};

export const setIconContact = (bool) => {
  return {
    type: "SET_ICON_CONTACT",
    bool,
  };
};

export const setProjectsIcon = (bool) => {
  return {
    type: "SET_PROJECTS_ICON",
    bool,
  };
};

export const toggleShowContact = () => {
  return {
    type: "TOGGLE_SHOW_CONTACT",
  };
};

export const toggleShowPics = (uid) => {
  return {
    type: "TOGGLE_SHOW_PICS",
    uid,
  };
};
