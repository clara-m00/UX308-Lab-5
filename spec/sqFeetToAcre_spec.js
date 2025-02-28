import { sqFeetToAcre } from "../sqFeetToAcre.js";

describe("test sqFeetToAcre", function() {
    it("test 150000 square feet", function() {
      let sqfeet = 150000;
      let acre = sqFeetToAcre(sqfeet);
      expect(acre.toFixed(2)).toBe("3.44");
    });

    it("test 320000 square feet", function() {
        let sqfeet = 320000;
        let acre = sqFeetToAcre(sqfeet);
        expect(acre.toFixed(2)).toBe("1.05");
      });


    it("test 45678 square feet", function() {
        let sqfeet = 45678;
        let acre = sqFeetToAcre(sqfeet);
        expect(acre.toFixed(2)).toBe("7.35");
      });
  });