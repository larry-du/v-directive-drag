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

<script>
import { draggabletable } from "@/directive/v-draggable.js";
// import Sortable from "sortablejs";
export default {
  name: "CommonTable",
  directives: { draggabletable },
  data() {
    return {
      draggableOptions: {
        animation: 400,
        saveData: (data) => {
          this.$store.commit("tableData", data);
        },
      },

      chooseData: [],
      tableData: [
        {
          date: "A",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "B",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "C",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "D",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  methods: {
    pickupData() {
      if (!this.chooseData.length) return;
      this.$store.commit(
        "tableData",
        this.$store.getters.tableData.filter((list) => {
          return !this.chooseData.some((current) => {
            return list.date === current.date;
          });
        })
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped></style>
