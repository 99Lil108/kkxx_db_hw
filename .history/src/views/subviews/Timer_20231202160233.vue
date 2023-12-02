<script setup>
import { onBeforeMount, reactive } from "vue";
import { useStore } from "vuex";
import { send_request } from "../../utils/fetch";
import SlideNav from "../../components/SlideNav.vue";
import Details from "../../components/Details.vue";
import FloatCard from "../../components/FloatCard.vue";
const data = reactive({
    departs: [],
    selectIdx: -1,
    doctors: [],
    cardVisible: false,
    docDetail: {},
  }),
  { state, commit } = useStore();
const selectDepHandler = async (idx) => {
  data.selectIdx = idx;
  const { status, result } = await send_request({
    url: state.baseUrl + "/query/doc_info",
    payload: {
      query: {
        department_id: idx,
      },
    },
  }).then((data) => data.json());
  if (status == 200) data.doctors = result;
};
const hideCard = () => {
  data.cardVisible = false;
};
const docDetailHandler = async (doc_id) => {
  for (let i = 0; i < data.doctors.length; i++) {
    if (data.doctors[i].doc_id == doc_id) {
      data.docDetail.docInfo = data.doctors[i];
      break;
    }
  }
  const { status, result } = await send_request({
    url: state.baseUrl + "/query/doc_schedule",
    payload: {
      query: {
        doc_id,
      },
    },
  }).then((data) => data.json());
  if (status == 200) data.docDetail.schedule = result;
  console.log(result);
  console.log(data.docDetail);
  data.cardVisible = true;
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
    <Details
      :items="data.doctors"
      :docDetailHandler="docDetailHandler"
    ></Details>
  </div>
  <teleport to="body">
    <div v-if="data.cardVisible" class="popover" @click="hideCard">
      <FloatCard :docDetail="data.docDetail"></FloatCard></div
  ></teleport>
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
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
