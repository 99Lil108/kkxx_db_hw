<script setup>
import { defineProps } from "vue";
const props = defineProps({
  txt: {
    default: "@数据库作业",
  },
});
</script>
<template>
  <div class="txt">{{ txt }}</div>
</template>
<style scoped lang="less">
.txt {
  letter-spacing: 1px;
  font-weight: bold;
  height: 100%;
}
</style>
