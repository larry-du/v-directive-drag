<template>
  <div class="home">
    <!-- <CommonTable /> -->
    <VTable
      :tableData="$store.getters.tableData"
      @pickup="pickupData($event)"
    ></VTable>
    <!-- <TransferTest></TransferTest> -->
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import CommonTable from "@/components/CommonTable.vue";
import VTable from "@/components/VTable.vue";
const store = useStore();
function pickupData({ currentTableData, chooseData }) {
  store.commit(
    "tableData",
    currentTableData.filter((list) => {
      return !chooseData.some((current) => {
        return list.date === current.date;
      });
    })
  );
}
</script>
