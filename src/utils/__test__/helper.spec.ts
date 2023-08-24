import { describe, expect, test } from "vitest";
import { transformColorHexToRGB } from "../helper";

describe("test", () => {
  test("function", () => {
    expect(transformColorHexToRGB("#fff")).toEqual("rgb(255, 255, 255)");
    expect(transformColorHexToRGB("#ffffff")).toEqual("rgb(255, 255, 255)");

    expect(transformColorHexToRGB("#000")).toEqual("rgb(0, 0, 0)");
    expect(transformColorHexToRGB("#000000")).toEqual("rgb(0, 0, 0)");

    expect(transformColorHexToRGB("red")).toEqual("red");
  });
});
