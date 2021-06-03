import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../../testUtils";
import { Provider } from "react-redux";
import ProjectShowcase from "./ProjectShowcase";
import { projects } from "../projectInfo";

const defaultProps = {
  uid: projects.multiplayer,
  image: projects.multiplayer.image,
  pics: projects.multiplayer.pics,
  description: projects.multiplayer.description,
  descriptions: projects.multiplayer.descriptions,
  repo: projects.multiplayer.repo,
};

const setup = (props = {}) => {
  const store = storeFactory(props);
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <Provider store={store}>
      <ProjectShowcase {...setupProps} />
    </Provider>
  );
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should render ProjectShowcase", () => {
    const projectShowcase = findByTestAttr(
      wrapper,
      "component-project-showcase"
    );
    expect(projectShowcase.length).toBe(1);
  });
});
