import { lawnTime } from "../lawnTime.js";

describe("test lawnTime", function () {
  it("test mowing with a lawn of 10m width, 20m length, with a rate of 5 square meters per minute", function () {
    let width = 10;
    let length = 20;
    let rate = 5;
    let lawnMowRate = lawnTime(width, length, rate);
    expect(lawnMowRate.toFixed(2)).toBe("40.00")
  });

  it("test mowing with a lawn of 22m width, 34m length, with a rate of 6 square meters per minute", function () {
    let width = 22;
    let length = 34;
    let rate = 6;
    let lawnMowRate = lawnTime(width, length, rate);
    expect(lawnMowRate.toFixed(2)).toBe("124.67")
  });

  it("test mowing with a lawn of 22m width, 34m length, with a rate of 6 square meters per minute", function () {
    let width = 60;
    let length = 100;
    let rate = 30;
    let lawnMowRate = lawnTime(width, length, rate);
    expect(lawnMowRate.toFixed(2)).toBe("200.00")
  });

});