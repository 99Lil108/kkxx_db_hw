<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import { send_request } from "../../utils/fetch";
const departs = [];
const { state, commit } = useStore();
onBeforeMount(async () => {
  const { status, result } = await send_request({
    url: state.baseUrl + "/query/department",
  });
  if (status == 200) departs = result;
});
</script>
<template>
  <div class="container">hh</div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
}
</style>
