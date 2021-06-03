import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../testUtils";
import { Provider } from "react-redux";
import Showcase from "./Showcase";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Showcase />
    </Provider>
  );
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ adWord: "" });
  });
  test("should render", () => {
    const showcaseComponent = findByTestAttr(wrapper, "component-showcase");
    expect(showcaseComponent.length).toBe(1);
  });
});
