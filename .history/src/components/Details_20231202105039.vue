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
  </div>
</template>
<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .card {
    background-color: #bfa;
    width: 24%;
    height: 200px;
    margin: 10px 0.5%;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
