<script setup>
import NavSide from "../../components/NavSide.vue";
const items = [
  { name: "门诊时间", img: "patient/time.png" },
  { name: "患者信息", img: "login/patient_white.png" },
  { name: "医生信息", img: "login/doctor_white.png" },
  { name: "医生信息", img: "login/doctor_white.png" },
];
</script>
<template>
  <div class="container">
    <div class="content">
      <NavSide></NavSide>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
