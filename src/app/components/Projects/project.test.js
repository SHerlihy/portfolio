import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../testUtils";
import { Provider } from "react-redux";
import Project from "./Project";

const setup = (
  initialState = {},
  address = "90 Way",
  image = "./noImg",
  title = "Title",
  description = "example desc",
  idx = 1
) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Project
        address={address}
        image={image}
        title={title}
        description={description}
        idx={idx}
      />
    </Provider>
  );
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should render Project", () => {
    const appComponent = findByTestAttr(wrapper, "component-project");
    expect(appComponent.length).toBe(1);
  });
});
