<script setup>
import { useStore } from "vuex";
import { onBeforeMount, reactive } from "vue";
import { send_request } from "../../utils/fetch";
const data = reactive({
  appointment: [],
});
const { state, commit } = useStore();
onBeforeMount(async () => {
  const { status, result } = send_request({
    url: state.baseUrl + "/query/appointment_info",
    payload: {
      query: { registrar_id: state.info.id },
    },
  }).then((data) => data.json());
  console.log(result);
});
</script>
<template>
  <div class="wrap"></div>
</template>
<style scoped lang="less">
.wrap {
  overflow-y: auto;
  width: 100%;
  height: 100%;
}
</style>
