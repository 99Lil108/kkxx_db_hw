<script setup>
import { defineProps } from "vue";
const props = defineProps({
  docDetail: {},
});
</script>
<template>
  <div class="card" @click.stop="() => {}">
    {{ docDetail.docInfo.d_name }}
    <br />
    <div class="schedules" v-for="(item, idx) in docDetail.schedule" :key="idx">
      {{ item.st_h }}
      {{ item.en_h }}
    </div>
  </div>
</template>
<style scoped lang="less">
.card {
  width: 400px;
  height: 600px;
  background-color: #fcfcff;
  border-radius: 20px;
}
</style>
