import Button from "../index";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { props } from "../index";
// 测试分组
describe("Button", () => {
  // mount
  test("mount  @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("Button");
  });
});

describe("type", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });
  test("danger", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        type: "danger",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});

describe("plain", () => {
  test("defalut", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {},
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("500")
    );
  });
  test("plain", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        plain: true
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("400")
    );
  });
});
