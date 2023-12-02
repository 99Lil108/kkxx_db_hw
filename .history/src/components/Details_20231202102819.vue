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
  </div>
</template>
<style scoped lang="less">
.main {
  width: 88%;
  height: 100%;
  padding: 2px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 18%);
  grid-template-rows: repeat(auto-fill, 18%);
  grid-gap: 10px;
  .card {
    background-color: #bfa;
    // width: 200px;
    // height: 200px;
    // margin: 2px;
  }
}
</style>
