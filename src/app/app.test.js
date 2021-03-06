import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../testUtils";
import { Provider } from "react-redux";
import App from "./App";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should render App", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });
});
