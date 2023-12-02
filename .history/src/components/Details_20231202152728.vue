<script setup>
import { defineProps } from "vue";
const props = defineProps({
  items: {},
  onclick: {},
});
</script>
<template>
  <div class="main">
    <div
      class="card"
      v-for="(item, idx) in items"
      :key="idx"
      @click="onclick(item.doc_id)"
    >
      {{ item.d_name }}
      <br />
      {{ item.age }}
      <br />
      {{ item.title }}
    </div>
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
  justify-content: flex-start;
  align-content: flex-start;
  .card {
    background-color: #bfa;
    width: 24%;
    height: 200px;
    margin: 10px 0.5%;
    cursor: pointer;
  }
}
.main::-webkit-scrollbar {
  display: none;
}
</style>
