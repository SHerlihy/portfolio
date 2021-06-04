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

describe("mouse enter and leave", () => {
  const componentProject = () => findByTestAttr(wrapper, "component-project");
  const projectImage = () => findByTestAttr(wrapper, "project-image");
  const content = () => findByTestAttr(wrapper, "content");
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ viewVertical: false, showPics: false });
  });

  test("should enhancePic on mouse enter", () => {
    expect(componentProject().hasClass("normal")).toEqual(true);
    expect(projectImage().hasClass("reduce")).toEqual(true);
    expect(content().length).toBe(1);
  });

  test("should enhancePic on mouse enter", () => {
    projectImage().simulate("mouseenter");
    expect(componentProject().hasClass("normal")).toEqual(false);
    expect(projectImage().hasClass("enhance")).toEqual(true);
    expect(content().length).toBe(0);
  });

  test("should reduce pic on mouse leave", () => {
    projectImage().simulate("mouseenter");
    projectImage().simulate("mouseleave");
    expect(componentProject().hasClass("normal")).toEqual(true);
    expect(projectImage().hasClass("reduce")).toEqual(true);
    expect(content().length).toBe(1);
  });
});
