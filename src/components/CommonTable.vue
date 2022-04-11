<template>
  <el-table
    :data="$store.getters.tableData2"
    row-key="date"
    @selection-change="chooseData = $event"
    style="width: 100%"
    v-draggable-table="draggableOptions"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="date" label="Date" />
  </el-table>
  <div v-for="table in $store.getters.tableData2" :key="table.date">
    {{ table.date }}
  </div>
  <button class="pickupButton" @click.prevent="pickupData">pickup</button>
</template>

<script>
import { vDraggableTable } from "@/directive";
export default {
  name: "CommonTable",
  directives: { vDraggableTable },
  computed: {
    tableData() {
      return this.$store.getters.tableData2;
    },
  },
  data() {
    return {
      draggableOptions: {
        animation: 400,
        saveData: (data) => {
          this.$store.commit("tableData2", data);
        },
      },
      chooseData: [],
    };
  },
  methods: {
    pickupData() {
      if (!this.chooseData.length) return;
      this.$store.commit(
        "tableData2",
        this.$store.getters.tableData2.filter((list) => {
          return !this.chooseData.some((current) => {
            return list.date === current.date;
          });
        })
      );
    },
  },
};
</script>
