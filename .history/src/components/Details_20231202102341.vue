<script setup>
import { defineProps } from "vue";
const props = defineProps({
  items: {},
});
</script>
<template>
  <div class="main"></div>
</template>
<style scoped lang="less">
.main {
  width: 88%;
  height: 100%;
  padding: 2px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
