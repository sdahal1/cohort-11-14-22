const axios = require("axios");
const { index } = require("../src/requests");
const BASE_URL = "http://localhost:5000";

describe("requests.js", () => {
  describe("index()", () => {
    const data = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
      {
        id: "dFBfdr",
        name: "Moon",
        meaning: "Sails",
        starsWithPlanets: 17,
        quadrant: "SQ3",
      },
    ];

    it("should make a GET request to the appropriate URL", async () => {
      // Write code here
      expect(1).toBe(2);
    });

    it("should return a list of constellations with fewer than 10 stars with planets", async () => {
      // Write code here
      expect(1).toBe(2);
    });

    it("should log an error to the console", async () => {
      // Write code here
      expect(1).toBe(2);
    });
  });
});
