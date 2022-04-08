<template>
  <el-transfer v-model="value" :data="this.$store.getters.tableData">
    <!-- <template #default>
      <el-table
        :data="this.$store.getters.tableData"
        row-key="date"
        @selection-change="chooseData = $event"
        style="width: 100%"
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
    </template> -->
  </el-transfer>
</template>

<script>
export default {
  name: "TransferTest",
  computed: {
    value: {
      get() {
        //輸入的日幣
        return this.$store.getters.tableData;
      },
      set(value) {
        //換算後的台幣
        return this.$store.commit("tableData", value);
      },
    },
  },
};
</script>

<style>
.transfer-footer {
  margin-left: 15px;
  padding: 6px 5px;
}
</style>
