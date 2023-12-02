<script setup>
import { defineProps, reactive, ref } from "vue";
const props = defineProps({
    items: {},
    baseUrl: {
      default: "/src/assets/",
    },
  }),
  data = reactive({
    funcIdx: 0,
  }),
  navi = ref();
const mapper = ["time", "doctor", ""];
const changeFunc = (idx) => {
  if (idx != data.funcIdx) {
    const last = data.funcIdx;
    data.funcIdx = idx;
    const doms = navi.value.children;
    console.log(doms[idx].children[0]);
    // doms[idx].children[0].src 激活的图片路径
    // doms[last].children[0].src 未被激活的图片路径
    doms[idx].children[0].src = `/src/assets/patient/${mapper[idx]}_white.png`;
    doms[
      last
    ].children[0].src = `/src/assets/patient/${mapper[last]}_black.png`;
    // doms[idx].children[0].src = `/src/assets/login/${mapper[idx]}_white.png`;
    // doms[last].children[0].src = `/src/assets/login/${mapper[last]}_blue.png`;
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

  .icon {
    width: 16%;
    height: 10%;
    margin-right: 4px;
  }
}
.activeSty {
  background-image: linear-gradient(to right, #0068ff, #00a0ff);
  color: white;
  border-radius: 8px;
}
</style>
