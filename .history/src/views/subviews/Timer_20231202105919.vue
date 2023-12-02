<script setup>
import { onBeforeMount, reactive } from "vue";
import { useStore } from "vuex";
import { send_request } from "../../utils/fetch";
import SlideNav from "../../components/SlideNav.vue";
import Details from "../../components/Details.vue";
const data = reactive({
    departs: null,
    selectIdx: -1,
    doctors: [],
  }),
  { state, commit } = useStore();
const selectDepHandler = async (idx) => {
  data.selectIdx = idx;
  const { status, result } = await send_request({
    url: state.baseUrl + "/query/doc_info",
    payload: {
      condition: {
        department_id: idx,
      },
    },
  }).then((data) => data.json());
  if (status == 200) data.doctors = result;
};
onBeforeMount(async () => {
  const { status, result } = await send_request({
    url: state.baseUrl + "/query/department",
  }).then((data) => data.json());
  if (status == 200) data.departs = result;
});
</script>
<template>
  <div class="container">
    <SlideNav
      :items="data.departs"
      :selectIdx="data.selectIdx"
      :onSelectDep="selectDepHandler"
    ></SlideNav>
    <Details :items="data.doctors"></Details>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
