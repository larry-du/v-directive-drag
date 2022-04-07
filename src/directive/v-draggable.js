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

        const dragItem = data.splice(evt.oldIndex, 1)[0];
        data.splice(evt.newIndex, 0, dragItem);
        binding.value.saveData(data);

        // binding.value.saveData([
        //   ...data.slice(0, evt.newIndex),
        //   ...data.slice(evt.newIndex),
        // ]);
      },
    });
  },
};

export { draggabletable };
