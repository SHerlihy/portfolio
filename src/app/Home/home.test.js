import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../../testUtils";
import { Provider } from "react-redux";
import Home from "./Home";

const setup = (initialState = {}, data = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Home data={data} />
    </Provider>
  );
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ viewVertical: false });
  });
  test("should render Home", () => {
    const appComponent = findByTestAttr(wrapper, "component-home");
    expect(appComponent.length).toBe(1);
  });
});
