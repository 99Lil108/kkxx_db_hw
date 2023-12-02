<script setup>
import { useStore } from "vuex";
const { state } = useStore();
</script>
<template>
  <div class="txt">
    {{ !state.isLogin ? "门诊挂号管理系统" : "@数据库小组" }}
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
}
</style>
