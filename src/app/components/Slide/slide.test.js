import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../testUtils";
import { Provider } from "react-redux";
import Slide from "./Slide";

const defaultProps = {
  e: [],
  i: 0,
  carouselPosition: 0,
  descriptions: [[], []],
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
  test("should render Slide", () => {
    const slideComponent = findByTestAttr(wrapper, "component-slide");
    expect(slideComponent.length).toBe(1);
  });
});
