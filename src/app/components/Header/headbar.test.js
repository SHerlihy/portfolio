import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../testUtils";
import { Provider } from "react-redux";
import Headbar from "./Headbar";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Headbar />
    </Provider>
  );
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("should render Headbar", () => {
    const appComponent = findByTestAttr(wrapper, "component-headbar");
    expect(appComponent.length).toBe(1);
  });
});

describe("clicking on the links", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  const projectOne = () => findByTestAttr(wrapper, "project-one");
  const proOneATag = () => projectOne().find("a");
  const projectTwo = () => findByTestAttr(wrapper, "project-two");
  const proTwoATag = () => projectTwo().find("a");
  const projectThree = () => findByTestAttr(wrapper, "project-three");
  const proThreeATag = () => projectThree().find("a");

  test("should highlight on click", () => {
    expect(proOneATag().hasClass("highlight")).toEqual(false);
    proOneATag().simulate("click");
    expect(proOneATag().hasClass("highlight")).toEqual(true);
  });

  test("should remove highlight when other project clicked", () => {
    proOneATag().simulate("click");
    expect(proTwoATag().hasClass("highlight")).toEqual(false);
    proTwoATag().simulate("click");
    expect(proTwoATag().hasClass("highlight")).toEqual(true);
    expect(proOneATag().hasClass("highlight")).toEqual(false);
  });
});

describe("resizing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ viewVertical: false });
  });

  const proOneIcon = () => findByTestAttr(wrapper, "project-one-icon");
  const contactIcon = () => findByTestAttr(wrapper, "contact-icon");
  const projectOne = () => findByTestAttr(wrapper, "project-one");
  const proOneATag = () => projectOne().find("a");
  const projectTwo = () => findByTestAttr(wrapper, "project-two");
  const proTwoATag = () => projectTwo().find("a");
  const projectThree = () => findByTestAttr(wrapper, "project-three");
  const proThreeATag = () => projectThree().find("a");

  // test("should render contact icon on resize", () => {
  //   expect(contactIcon().length).toBe(0);
  //   global.innerWidth = 800;
  //   global.dispatchEvent(new Event("resize"));
  //   expect(contactIcon().length).toBe(1);
  // });

  test("should render project icon on resize", () => {
    expect(proOneIcon().length).toBe(0);
    window.innerWidth = 500;
    window.innerHeight = 400;
    window.dispatchEvent(new Event("resize"));
    console.log(wrapper.props().store);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    expect(proOneIcon().length).toBe(1);
  });
});
