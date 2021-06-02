import { lazy, Suspense } from "react";
import { useDispatch } from "../react-redux-hooks";
import { changeViewVertical } from "../actions/index";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { projects } from "./projectInfo";
import "./app.css";
import Headbar from "./components/Header/Headbar";
import Home from "./Home/Home";

const ProjectShowcase = lazy(() => import("./ProjectShowcase/ProjectShowcase"));

function App() {
  const dispatch = useDispatch();

  window.addEventListener(
    "resize",
    () => {
      const isVertical = window.innerHeight > window.innerWidth;
      console.log(isVertical);
      dispatch(changeViewVertical(isVertical));
    },
    false
  );

  return (
    <main data-test="component-app" className="App">
      <Router>
        <Headbar />
        <Suspense fallback={<p>Page Loading...</p>}>
          <Route path="/" exact>
            <Home data={projects} />
          </Route>
          {Object.keys(projects).map((e) => {
            return (
              <Route key={e} path={`/${e}`}>
                <ProjectShowcase
                  uid={e}
                  image={projects[e]["image"]}
                  pics={projects[e]["pics"]}
                  descriptions={projects[e]["descriptions"]}
                  description={projects[e]["description"]}
                  repo={projects[e]["repo"]}
                />
              </Route>
            );
          })}
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
