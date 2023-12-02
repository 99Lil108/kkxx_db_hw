<script setup>
import { defineProps } from "vue";
const props = defineProps({
  items: {},
  selectIdx: {},
  onSelectDep: {},
});
</script>
<template>
  <div class="nav">
    <div
      class="dep"
      v-for="item in items"
      :key="item.id"
      :class="{ activeSty: selectIdx == item.id }"
      @click="onSelectDep(item.id)"
    >
      {{ item.name }}
    </div>
  </div>
</template>
<style scoped lang="less">
.nav {
  width: 15%;
  height: 100%;
  background-color: #fafbff;
  color: #343c6f;
  overflow-y: auto;
  border-right: 1px solid #efeff5;
  .dep {
    margin: 5px;
    width: 94%;
    height: 40px;
    line-height: 39px;
    letter-spacing: 1.5px;
    padding: 0 5px;
    text-align: center;
    font-size: 17px;
    cursor: pointer;
  }
  .dep:hover {
    background-image: linear-gradient(to right, #0068ff, #00a0ff);
    color: white;
    border-radius: 8px;
    border-color: 2px solid #0053ff;
  }
}
.nav::-webkit-scrollbar {
  display: none;
}
.activeSty {
  background-image: linear-gradient(to right, #0068ff, #00a0ff);
  color: white;
  border-radius: 8px;
  border-color: 2px solid #0053ff;
}
</style>
