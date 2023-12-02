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
</template>
<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  height: 500px;
  padding: 16px;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: repeat(auto-fill, 23.5%);
  grid-template-rows: repeat(auto-fill, 45%);
  grid-gap: 2%;
  .card {
    background-color: #bfa;
  }
}
</style>
