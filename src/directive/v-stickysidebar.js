import StickySidebar from "sticky-sidebar-v2";
const vStickysidebar = {
  mounted(el, binding, vnode) {
    new StickySidebar(el, {
      topSpacing: 0,
      bottomSpacing: 0,
      ...binding.value,
      containerSelector: "[data-v-sticky-container]",
      innerWrapperSelector: "[data-v-sticky-inner]",
    });
  },
};

export default vStickysidebar;
