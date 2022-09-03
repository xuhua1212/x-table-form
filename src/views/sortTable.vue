<template>
  <div class="draggable" style="padding: 20px">
    <el-button style="margin-bottom: 20px" type="primary" @click="handleSetting"
      >字段配置</el-button
    >
    <el-table row-key="id" :data="tableData" style="width: 100%" border>
      <el-table-column
        v-for="(item, index) in oldList"
        :key="`col_${index}`"
        :prop="newList[index].prop"
        :label="item.label"
        align="center"
      >
      </el-table-column>
    </el-table>
    <DialogModel
      ref="dialog"
      :tableConfig="tableConfig"
      @check-change="checkChange"
    ></DialogModel>
  </div>
</template>

<script>
import Sortable from "sortablejs";
import DialogModel from "./component/dialogModel.vue";
export default {
  name: "SortTable",
  components: { DialogModel },
  data() {
    return {
      oldList: [],
      newList: [],
      tableData: [
        {
          id: 1,
          name: "李一",
          gender: "男",
          age: 30,
          job: "会计",
        },
        {
          id: 2,
          name: "王二",
          gender: "未知",
          age: 18,
          job: "无业游民",
        },
        {
          id: 3,
          name: "张三",
          gender: "男",
          age: 50,
          job: "老板",
        },
      ],
      tableConfig: [
        {
          label: "序号",
          prop: "id",
          check: true,
        },
        {
          label: "姓名",
          prop: "name",
          check: true,
        },
        {
          label: "性别",
          prop: "gender",
          check: true,
        },
        {
          label: "年龄",
          prop: "age",
          check: true,
        },
        {
          label: "工作",
          prop: "job",
          check: true,
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.oldList = JSON.parse(JSON.stringify(this.tableConfig));
      this.newList = JSON.parse(JSON.stringify(this.tableConfig));
      this.columnDrop();
    },
    // 列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector(
        ".draggable .el-table__header-wrapper tr"
      );
      Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.newList[evt.oldIndex];
          this.newList.splice(evt.oldIndex, 1);
          this.newList.splice(evt.newIndex, 0, oldItem);
        },
      });
    },
    handleSetting() {
      this.$refs["dialog"].open();
    },
    checkChange(newTableItems) {
      const newDataList = [];
      this.tableConfig.forEach((item) => {
        const { label } = item;
        if (newTableItems.includes(label)) {
          item.check = true;
          newDataList.push(item);
        } else {
          item.check = false;
        }
      });
      this.oldList = this.newList = newDataList;
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  margin-top: 40px;
}
</style>