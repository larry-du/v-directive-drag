<template>
  <el-table
    :data="$store.getters.tableData"
    row-key="date"
    @selection-change="chooseData = $event"
    style="width: 100%"
    v-draggabletable="draggableOptions"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address">
      <template #default="{ row }">
        <div>{{ row.address }}</div>
      </template>
    </el-table-column>
  </el-table>
  <div v-for="table in $store.getters.tableData" :key="table.date">
    {{ table.date }}
  </div>
  <button class="pickupButton" @click.prevent="pickupData">pickup</button>
</template>

<script setup>
import { draggabletable as vDraggabletable } from "@/directive/v-draggable.js";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const chooseData = ref([]);
const store = useStore();
const draggableOptions = ref({
  animation: 400,
  saveData: (data) => {
    store.commit("tableData", data);
  },
});
const tmp = computed(() => {
  return store.getters.tableData;
});

function pickupData() {
  store.commit(
    "tableData",
    store.getters.tableData.filter((list) => {
      return !chooseData.value.some((current) => {
        return list.date === current.date;
      });
    })
  );
}
</script>
<style lang="sass" scoped></style>
