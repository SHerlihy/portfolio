import React from "react";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, render, mount, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as ReactReduxHooks from "../react-redux-hooks";
import App from "./App";
import viewVertical from "../reducers/viewVertical";
import MockHome from "./Home/Home";
import MockHeadbar from "./components/Header/Headbar";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./Home/Home", () => {
  return function DummyHome(props) {
    return <div data-testid="home"></div>;
  };
});

jest.mock("./components/Header/Headbar", () => {
  return function DummyHeadbar(props) {
    return <div data-testid="headbar"></div>;
  };
});

describe("App unit test", () => {
  const mockStore = createStore(viewVertical, false);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  it("should render", () => {
    const wrapper = getWrapper();
  });
});

// const mockStore = configureMockStore([thunk]);

// describe("App", () => {
//   it("render on startup", () => {
//     const store = mockStore();
//     const wrapper = mount(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     expect(wrapper.find("Headbar").length).toEqual(1);
//   });
// });

// import { findByTestAttr, storeFactory } from "../testUtils";

// configure({ adapter: new Adapter() });

// describe("App", () => {
//   let wrapper;
//   let store;

//   beforeEach(() => {
//     store = storeFactory();
//     jest
//       .spyOn(ReactReduxHooks, "useSelector")
//       .mockImplementation(() => store.getState());
//     jest
//       .spyOn(ReactReduxHooks, "useDispatch")
//       .mockImplementation(() => store.dispatch);
//     wrapper = shallow(<App store={store} />);
//   });
//   describe("on mount", () => {});
// });

// const setup = () => {
//   const store = storeFactory();
//   return mount(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };

// test("should render App", () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, "component-app");
//   expect(appComponent).toHaveLength(1);
// });
