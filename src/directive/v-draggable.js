import Sortable from "sortablejs";
function deepClone(cloneData) {
  return JSON.parse(JSON.stringify(cloneData));
}
const draggabletable = {
  mounted(el, binding) {
    Sortable.create(el.querySelector(".el-table__body tbody"), {
      animation: binding.value.animation,
      onEnd: (evt) => {
        const data = deepClone(binding.instance.$data);
        const dragItem = data.tableData.splice(evt.oldIndex, 1)[0];
        data.tableData.splice(evt.newIndex, 0, dragItem);
        binding.value.saveData(data.tableData);
      },
    });
  },
};

export { draggabletable };
