<script setup>
import { useStore } from "vuex";
const { state } = useStore();
</script>
<template>
  <div class="txt">{{}}</div>
</template>
<style scoped lang="less">
.txt {
  letter-spacing: 1px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
}
</style>
