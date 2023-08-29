export type { SInputProps } from "./props";

export type SInputSize = "small" | "middle" | "large";
export type SInputType = "text" | "password" | "number";

/**
 * 当 input 改变时触发的回调函数类型
 *
 * @param { string } value 当前的值
 * @param { Object } evt 事件对象
 */
// eslint-disable-next-line no-unused-vars
export type SInputUpdate = (value: string, evt: Event) => void;

/**
 * 当按下回车触发的函数类型
 *
 * @param { string } value 当前的值
 * @param { Object } evt 事件对象
 */
// eslint-disable-next-line no-unused-vars
export type SInputEnter = (value: string, evt: KeyboardEvent) => void;

// eslint-disable-next-line no-unused-vars
export type SHandleEvent = (evt: Event) => void;
