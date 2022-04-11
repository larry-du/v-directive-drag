<template>
  <div class="home" data-v-sticky-container>
    <!-- <CommonTable /> -->
    <div class="box">
      <VTable
        :tableData="$store.getters.tableData"
        @pickup="pickupData($event)"
      ></VTable>
      <div
        class="sideSticky"
        v-stickysidebar="{
          topSpacing: 20,
          bottomSpacing: 20,
        }"
      >
        <div class="inner" data-v-sticky-inner>
          <p>TTTTT</p>
          <p>TTTTT</p>
        </div>
      </div>
    </div>
    <!-- <TransferTest></TransferTest> -->
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { vStickysidebar } from "@/directive";
import { onMounted, nextTick } from "vue";
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

<style lang="sass">
p
  margin: 0
.box
  display: flex
</style>
