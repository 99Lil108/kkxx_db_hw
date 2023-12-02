<script setup>
import { useStore } from "vuex";
const store = useStore();
const logout = () => {
  store.commit("");
};
</script>
<template>
  <img class="exit" src="../assets/common/exit.png" @click="" />
</template>
<style scoped lang="less">
.exit {
  display: block;
  cursor: pointer;
  height: 70%;
  margin: 4px;
}
</style>
