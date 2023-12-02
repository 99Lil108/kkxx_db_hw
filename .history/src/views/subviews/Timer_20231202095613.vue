<script setup>
import { onBeforeMount, reactive } from "vue";
import { useStore } from "vuex";
import { send_request } from "../../utils/fetch";
import SlideNav from "../../components/SlideNav.vue";
const data = reactive({
    departs: null,
    selectIdx,
  }),
  { state, commit } = useStore();
const selectDepHandler = (idx) => {
  data.selectIdx = idx;
};
onBeforeMount(async () => {
  const { status, result } = await send_request({
    url: state.baseUrl + "/query/department",
  }).then((data) => data.json());
  if (status == 200) data.departs = result;
  console.log(data.departs);
});
</script>
<template>
  <div class="container">
    <SlideNav
      :items="data.departs"
      :selectIdx="data.selectIdx"
      :onSelectDep="selectDepHandler"
    ></SlideNav>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
