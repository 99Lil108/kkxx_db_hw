<script setup>
import { useRouter } from "vue-router";
import NavSide from "../../components/NavSide.vue";
import { reactive } from "vue";
const router = useRouter();
const data = reactive({
    items: [
      { name: "门诊时间", img: ["/time_black.png", "/time_white.png"] },
      { name: "患者信息", img: ["/patient_black.png", "/patient_white.png"] },
      { name: "医生信息", img: ["/doctor_black.png", "/doctor_white.png"] },
      { name: "挂号信息", img: ["/register_black.png", "/register_white.png"] },
    ],
  }),
  rootPath = "/patient",
  children = ["time", "regis"];
const changeView = (idx) => {
  router.push(rootPath + children[idx]);
};
</script>
<template>
  <div class="container">
    <NavSide :items="data.items" :changeView="changeView"></NavSide>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    width: 86%;
    height: 100%;
  }
}
</style>
