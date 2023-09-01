<template>
  <div
    role="tab"
    :class="['s-tabs', `s-tabs__${props.type}`, `s-tabs__${props.position}`]"
  >
    <div class="s-tabs__head">
      <div class="s-tabs__navs">
        <div
          v-for="(item, index) in navs"
          :key="index"
          :class="[
            's-tabs__nav-item',
            { 's-tabs__nav-active': item.name === activeName },
          ]"
          @click="changeNavs(item.name)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>

    <div class="s-tabs__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Component,
  ComponentInternalInstance,
  VNode,
  VNodeNormalizedChildren,
  computed,
  getCurrentInstance,
  isVNode,
  provide,
  ref,
  shallowRef,
} from "vue";
import { Props, TABS_PROPS_KEY } from "./props";
import { TabsOpts, TabsProvide } from "./interface";
import { STabsItemProps } from "../../tabs-item/src/interface";
defineOptions({ name: "STabs" });

const props = defineProps(Props);
// eslint-disable-next-line no-undef
const modelValue = defineModel<number | string>("modelValue", {
  type: [Number, String],
  default: null,
});

const activeName = ref<string | number>(modelValue.value);
const childrenMap = new Map<number, TabsOpts>();
const children = shallowRef<TabsOpts[]>();

const isArray = Array.isArray;
const isObject = (obj: unknown): obj is Object =>
  Object.prototype.toString.call(obj) === "[object Object]";

const flattedChildren = (
  children: VNode | VNodeNormalizedChildren
): VNode[] => {
  const vNodes = isArray(children) ? children : [children];
  const result: VNode[] = [];

  vNodes.forEach((child): void => {
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      if (isVNode(child) && child.component) {
        result.push(child);
      }
    }
  });
  return result;
};

const getChildrenComponent = (
  root: ComponentInternalInstance,
  component: string
): VNode[] => {
  if (!root.subTree) return [];
  const flaChildren = flattedChildren(root.subTree.children);
  return flaChildren.filter(
    (e) => isObject(e.type) && (e.type as Component).name === component
  );
};

const root = getCurrentInstance()!;
const component = "STabsItem";

const registerChild = (opts: TabsOpts): void => {
  childrenMap.set(opts.uid, opts);
  const componentList: VNode[] = getChildrenComponent(root, component);

  const componentUid: number[] = componentList
    .map((item: VNode): number | null => {
      return item.component ? item.component.uid : null;
    })
    .filter(Boolean) as number[];

  children.value = componentUid
    .map((e: number): TabsOpts | undefined => childrenMap.get(e))
    .filter(Boolean) as TabsOpts[];

  if (modelValue.value) {
    activeName.value = modelValue.value;
    return;
  }

  if (children.value && children.value.length) {
    if (children.value[0].activeName) {
      activeName.value = children.value[0].activeName;
    }
  }
};

/** 将信息传递给子组件 */
provide<TabsProvide>(TABS_PROPS_KEY, {
  activeName,
  registerChild,
});

/** nav 列表 */
const navs = computed(() => {
  return (
    children.value &&
    children.value.map((item: TabsOpts, index: number) => {
      item.activeName = item.activeName || index;

      return {
        /** name 如果没有传递 则用索引代替 */
        name: item.activeName,
        label: item.label,
      } as const;
    })
  );
});

const changeNavs = async (name: STabsItemProps["name"]): Promise<void> => {
  activeName.value = name;
  modelValue.value = name;
};
</script>
