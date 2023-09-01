import { Ref } from "vue";

export type { STabsProps } from "./props";

export type TabsType = "line" | "card" | "segment";

export interface TabsOpts {
  activeName: number | string;
  uid: number;
  label: string;
}

export interface TabsProvide {
  activeName: Ref<number | string>;
  // eslint-disable-next-line no-unused-vars
  registerChild: (opts: TabsOpts) => void;
}

export type TabsPosition = "top" | "button" | "left" | "right";
