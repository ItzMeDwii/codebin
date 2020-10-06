import type Vue from "vue";

declare global {
    namespace JSX {
       type Element = Vue.VNode;
             type ElementClass = Vue;
             type IntrinsicElements = Record<string, any>;
    }
    interface ElementAttributesProperty { $props }
}
