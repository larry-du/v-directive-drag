<template>
  <div class="home">
    <!-- <CommonTable /> -->
    <VTable></VTable>
    <!-- <TransferTest></TransferTest> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CommonTable from "@/components/CommonTable.vue";
import VTable from "@/components/VTable.vue";
// import TransferTest from "@/components/TransferTest.vue";

export default {
  name: "HomeView",
  components: {
    // CommonTable,
    VTable,
    // TransferTest,
  },
};
</script>
