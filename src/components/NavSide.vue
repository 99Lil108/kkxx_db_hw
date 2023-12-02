<script setup>
import { defineProps, reactive, ref } from "vue";
const props = defineProps({
    items: {},
    baseUrl: {
      default: "/src/assets/patient/",
    },
    changeView: {},
  }),
  data = reactive({
    funcIdx: 0,
  }),
  navi = ref();
const changeFunc = (idx) => {
  if (idx != data.funcIdx) data.funcIdx = idx;
  props.changeView(idx);
};
const handleMouseOver = (idx) => {
  navi.value.children[idx].children[0].src =
    props.baseUrl + props.items[idx].img[1];
};
const handleMouseOut = (idx) => {
  if (idx != data.funcIdx) {
    navi.value.children[idx].children[0].src =
      props.baseUrl + props.items[idx].img[0];
  }
};
</script>
<template>
  <div class="nav" ref="navi">
    <div
      class="function"
      v-for="(item, idx) in items"
      :key="idx"
      :class="{ activeSty: data.funcIdx == idx }"
      @click="changeFunc(idx)"
      @mouseover="handleMouseOver(idx)"
      @mouseout="handleMouseOut(idx)"
    >
      <img class="icon" :src="baseUrl + item.img[+(data.funcIdx == idx)]" />
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>
<style scoped lang="less">
.nav {
  width: 14%;
  height: 100%;
  color: white;
  // background-color: #073664;
  border-right: 1px solid #efeff5;
  .function {
    padding: 14px;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 10px;
    color: #343c6f;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .function:hover {
    background-image: linear-gradient(to right, #0068ff, #00a0ff);
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
  .activeSty {
    background-image: linear-gradient(to right, #0068ff, #00a0ff);
    color: white;
    border-radius: 8px;
  }

  .icon {
    width: 16%;
    height: 10%;
    margin-right: 4px;
  }
}
</style>
