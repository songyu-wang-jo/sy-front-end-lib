<template>
  <div class="sy-tool-tip">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "SyToolTip",
  props: {
    content: {
      type: String,
      default: 'TOOLTIP 初始化内容'
    }
  }
}
</script>