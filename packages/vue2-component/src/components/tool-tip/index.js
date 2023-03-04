import SyToolTip from "./src/tool-tip.vue";

SyToolTip.install = function(Vue) {
    Vue.component(SyToolTip.name, SyToolTip);
};

export default SyToolTip;