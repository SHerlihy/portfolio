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
    const sellwords = findByTestAttr(wrapper, "showcase-sellwords");
    expect(sellwords.length).toBe(1);
  });
});

describe("sellwords changes letters and words", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ adWord: "" });
  });
  test("sellwords starts blank and adds letters", async () => {
    const sellwords = () => findByTestAttr(wrapper, "showcase-sellwords");
    expect(sellwords().text()).toBe("");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    expect(sellwords().text().length).toBe(2);
  }, 1300);
});
