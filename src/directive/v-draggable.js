import Sortable from "sortablejs";
// function deepClone(cloneData) {
//   return JSON.parse(JSON.stringify(cloneData));
// }
const draggabletable = {
  updated(el, binding, vnode) {
    Sortable.create(el.querySelector(".el-table__body tbody"), {
      animation: binding.value.animation,
      onEnd: (evt) => {
        const dragData = binding.instance.tmp;
        const dragItem = dragData.find((item, index) => index === evt.oldIndex);
        const newDragData = [
          ...dragData.slice(0, evt.oldIndex),
          ...dragData.slice(evt.oldIndex + 1),
        ];
        newDragData.splice(evt.newIndex, 0, dragItem);
        binding.value.saveData(newDragData);
      },
    });
  },
};

export { draggabletable };
