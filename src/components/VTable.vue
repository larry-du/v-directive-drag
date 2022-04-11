<template>
  <div class="test">
    <el-table
      :data="tableData"
      row-key="date"
      @selection-change="chooseData = $event"
      style="width: 100%"
      v-draggabletable="{
        animation: 400,
        saveData: (data) => {
          this.$store.commit('tableData', data);
        },
      }"
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
    <div v-for="table in tableData" :key="table.date">
      {{ table.date }}
    </div>
    <button
      class="pickupButton"
      @click.prevent="
        $emit('pickup', {
          currentTableData: $store.getters.tableData,
          chooseData,
        })
      "
    >
      pickup
    </button>
  </div>
</template>

<script setup>
import { draggabletable as vDraggabletable } from "@/directive/v-draggable.js";
import { toRefs, ref, defineProps, defineEmits } from "vue";
import { useStore } from "vuex";
// import { useRouter, useRoute } from "vue-router";

const store = useStore();
defineEmits(["pickup"]);

const props = defineProps({
  tableData: {
    type: Array,
  },
});
const { tableData } = toRefs(props);
const chooseData = ref([]);
</script>
<style lang="sass" scoped></style>
