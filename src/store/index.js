import { createStore } from "vuex";

export default createStore({
  state: {
    tableData2: [
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
      {
        date: "E",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "F",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "G",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "H",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "I",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "J",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "K",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ],
  },
  getters: {
    tableData(state) {
      return state.tableData;
    },
    tableData2(state) {
      return state.tableData2;
    },
  },
  mutations: {
    tableData(state, payload) {
      state.tableData = payload;
    },
    tableData2(state, payload) {
      state.tableData2 = payload;
    },
  },
  actions: {},
  modules: {},
});
