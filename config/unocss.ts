import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const icons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share",
];

const size = ["sm", "md", "lg", "xl"];
const textSize = ["sm", "base", "lg", "xl"];
const safelist = [
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...icons.map((v) => `i-ic-baseline-${v}`), //图表
  ...Array.from({ length: 10 }, (_, idx) => `py-${idx+1}`), // 上下padding
  ...Array.from({ length: 10 }, (_, idx) => `py-${idx+0.5}`), // 上下padding
  ...Array.from({ length: 10 }, (_, idx) => `px-${idx+1}`), // 左右padding
  ...Array.from({ length: 10 }, (_, idx) => `px-${idx+0.5}`), // 左右padding
  ...size.map((sz) => `rounder-${sz}`), // 圆角
  ...textSize.map((sz) => `text-${sz}`), // 文本大小
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
