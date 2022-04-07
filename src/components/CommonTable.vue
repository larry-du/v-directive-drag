<template>
  <el-table
    :data="$store.getters.tableData2"
    row-key="date"
    @selection-change="chooseData = $event"
    style="width: 100%"
    v-draggabletable="draggableOptions"
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
import { draggabletable } from "@/directive/v-draggable.js";
// import draggable from "@/plugins/draggable.js";
// import Sortable from "sortablejs";
export default {
  name: "CommonTable",
  directives: { draggabletable },
  components: {
    // draggable,
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
      //   headers: ["date", "name", "address"],
      tableData: [
        {
          date: "A",
          //   name: "Tom",
          //   address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "B",
          //   name: "Tom",
          //   address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "C",
          //   name: "Tom",
          //   address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "D",
          //   name: "Tom",
          //   address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     const self = this;
  //     Sortable.create(document.querySelector(".el-table__body tbody"), {
  //       animation: 200,
  //       onEnd: (evt) => {
  //         console.log(this);
  //         const targetItem = self.tableData.splice(evt.oldIndex, 1)[0];
  //         // const targetItem = self.tableData[evt.oldIndex];
  //         console.log(targetItem);
  //         self.tableData.splice(evt.newIndex, 0, targetItem);
  //       },
  //     });
  //   });
  // },
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
      // console.log(this.tableData);
    },
  },
};
</script>
