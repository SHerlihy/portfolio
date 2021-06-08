export const projects = {
  multiplayer: {
    title: "Multiplayer Game",
    image: "images/projects/main-multiplayer.png",
    description: [
      "The multiplayer game is an arm wrestling mini-game designed to tie-in with the game Dungeons and Dragons (D&D). The inspiration for creating this application came from my personal experience of playing a game of D&D, my character entering an arm wrestling competition and I came up with some fun rules for the arm wrestling mini-game. Having fun with the rules I decided it would be nice to be able to share this with fellow D&D players through this web app.",
    ],
    pics: [
      "images/projects/multiplayer-playing.png",
      "images/projects/multiplayer-mid.png",
      "images/projects/multiplayer-endgame.png",
    ],
    descriptions: [
      [
        "The arm-wrestling game is based on each player rolling dice and seeing who has the highest value to win the round and move one position closer to winning. The reason react.js is so good for this game is because react excels when selective re-rendering is used. I knew the rendering of the arm positions would need to change each round and during the round I knew there would be multiple changes as the players rolled their dice.",
        "Another feature of react is its focus on modularity through components. I want to further develop the app so the spectators are able to exert influence over the game and I want the players to be able to specify their own dice values to roll. By embracing the modular approach it will be much easier for me to implement these future features.",
      ],
      [
        "I’ve added the input boxes for players to input their stats. To ensure the data they input is applied to the players roles, which are in a different component, I’ve made use of the react-redux library. As I decided to use redux to store state outside of the input components, I’ve also used it for other states in the app. The versatility of redux has helped me produce clean code and reduced development time.",
        "The versatility of using a redux state store became increasingly more important as my app became more complex. The limitations of using the “useState” hook became apparent when I was programming the “roll20” button. As react batches state updates the button wasn’t working as planned. Using redux to control the state didn’t resolve the issue, however, I was able to clean my code enough to see how it could be resolved.",
      ],
      [
        "To ensure players have a smooth multiplayer experience I decided to use the socket.io library to allow private games to be established and joined using the speed of TCP. Due to the small size of data being transferred and the infrequency of the data needing to be transferred I feel using TCP is more that required. However, I chose to make use of TCP through the socket.io library to show my versatility as a developer and I wanted to use something outside of my comfort zone.",
        "However, there was an issue with using the socket.io library I hadn’t thought of and that was testing. When I started writing tests, I discovered the socket.io doesn’t have a lot of supporting documentation to help test the app and so my development was slowed down while I researched how to test.",
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
