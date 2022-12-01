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
      jest.spyOn(axios, "get");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      // Write your solution here
      //jest.spyOn(axios, "get"); //use jest to keep track of and spy on the axios.get() call inside index() function

      await index(); //run the index function

      //test that the axios.get() inside index() function is called with the appropriate url: localhost:5000/players
      const expectedURL = `${BASE_URL}/players`;

      expect(axios.get).toHaveBeenCalledWith(expectedURL);

      //jest.clearAllMocks(); //clears our the tracking of the axios.get function  call since we dont need to anymore at this point b/c the code has been test
    });

    it("should return a list of all players with more than 4 championships", async () => {
      // Write your solution here
      //jest.spyOn(axios, "get");
      
      axios.get.mockImplementation(() => Promise.resolve({ data: playersList }));
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

      const response = await index(); //run the index function
      expect(response).toEqual(expected);
      
      //jest.clearAllMocks();
    });
    
    it("should log an error to the console", async () => {
      // Write your solution here
      axios.get.mockImplementation(() =>
        Promise.reject(new Error("Request failed."))
      );

      jest.spyOn(console, "error");

      await index();

      expect(console.error).toHaveBeenCalledWith("Request failed.")
      
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
      await createPlayer(body); //run the create function (pass in the body)

      //test that the axios.get() inside index() function is called with the appropriate url: localhost:5000/players
      const expectedURL = `${BASE_URL}/players`;

      expect(axios.post).toHaveBeenCalledWith(expectedURL,body);
     
      
    });

    it("should resolve with a promise containing the newly saved player", async () => {
      // Write your solution here
      axios.post.mockImplementation(() => Promise.resolve({ data: newlyCreatedPlayer }));
      

      const response = await createPlayer(body); //
      expect(response).toEqual(newlyCreatedPlayer);
      
      
    });
    
    it("should log an error to the console", async () => {
      axios.post.mockImplementation(() =>
        Promise.reject(new Error("Request failed."))
      );

      jest.spyOn(console, "error");

      await createPlayer(body);

      expect(console.error).toHaveBeenCalledWith("Request failed.")
      
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
      await showOnePlayer(id); //run the showOnePlayer function

      //test that the axios.get() inside showOnePlayer() function is called with the appropriate url: localhost:5000/players
      const expectedURL = `${BASE_URL}/players/${id}`;

      expect(axios.get).toHaveBeenCalledWith(expectedURL);
      
    });

    it("should resolve with a promise containing the player data", async () => {
      // Write your solution here
      //jest.spyOn(axios, "get");
      
      axios.get.mockImplementation(() => Promise.resolve({ data: player }));
      
      const expected = player

      const response = await showOnePlayer(id); //run the index function
      // console.log('********************************************************')
      // console.log("response is this", response)
      // console.log("expected is this", response)

      // console.log('********************************************************')
      expect(response).toEqual(expected);
      
    });
     
    it("should log an error to the console", async () => {
      // Write your solution here
      axios.get.mockImplementation(() =>
        Promise.reject(new Error("Request failed."))
      );

      jest.spyOn(console, "error");

      await showOnePlayer(id);

      expect(console.error).toHaveBeenCalledWith("Request failed.")
      
    });
  }); 
});  
