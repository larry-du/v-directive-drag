import Sortable from "sortablejs";
import { deepClone } from "@/composable";
const vDraggableTable = {
  mounted(el, binding, vnode) {
    Sortable.create(el.querySelector(".el-table__body tbody"), {
      animation: binding.value.animation,
      onEnd: (evt) => {
        const dragData = deepClone(binding.instance.tableData);
        const [targetItem] = dragData.splice(evt.oldIndex, 1);
        dragData.splice(evt.newIndex, 0, targetItem);
        binding.value.saveData(dragData);
      },
    });
  },
};

export default vDraggableTable;
