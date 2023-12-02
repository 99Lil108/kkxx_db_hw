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
    visible: true,
  }),
  { state, commit } = useStore();
const selectDepHandler = async (idx) => {
  data.selectIdx = idx;
  const { status, result } = await send_request({
    url: state.baseUrl + "/query/doc_info",
    payload: {
      query: {
        department_id: idx + 1,
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
  <teleport to="body">
    <div v-show="data.visible" class="popover">
      <h3>标题</h3>
      <p>这里是内容...</p>
    </div></teleport
  >
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  display: flex;
}
.popover {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
