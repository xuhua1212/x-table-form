<template>
  <div class="app-container">
    <BaseTable
      :total="total"
      :tableData="tableData"
      :columObj="columObj"
      :queryParams="queryParams"
      @rowOperation="rowOperation"
      @switchChange="switchChange"
      @editInputBlur="editInputBlur"
      @rowClick="rowClick"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      @handleSelectionChange="handleSelectionChange"
    ></BaseTable>
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable";
import testTable from "./testTable";
import { getList } from "@/api/table";

export default {
  components: { BaseTable },
  data() {
    return {
      total: 0,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
      },
      tableData: [],
      columObj: testTable.columObj,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.columObj.loading = true;
      const {
        data: { total, items },
      } = await getList(this.queryParams);
      this.total = total;
      this.tableData = items;
      this.columObj.loading = false;
    },
    // 按钮click callback
    rowOperation(row, $index, type) {
      const typeEnum = {
        edit: "handleEdit",
        del: "handleDel",
        look: "handleLook",
      };
      this[typeEnum[type]](row, $index);
    },
    handleEdit(row, index) {
      console.log("编辑", row, index);
    },
    handleDel(row, index) {
      console.log("删除", row, index);
    },
    handleLook(row, index) {
      console.log("查看", row, index);
    },
    // 序号选择框值
    handleSelectionChange(val) {
      console.log("handleSelectionChange ~ val", val);
    },
    // 开关change callback
    switchChange(row, $index, prop) {
      console.log(row, $index, prop);
    },
    // 点击行触发，编辑点击的所在列，排除selection
    rowClick(row, column, event) {
      if (column.type != "selection") {
        this.columObj.columnData[column.index].editRow = row.rowIndex;
      }
    },
    editInputBlur(row, $index, prop, columIndex) {
      this.columObj.columnData[columIndex].editRow = -1;
    },
    //页码变化
    handleCurrentChange(e) {
      this.queryParams.pageNum = e;
      this.getList();
    },
    //条数变化
    handleSizeChange(e) {
      this.queryParams.pageSize = e;
      this.queryParams.pageNum = 1;
      this.getList();
    },
  },
};
</script>
