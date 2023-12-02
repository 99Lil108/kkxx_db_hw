<script setup>
import { defineProps } from "vue";
const props = defineProps({
  items: {},
});
</script>
<template>
  <div class="main">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</template>
<style scoped lang="less">
.main {
  width: 88%;
  height: 100%;
  padding: 2px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  .card {
    background-color: #bfa;
    width: 200px;
    height: 200px;
    flex: 1;
  }
}
</style>
