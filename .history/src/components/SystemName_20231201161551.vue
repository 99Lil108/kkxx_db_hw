<script setup>
import { useStore } from "vuex";
const { state } = useStore();
</script>
<template>
  <div class="txt" :class="{ login: !state.isLogin }">
    {{ state.isLogin ? "门诊挂号系统" : "@数据库小组" }}
  </div>
</template>
<style scoped lang="less">
.txt {
  letter-spacing: 1px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  width: 160px;
  text-align: center;
  background-color: transparent;
}
.login {
  color: #efefef;
}
</style>
