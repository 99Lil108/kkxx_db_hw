<script setup>
import { useRouter } from "vue-router";
import NavSide from "../../components/NavSide.vue";
import { reactive } from "vue";
const router = useRouter();
const data = reactive({
    items: [
      { name: "门诊时间", img: "patient/time_black.png" },
      { name: "患者信息", img: "patient/patient_black.png" },
      { name: "医生信息", img: "patient/doctor_black.png" },
      { name: "挂号信息", img: "patient/register_black.png" },
    ],
  }),
  rootPath = "/patient";
const changeView = (path) => {
  router.push(rootPath + path);
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
