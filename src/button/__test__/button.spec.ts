import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import SButton, { ButtonProps } from "../index";

// 测试分组
describe("SButton", () => {
  test("base props", () => {
    const content = "connnnent";
    const wrapper = shallowMount(SButton, {
      slots: {
        default: content,
      },
    });
    // 断言
    expect(wrapper.text()).toBe(content);
    expect(wrapper.classes()).toContain("s-button");
  });

  test("type", () => {
    const button_types: ButtonProps["type"][] = [
      "default",
      "primary",
      "danger",
      "info",
      "success",
      "warning",
    ];

    button_types.forEach((type_item) => {
      const wrapper = shallowMount(SButton, {
        props: { type: type_item },
      });
      expect(wrapper.classes()).toContain(`s-button__${type_item}`);
    });
  });

  test("size", () => {
    const button_sizes: ButtonProps["size"][] = ["large", "middle", "small"];

    button_sizes.forEach((size_item) => {
      const wrapper = shallowMount(SButton, {
        props: { size: size_item },
      });
      expect(wrapper.classes()).toContain(`s-button__${size_item}`);
    });
  });

  test("round", () => {
    const wrapper = shallowMount(SButton, {
      props: { round: true },
    });
    expect(wrapper.classes()).toContain(`s-button__round`);
  });

  test("plain", () => {
    const wrapper = shallowMount(SButton, {
      props: { plain: true },
    });
    expect(wrapper.classes()).toContain(`s-button__plain`);
  });

  test("circle", () => {
    const wrapper = shallowMount(SButton, {
      props: { circle: true },
    });
    expect(wrapper.classes()).toContain(`s-button__circle`);
  });

  test("disabled", () => {
    const wrapper = shallowMount(SButton, {
      props: { disabled: true },
    });
    expect(wrapper.attributes("disabled")).toBeDefined()
  });
});
