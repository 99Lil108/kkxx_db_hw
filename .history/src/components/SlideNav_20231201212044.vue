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
    <div
      class="dep"
      v-for="(item, idx) in items"
      :key="idx"
      :class="{ activeSty: data.selectIdx == idx }"
      @click="selectId(idx)"
    >
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>
<style scoped lang="less">
.nav {
  width: 10%;
  height: 100%;
  background-color: #efefef;
  color: #8b8b8b;
  overflow-y: auto;
  .dep {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 0.5px solid #e7eaed;
  }
}
.nav::-webkit-scrollbar {
  display: none;
}
.activeSty {
}
</style>
