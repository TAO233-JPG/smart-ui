import { describe, expect, test } from "vitest";
import { setUnit, transformColorHexToRGB } from "../helper";

describe("helper", () => {
  test("transformColorHexToRGB", () => {
    expect(transformColorHexToRGB("#fff")).toEqual("rgb(255, 255, 255)");
    expect(transformColorHexToRGB("#ffffff")).toEqual("rgb(255, 255, 255)");

    expect(transformColorHexToRGB("#000")).toEqual("rgb(0, 0, 0)");
    expect(transformColorHexToRGB("#000000")).toEqual("rgb(0, 0, 0)");

    expect(transformColorHexToRGB("red")).toEqual("red");
  });

  test("setUnit", () => {
    expect(setUnit(34)).toBe("34px");
    expect(setUnit(3.4)).toBe("3.4px");

    expect(setUnit("334")).toBe("334");
    expect(setUnit("334px")).toBe("334px");

    expect(setUnit(3, "em")).toBe("3em");
    expect(setUnit("4", "em")).toBe("4");
  });
});
