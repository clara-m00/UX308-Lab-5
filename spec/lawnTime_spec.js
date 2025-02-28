import { lawnTime } from "../lawnTime.js";

describe("test lawnTime", function() {
    it("test 150000 square feet", function() {
      let sqfeet = 150000;
      let acre = sqFeetToAcre(sqfeet);
      expect(acre.toFixed(2)).toBe("3.44");
    });


  });