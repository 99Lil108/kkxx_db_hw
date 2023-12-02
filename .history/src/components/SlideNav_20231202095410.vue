<script setup>
import { defineProps, reactive } from "vue";
const props = defineProps({
    items: {},
    selectIdx,
  }),
  data = reactive({
    selectIdx: -1,
  });
const selectId = (idx) => {
  data.selectIdx = idx;
};
</script>
<template>
  <div class="nav">
    <template v-for="(item, idx) in items" :key="idx">
      <div
        class="dep"
        :class="{ activeSty: data.selectIdx == idx }"
        @click="selectId(idx)"
      >
        {{ item.name }}
      </div>
    </template>
  </div>
</template>
<style scoped lang="less">
.nav {
  width: 12%;
  height: 100%;
  background-color: #f2f6f7;
  color: #8b8b8b;
  overflow-y: auto;

  .dep {
    width: 100%;
    height: 42px;
    line-height: 42px;
    letter-spacing: 1.5px;
    padding: 0 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  .dep:hover {
    background-color: #ebeffe;
    color: #3760f4;
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
}
</style>
