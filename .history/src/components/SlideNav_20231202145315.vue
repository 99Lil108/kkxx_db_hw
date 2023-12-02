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
    <template v-for="(item, idx) in items" :key="idx">
      <div
        class="dep"
        :class="{ activeSty: selectIdx == idx }"
        @click="onSelectDep(idx)"
      >
        {{ item.name }}
      </div>
    </template>
  </div>
</template>
<style scoped lang="less">
.nav {
  width: 15%;
  height: 100%;
  background-color: white;
  color: #343c6f;
  overflow-y: auto;

  .dep {
    margin: 5px;
    width: 94%;
    height: 40px;
    line-height: 39px;
    letter-spacing: 1.5px;
    padding: 0 5px;
    text-align: center;
    font-size: 17px;
    // position: relative;
    cursor: pointer;
  }
  .dep:hover {
    background-image: linear-gradient(to right, #0068ff, #00a0ff);
    color: white;
    border-radius: 8px;
    border-color: 2px solid #0053ff;
  }
  .dep::before {
    position: absolute;
    content: "";
    bottom: 0;
    height: 0.5px;
    width: 70%;
    background-color: #e7eaed;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.nav::-webkit-scrollbar {
  display: none;
}
.activeSty {
  background-color: #ebeffe !important;
  color: #3760f4 !important;
  background-image: linear-gradient(to right, #0068ff, #00a0ff);
  color: white;
  border-radius: 8px;
  border-color: 2px solid #0053ff;
}
</style>
