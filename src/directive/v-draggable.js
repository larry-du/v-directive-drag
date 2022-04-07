import Sortable from "sortablejs";
// import Store from "../store/index";
// function deepClone(cloneData) {
//   return JSON.parse(JSON.stringify(cloneData));
// }
const draggabletable = {
  updated(el, binding, vnode) {
    console.log("drag");
    // console.log(vnode.dirs[0].instance.tableData);
    // const data = binding.value.get;

    Sortable.create(el.querySelector(".el-table__body tbody"), {
      animation: binding.value.animation,
      onEnd: (evt) => {
        const data = binding.instance.tmp;
        const test2 = data.find((item, index) => index === evt.oldIndex);
        console.log(test2);
        const test = [
          ...data.slice(0, evt.newIndex),
          test2,
          ...data.slice(evt.newIndex + 1),
        ];
        console.log(test);
        // data.slice(0, evt.oldIndex);
        const dragItem = data.splice(evt.oldIndex, 1)[0];
        // debugger;
        data.splice(evt.newIndex, 0, dragItem);
        // debugger;
        // console.log("after", data);
        binding.value.saveData(data);
      },
    });
  },
};

export { draggabletable };
