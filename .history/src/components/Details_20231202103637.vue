<script setup>
import { defineProps } from "vue";
const props = defineProps({
  items: {},
});
</script>
<template>
  <div style="height: 100%; display: flex; width: 100%">
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
    </div>
  </div>
</template>
<style scoped lang="less">
.main {
  width: 88%;
  height: 100%;
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
</style>
