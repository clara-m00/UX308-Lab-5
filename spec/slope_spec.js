import { slope } from "../slope.js";

describe("test slope", function() {
    it("test x1 = 1, y1 = 1, x2 = 2, y2 = 2", function() {
      let x1 = 1;
      let x2 = 2;
      let y1 = 1;
      let y2 = 2;
      let slp = slope(x1, y1, x2, y2);
      expect(slp.toFixed(2)).toBe("1.00");
    });
  });