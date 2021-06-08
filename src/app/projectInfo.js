export const projects = {
  multiplayer: {
    title: "Multiplayer Game",
    image: "images/projects/main-multiplayer.png",
    description: [
      "The multiplayer game is an arm wrestling mini-game designed to tie-in with the game Dungeons and Dragons (D&D). The inspiration for creating this application came from my personal experience of playing a game of D&D, my character entering an arm wrestling competition and I came up with some fun rules for the arm wrestling mini-game. Having fun with the rules I decided it would be nice to be able to share this with fellow D&D players through this web app.",
    ],
    pics: [
      "images/projects/startGame.gif",
      "images/projects/statsGame.gif",
      "images/projects/endGame.gif",
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
      "images/projects/addIngredients.gif",
      "images/projects/subIngredients.gif",
    ],

    descriptions: [
      [
        "Due to the constant re-rendering required, React.js was the perfect solution to keeping the app performant. As ingredients are added or taken away the corresponding ingredient component is rendered in the burger. Additionally, the price is re-rendered based on the cost change on the ingredients selected. Everything I implemented in this app was done from the lens of user experience to take a prospective customer from hungry to burger time as fast as possible.",
        "I’ve added subtle hover effects on the buttons to make use very easy for the consumer. I’ve also decided to make the buttons very big for ease of use which translates very well for mobile use. The price of the burger is very close to the centre of the page so it’s easy for the user to see regardless of where their focus is and, as I placed it in a conspicuous location, I decided adding a “Buy” button there would be a great addition for customer convenience.",
      ],
      [
        "Removing ingredients is clean as there isn’t any way to remove more ingredients than the customer has added and the price updates correctly. Another way I’ve prevented potential issues is to ensure the ingredient options are rendered only from ingredients that are in stock from the back-end. Once a burger is bought the ingredients used in the burger are deducted from the stock levels on the back-end and eventually this leads to ingredient options no longer rendering as the ingredient is out of stock.",
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
    pics: ["images/projects/updateStock.gif", "images/projects/addStock.gif"],

    descriptions: [
      [
        "I took the mobile first approach to the design of this app. I reasoned as the user is a manager in a fast-food restaurant, it’s unlikely they will be sat at a desktop computer and instead would need a mobile app for their mobile work.",
        "The app renders the ingredients that are already in the inventory database and shows their stock levels as placeholder values to give the user a reference to the current stock so they know the value to enter if they only know the increment or decrement in stock. I’ve also added functionality to show that the user has updated the stock value to prevent a user mis-clicking and not updating stock.",
      ],
      [
        "Adding ingredients is simple and I’ve decided to place the option at the bottom of the app so the user has to see what is currently being stocked before they may add a stock item needlessly. As you can see from the gif, on re-render the new stock item renders into the list of existing ones. In further development I’d force a re-render after the “Add Ingredient” button is clicked so the user gets feedback that the addition was a success.",
      ],
    ],
    repo: [
      "https://github.com/SHerlihy/burger-manager",
      "https://github.com/SHerlihy/burger-backend",
    ],
  },
};
