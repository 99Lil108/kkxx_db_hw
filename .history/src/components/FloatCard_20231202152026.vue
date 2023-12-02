<script setup>
import { defineProps } from "vue";
const props = defineProps({
  docDetail: {},
});
</script>
<template>
  <div class="card" @click.stop="() => {}"></div>
</template>
<style scoped lang="less">
.card {
  width: 400px;
  height: 600px;
  background-color: #fcfcff;
  border-radius: 20px;
}
</style>
