import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { changeViewVertical } from "../actions/index";
import { Route } from "react-router-dom";
import "./app.css";
import Headbar from "./components/Header/Headbar";
import Home from "./Home/Home";

const Multiplayer = lazy(() => import("./Multiplayer/Multiplayer"));

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

  const projects = {
    multiplayer: {
      title: "Multiplayer Game",
      image: "images/projects/main-multiplayer.png",
      description: [
        "The multiplayer game is an arm wrestling mini-game designed to tie-in with the game Dungeons and Dragons (D&D). The inspiration for creating this application came from my personal experience of playing a game of D&D, my character entering an arm wrestling competition and I came up with some fun rules for the arm wrestling mini-game. Having fun with the rules I came up with for the mini-game I decided it would be nice to be able to share this with fellow D&D players.",
        "In the top left you can see participants can choose their role in the game. The red and green ovals currently represent the arms of the arm wrestling and based on the role a participant has chosen the position state of the game will be interpreted differently to show the correct position for the role chosen. The scores and modifiers seen on the top right of the game is a simple component and allows the player to input their characters values and will add the correct value to the total when the player is ready to submit thier total for the round. Below the stats is a component that allows the player to roll their largest dice and choose if they need to roll twice and chose the higher value, chose the lower value or only roll once.",
      ],
      pics: [
        "images/projects/multiplayer-playing.png",
        "images/projects/multiplayer-rolls.png",
        "images/projects/multiplayer-dice-die.png",
        "images/projects/multiplayer-roll20.png",
      ],
      descriptions: [
        [
          "Several props have been destructured for use throughout the app. As the app has grown during development, the use of a state storage technology such as Redux is becoming a more attractive technology to invest time in to implement.",
          " The use of portals to show a player their win or lose condition as an overlay that allows them to also reset their game data. The stats state has been implemented here as the values are being set in a seperate component and the values need to used in sister components. The main function of the component is to wrap all of the components together that are involved in playing the game and show the win/lose modals.",
        ],
        [
          "The Roll component houses logic for when a player submits their value for the round. The current total the player is ready to submit is stored in state under the sum variable and when the player submits their score is stored in the subbed variable. A good benefit of having the submitted value in state can be seen on the bottom of the right panel. Here when the user submits their score, they get the feedback that the score has be successfully submitted by showing it on the submit button.",
          "The code on the top of the right side is showing the tail end of a couple of functions that are used to apply the correct stat to add (or subtract) from the players score total.",
          "The useEffect hook on the bottom of the left panel is responsible for updating the game when the backend sends a new game state to the app and resetting the game values if necessary. Effectively the useEffect is only called once during play as its dependencies don’t change during play.",
        ],
        [
          "The left panel shows the Dice component which is responsible for housing components responsible for rolling individual dice. I’ve used a function that takes an array as an argument to render different types of die for the player to roll based on the values given to the array. The sumRoll function allows a player to add a value to their score or subtract the value, so if a player selects a die roll, they would like to use but then change their mind they are able to unselect it and the score will remain as it was before the selection.",
          "On the right panel the Die component responsible for the smaller dice such as the d6 and d4 is shown. The component uses an object as state and when a new die is rolled by clicking on the button calling the addDie function a key being a unique ID and a value being an object containing whether the die has been selected and the value on the roll is added to the state. You can see in the rendered elements that the button showing the players roll is styled based on the selected property and so for user feedback the colour changes when it’s selected or unselected.",
        ],
        [
          "The roll20 component is responsible for allowing a player to roll two 20-sided dice when they player clicks on the roll20 button. Also, the player can click on the advantage, disadvantage or normal buttons to determine which of the two rolled dice is chosen to be added to the player’s score. Originally, when I tried to create this component, the application relied on more states and required more states to be set when the roll20 button was clicked. The many states that needed to be updated caused an issue as I needed the states to update in a specific order, however, as react will batch state updates this made it impossible for me to create this component using the previous project design. I resolved this issue by moving more of the logic required to control the 20-sided dice rolls into the roll20 component and reducing the number of states in the project.",
          "Aside from rolling two dice per click and being able to choose the appropriate die based on the “advantage” button clicked, the roll20 component is very similar to the Die component. ",
        ],
      ],
      repo: [
        "https://github.com/SHerlihy/game-cli",
        "https://github.com/SHerlihy/game-server",
      ],
    },
    builder: {
      title: "Burger Builder",
      image: "images/projects/builder-main.png",
      description: [
        "A front-end application for customers to create their own burger and order it. The premise of this project is adapted from a tutorial. The tutorial made use of class-based components to build the app and used bootstrap for styling. I decided to make use of functional react components, react hooks, added an expressJS backend and use CSS for styling.",
      ],
      pics: [
        "images/projects/builder-builder.png",
        "images/projects/builder-ing-choice.png",
      ],

      descriptions: [
        [
          "The left panel of the image shows many different states being used to manage the application and the useEffect hook being used to retrieve data from the backend during initialisation. The right panel shows the elements and components to be renders and begins with an overlay component, followed by mapping over an array to render all of the selected ingredients to create the burger and mapping over another array to render the available ingredient choices.",
          "The overlay component accepts a prop to determine whether the component is to have a class that hides the component or whether it is to be displayed. If I were to re-visit this project, I would conditionally render the overlay instead of using classes to hide it as I think this will reduce the initial load time of the application and this can be beneficial for User Experience and SEO. There are many props being passed to components but fortunately the app isn’t so complex as to require a state store such as react redux etc.",
        ],
        [
          "The choice component on the left dynamically renders a css image of the ingredient using the ingredient prop. The add and remove props that have been passed in are used in the button elements allowing the state that is higher up in the component tree to be updated.",
          "The ingredient component on the right is rendered multiple times with different ingredients to show the ingredients inside the users custom burger.",
        ],
      ],
      repo: [
        "https://github.com/SHerlihy/burger-builder",
        "https://github.com/SHerlihy/burger-backend",
      ],
    },
    inventory: {
      title: "Burger Inventory",
      image: "images/projects/inventory-main.png",
      description: [
        "The inventory manager app uses class based components and API routes to add new ingredients to the database and change the current stock levels of ingredients already in the database.",
      ],
      pics: [
        "images/projects/inventory-new-ing.png",
        "images/projects/inventory-manage.png",
        "images/projects/inventory-backend.png",
      ],

      descriptions: [
        [
          "The new ingredient component is a simple form. State is used to record the users inputs through the handle change method and then the state is submitted to the database through the handle submit method.",
        ],
        [
          "The manage existing stock component is a very similar form to the new ingredient component. One difference is that each manage stock component is dynamically rendered based on the stock currently in the database.",
        ],
        [
          "The backend web application has API routes that serve data to the burger builder app and the stock management app. I’m using express and mongoose to help me create the backend. In the comment on the right, you can see I’ve expressed the intended use is to only have certain routes available to the applications that are used by the client and not exposed in apps used by the client’s customers. The reason for this is to increase the safety of the app.",
        ],
      ],
      repo: [
        "https://github.com/SHerlihy/burger-manager",
        "https://github.com/SHerlihy/burger-backend",
      ],
    },
  };
  return (
    <main className="App">
      <Headbar />
      <Suspense fallback={<p>Page Loading...</p>}>
        <Route path="/" exact>
          <Home data={projects} />
        </Route>
        {Object.keys(projects).map((e) => {
          return (
            <Route key={e} path={`/${e}`}>
              <Multiplayer
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
    </main>
  );
}

export default App;
