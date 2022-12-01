const axios = require("../utils/axios");
const { index, createPlayer, showOnePlayer } = require("../src/main");

const BASE_URL = "http://localhost:5000";

describe("src/main.js", () => {
  describe("index()", () => {

    const playersList =[
      {
        id: "1",
        name: "Lebron James",
        team: "Lakers",
        number_championships: 4,
        state: "California"
      },
      {
        id: "2",
        name: "Steph Curry",
        team: "Warriors",
        number_championships: 4,
        state: "California"
      },
      {
        id: "3",
        name: "Allen Iverson",
        team: "Sixers",
        number_championships: 0,
        state: "Pennsylvania"
      },
      {
        id: "4",
        name: "Luka Doncic",
        team: "Mavericks",
        number_championships: 0,
        state: "Dallas"
      },
      {
        id: "5",
        name: "Kobe",
        team: "Lakers",
        number_championships: 5,
        state: "California"
      },
      {
        id: "6",
        name: "Charles Barkley",
        team: "Suns",
        number_championships: 0,
        state: "Arizona"
      },
      {
        id: "7",
        name: "Michael Jordan",
        team: "Bulls",
        number_championships: 6,
        state: "Illinois"
      }
    ]

    beforeEach(() => {
      jest.spyOn(axios, 'get');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      // Write your solution here
      
      expect(1).toEqual(2);
    });

    it("should return a list of all players with more than 4 championships", async () => {
      // Write your solution here
      
      
      const expected = [
        {
          id: "5",
          name: "Kobe",
          team: "Lakers",
          number_championships: 5,
          state: "California"
        },
        {
          id: "7",
          name: "Michael Jordan",
          team: "Bulls",
          number_championships: 6,
          state: "Illinois"
        }
      ]
      
    });
    
    it("should log an error to the console", async () => {
      // Write your solution here
      
    });
  });
  
  describe("createPlayer()", () => {
    const body =  {
      name: "Magic Johnson",
      team: "Lakers",
      number_championships: 5,
      state: "California"
    }
    
    // You can use this player data in your tests
    const newlyCreatedPlayer = { ...body, id: "9" };

    beforeEach(() => {
      jest.spyOn(axios, 'post');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a POST request to the appropriate URL with a valid data body", async () => {
      // Write your solution here
      
    });

    it("should resolve with a promise containing the newly saved player", async () => {
      // Write your solution here
      
    });
    
    it("should log an error to the console", async () => {
      // Write your solution here
      
    });
  });
  
   describe("showOnePlayer()", () => {
    const player = {
      id: "1",
      name: "Lebron James",
      team: "Lakers",
      number_championships: 4,
      state: "California"
    }
     
    const { id } = player;

    beforeEach(() => {
      jest.spyOn(axios, 'get');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      // Write your solution here
      
    });

    it("should resolve with a promise containing the player data", async () => {
      // Write your solution here
      
    });
     
    it("should log an error to the console", async () => {
      // Write your solution here
      
    });
  }); 
});  
