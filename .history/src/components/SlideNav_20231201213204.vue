<script setup>
import { defineProps, reactive } from "vue";
const props = defineProps({
    items: {},
  }),
  data = reactive({
    selectIdx: -1,
  });
const selectId = (idx) => {};
</script>
<template>
  <div class="nav">
    <template v-for="(item, idx) in items" :key="idx"> </template>
    <div
      class="dep"
      :class="{ activeSty: data.selectIdx == idx }"
      @click="selectId(idx)"
    >
      <div>{{ item.name }}</div>
    </div>
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
  }
  .dep::before {
    content: "";
    bottom: 0;
    height: 0;
    width: 70%;
    background-color: #e7eaed;
    left: 0;
    right: 0;
  }
}
.nav::-webkit-scrollbar {
  display: none;
}
.activeSty {
}
</style>
