<script setup>
import { useStore } from "vuex";
const { state } = useStore();
</script>
<template>
  <div
    class="wrap"
    :style="
      state.isLogin
        ? { backgroundColor: '#ecf1ff', borderRadius: '5px', padding: '10px' }
        : null
    "
  >
    <div class="txt" :class="{ login: state.isLogin }">
      {{ state.isLogin ? "门诊挂号系统" : "@数据库小组" }}
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  width: 12%;
  height: 80%;
  background-color: #fff;
  display: flex;
  align-items: center;
  background-color: #fcfcff;
  .txt {
    letter-spacing: 1px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    width: 100%;
    text-align: center;
    background-color: transparent;
    font-size: 18px;
    margin-left: -4px;
  }
}
.login {
  color: #efefef;
}
</style>
