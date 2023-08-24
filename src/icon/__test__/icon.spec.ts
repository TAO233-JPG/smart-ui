import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import SIcon from "../src/Icon.vue";
import { transformColorHexToRGB } from "../../utils/test";

describe("SIcon", () => {
  test("default", () => {
    const wrapper = mount(SIcon);
    expect(wrapper.classes()).toContain("s-icon");
    expect(wrapper.element.children).toHaveLength(1);

    const svgEl = wrapper.element.children[0] as SVGElement;

    expect(svgEl.tagName).toBe("svg");
    expect(svgEl.classList.contains("s-icon-svg")).toBeTruthy();

    expect(svgEl.style.fontSize).toBe("26px");
  });
  test("size", () => {
    const sizes = new Array(8).fill(0).map(() => Math.random() * 100);
    sizes.forEach((size) => {
      const wrapper = mount(SIcon, {
        props: {
          size: `${size}`,
        },
      });
      expect((wrapper.element.children[0] as SVGAElement).style.fontSize).toBe(
        `${size}px`
      );
    });
  });
  test("icon", () => {
    const icons = ["arrow", "chat", "call", "backward"];

    icons.forEach((icon) => {
      const wrapper = mount(SIcon, {
        props: {
          icon,
        },
      });
      expect(
        wrapper.element.children[0].children[0].getAttribute("xlink:href")
      ).toEqual(`#smart-${icon}`);
    });
  });

  test("color", () => {
    const colors = ["#331213", "#ff0011", "red"];
    colors.forEach((color) => {
      const wrapper = mount(SIcon, {
        props: {
          color,
        },
      });
      expect((wrapper.element.children[0] as SVGAElement).style.color).toEqual(
        transformColorHexToRGB(color)
      );
    });
  });
  test("dot", () => {
    const wrapper = mount(SIcon, {
      props: {
        dot: true,
      },
    });
    expect(wrapper.element.children).toHaveLength(2);

    const dotEl = wrapper.element.children[1] as HTMLDivElement;

    expect(dotEl.className).contains("s-icon-info");
    expect(dotEl.className).contains("s-icon-dot");
  });

  test("dot & badge", () => {
    const badge = "23";
    const wrapper = mount(SIcon, {
      props: {
        dot: true,
        badge,
      },
    });
    expect(wrapper.element.children).toHaveLength(2);

    const dotEl = wrapper.element.children[1] as HTMLDivElement;
    expect(dotEl.className).contains("s-icon-info");
    expect(dotEl.textContent).toEqual(badge);
  });
});
