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
.container {
  display: flex;
  flex-direction: column; /* 垂直方向布局 */
  height: 100%; /* 父容器高度占满父元素 */
  width: 88%;
  overflow-y: auto;
  .main {
    width: 100%;
    height: 100%;
    padding: 16px;

    display: grid;
    grid-template-columns: repeat(auto-fill, 23.5%);
    grid-template-rows: repeat(auto-fill, 45%);
    grid-gap: 2%;
    .card {
      background-color: #bfa;
    }
  }
}
</style>
