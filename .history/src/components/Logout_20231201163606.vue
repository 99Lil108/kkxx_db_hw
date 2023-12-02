<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore(),
  router = useRouter();
const logout = () => {
  store.commit("updateToken", null);
  router.push("/login");
};
</script>
<template>
  <img class="exit" src="../assets/common/exit.png" @click="logout" />
</template>
<style scoped lang="less">
.exit {
  display: block;
  cursor: pointer;
  height: 70%;
  margin: 4px;
}
</style>
