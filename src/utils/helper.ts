export const transformColorHexToRGB = (color: string) => {
  let rgb = [0, 0, 0];
  if (/#(..)(..)(..)/g.test(color)) {
    rgb = [
      parseInt(RegExp.$1, 16),
      parseInt(RegExp.$2, 16),
      parseInt(RegExp.$3, 16),
    ];
    return "rgb(" + rgb.join(", ") + ")";
  }

  if (/#(.)(.)(.)/g.test(color)) {
    rgb = [
      (parseInt(RegExp.$1, 16) / 15) * 255,
      (parseInt(RegExp.$2, 16) / 15) * 255,
      (parseInt(RegExp.$3, 16) / 15) * 255,
    ];
    return "rgb(" + rgb.join(", ") + ")";
  }
  return color;
};

export const setUnit = (size: string | number, unit: string = "px") => {
  return typeof size === "string" ? size : size + unit;
};
