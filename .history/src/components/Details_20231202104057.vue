<script setup>
import { defineProps } from "vue";
const props = defineProps({
  items: {},
});
</script>
<template>
  <div class="container">
    <div class="main">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>
</template>
<style scoped lang="less">
.main {
  width: 88%;
  max-height: 100%;
  padding: 16px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 23.5%);
  grid-template-rows: repeat(auto-fill, 45%);
  grid-gap: 2%;
  .card {
    background-color: #bfa;
  }
}
.container {
  display: flex; /* 使用Flexbox布局 */
  flex-direction: column; /* 垂直方向布局 */
  height: 100%; /* 父容器高度占满父元素 */
  width: 100%;
}
</style>
