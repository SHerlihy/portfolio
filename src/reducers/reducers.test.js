import carouselPosition from "./carouselPosition";
import adWord from "./adWord";
import currentPage from "./currentPage";
import viewVertical from "./viewVertical";
import enhance from "./enhance";
import iconContact from "./iconContact";
import iconProjects from "./iconProjects";
import showContact from "./showContact";
import showPics from "./showPics";

describe("carouselPosition reducer", () => {
  test("should return initial state", () => {
    expect(carouselPosition(undefined, {})).toEqual({});
  });
  test("should handle NEXT_SLIDE when current word < carousel length", () => {
    expect(
      carouselPosition(
        {},
        { type: "NEXT_SLIDE", uid: "yoo", carouselLength: 3 }
      )
    ).toEqual({ yoo: 1 });
  });
  test("should handle NEXT_SLIDE when current word = carousel length", () => {
    expect(
      carouselPosition(
        { yoo: 3 },
        { type: "NEXT_SLIDE", uid: "yoo", carouselLength: 3 }
      )
    ).toEqual({ yoo: 0 });
  });
  test("should handle PREVIOUS_SLIDE when current word > 0", () => {
    expect(
      carouselPosition(
        { yoo: 3 },
        { type: "PREVIOUS_SLIDE", uid: "yoo", carouselLength: 3 }
      )
    ).toEqual({ yoo: 2 });
  });
  test("should handle PREVIOUS_SLIDE when current word = 0", () => {
    expect(
      carouselPosition(
        { yoo: 0 },
        { type: "PREVIOUS_SLIDE", uid: "yoo", carouselLength: 3 }
      )
    ).toEqual({ yoo: 3 });
  });
});

describe("adWord reducer", () => {
  test("should return initial state", () => {
    expect(adWord(undefined, {})).toEqual("");
  });
  test("should handle ADD_LETTER", () => {
    expect(adWord("", { type: "ADD_LETTER", letter: "g" })).toEqual("g");
  });
  test("should handle RESET_AD_WORD", () => {
    expect(adWord("React", { type: "RESET_AD_WORD" })).toEqual("");
  });
});

describe("currentPage reducer", () => {
  test("should return initial state", () => {
    expect(currentPage(undefined, {})).toEqual("home");
  });
  test("should handle CHANGE_CURRENT_PAGE", () => {
    expect(
      currentPage("home", {
        type: "CHANGE_CURRENT_PAGE",
        payload: "multiplayer",
      })
    ).toEqual("multiplayer");
    expect(
      currentPage("home", { type: "CHANGE_CURRENT_PAGE", payload: "burger" })
    ).toEqual("burger");
  });
});

describe("viewVertical reducer", () => {
  test("should return initial state", () => {
    expect(viewVertical(undefined, {})).toEqual(false);
  });
  test("should handle CHANGE_VIEW_VERTICAL", () => {
    expect(
      viewVertical(false, { type: "CHANGE_VIEW_VERTICAL", payload: true })
    ).toEqual(true);
    expect(
      viewVertical(true, { type: "CHANGE_VIEW_VERTICAL", payload: false })
    ).toEqual(false);
  });
});

describe("enhance reducer", () => {
  test("should return initial state", () => {
    expect(enhance(undefined, {})).toEqual(false);
  });
  test("should handle TOGGLE_ENHANCE", () => {
    expect(enhance(false, { type: "TOGGLE_ENHANCE" })).toEqual(true);
    expect(enhance(true, { type: "TOGGLE_ENHANCE" })).toEqual(false);
  });
});

describe("iconContact reducer", () => {
  test("should return initial state", () => {
    expect(iconContact(undefined, {})).toEqual(false);
  });
  test("should handle SET_ICON_CONTACT", () => {
    expect(
      iconContact(false, { type: "SET_ICON_CONTACT", bool: true })
    ).toEqual(true);
    expect(
      iconContact(true, { type: "SET_ICON_CONTACT", bool: false })
    ).toEqual(false);
  });
});

describe("iconProjects reducer", () => {
  test("should return initial state", () => {
    expect(iconProjects(undefined, {})).toEqual(false);
  });
  test("should handle SET_PROJECTS_CONTACT", () => {
    expect(
      iconProjects(false, { type: "SET_PROJECTS_CONTACT", bool: true })
    ).toEqual(true);
    expect(
      iconProjects(true, { type: "SET_PROJECTS_CONTACT", bool: false })
    ).toEqual(false);
  });
});

describe("showContact reducer", () => {
  test("should return initial state", () => {
    expect(showContact(undefined, {})).toEqual(false);
  });
  test("should handle TOGGLE_SHOW_CONTACT", () => {
    expect(showContact(false, { type: "TOGGLE_SHOW_CONTACT" })).toEqual(true);
    expect(showContact(true, { type: "TOGGLE_SHOW_CONTACT" })).toEqual(false);
  });
});

describe("showPics reducer", () => {
  test("should return initial state", () => {
    expect(showPics(undefined, {})).toEqual(false);
  });
  test("should handle TOGGLE_SHOW_PICS for new pic toggling", () => {
    expect(
      showPics(undefined, { type: "TOGGLE_SHOW_PICS", uid: "moo" })
    ).toEqual({ moo: true });
  });
  test("should handle TOGGLE_SHOW_PICS for existing pic toggling", () => {
    expect(
      showPics({ moo: true }, { type: "TOGGLE_SHOW_PICS", uid: "moo" })
    ).toEqual({ moo: false });
  });
});
