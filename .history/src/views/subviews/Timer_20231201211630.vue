<script setup>
import { onBeforeMount, reactive } from "vue";
import { useStore } from "vuex";
import { send_request } from "../../utils/fetch";
import SlideNav from "../../components/SlideNav.vue";
const data = reactive({
    departs: null,
  }),
  { state, commit } = useStore();
onBeforeMount(async () => {
  const { status, result } = await send_request({
    url: state.baseUrl + "/query/department",
  });
  if (status == 200) data.departs = result;
});
</script>
<template>
  <div class="container">
    <SlideNav :item="departs"></SlideNav>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
