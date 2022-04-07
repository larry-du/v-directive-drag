<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />。 -->
    <CommonTable />
    <VTable></VTable>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CommonTable from "@/components/CommonTable.vue";
import VTable from "@/components/VTable.vue";

export default {
  name: "HomeView",
  components: {
    CommonTable,
    VTable,
  },
};
</script>
