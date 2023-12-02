<script setup>
import { defineProps, reactive } from "vue";
const props = defineProps({
    items: {},
    baseUrl: {
      default: "/src/assets/",
    },
  }),
  data = reactive({
    funcIdx: 0,
  });
const changeFunc = (idx) => {
  data.funcIdx = idx;
};
</script>
<template>
  <div class="nav">
    <div
      class="function"
      v-for="(item, idx) in items"
      :key="idx"
      :class="{ activeSty: data.funcIdx == idx }"
      @click="changeFunc(idx)"
    >
      <img class="icon" :src="baseUrl + item.img" />
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>
<style scoped lang="less">
.nav {
  width: 14%;
  height: 100%;
  color: white;
  background-color: #073664;
  .function {
    padding: 20px 20px;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    line-height: center;
    background-color: #073664;
  }
  .function:hover {
    background-color: #012851;
    cursor: pointer;
  }

  .icon {
    width: 17%;
    height: 10%;
    margin-right: 4px;
  }
}
.activeSty {
  background-color: #012851 !important;
}
</style>
