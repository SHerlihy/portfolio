import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../testUtils";
import { Provider } from "react-redux";
import Slide from "./Slide";
import { projects } from "../../projectInfo";

const defaultProps = {
  e: projects.multiplayer.pics[0],
  i: 0,
  carouselPosition: 0,
  descriptions: projects.multiplayer.descriptions,
  button: false,
};

const setup = (props = {}) => {
  const store = storeFactory(props);
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <Provider store={store}>
      <Slide {...setupProps} />
    </Provider>
  );
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should render Slide, one image, two descriptions", () => {
    const slideComponent = findByTestAttr(wrapper, "component-slide");
    expect(slideComponent.length).toBe(1);

    const slideImage = () => findByTestAttr(wrapper, "slide-image");
    expect(slideImage().length).toBe(1);

    const slideDescription = findByTestAttr(wrapper, "slide-description");
    expect(slideDescription.length).toBe(2);
  });
});

describe("mouseOver", () => {
  const slideImage = () => findByTestAttr(wrapper, "slide-image");
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ enhance: false });
  });

  test("should enhancePic on mouse enter", () => {
    slideImage().simulate("mouseenter");
    const imageStyle = slideImage();
    expect(imageStyle.hasClass("slide-enhance")).toEqual(true);
  });

  test("should reducePic on mouse leave after mouseenter", () => {
    slideImage().simulate("mouseenter");
    const imageStyle = slideImage();
    expect(imageStyle.hasClass("slide-enhance")).toEqual(true);
    slideImage().simulate("mouseleave");
    const imageStyleOther = slideImage();
    expect(imageStyleOther.hasClass("slide-reduce")).toEqual(true);
  });
});
