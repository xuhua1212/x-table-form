<template>
  <el-dialog
    title="配置字段"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="字段名称">
        <el-checkbox-group v-model="form.checked" @change="checkChange">
          <el-checkbox
            name="checked"
            v-for="item in tableConfig"
            :key="item.id"
            :label="item.label"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    tableConfig: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        checked: [],
      },
      checkList: [],
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
      this.formatTableData();
    },
    formatTableData() {
      this.tableConfig.forEach((item) => {
        if (Boolean(item.check)) this.form.checked.push(item.label);
      });
    },
    checkChange(checkeds) {
      this.checkList = checkeds;
      // checkeds.forEach((c) => {
      //   this.tableConfig.forEach((item) => {
      //     if (c == item.label) {
      //       this.checkList.push(item);
      //     }
      //   });
      // });
    },
    handleSubmit() {
      this.$emit("check-change", this.checkList);
      this.handleClose();
    },
    handleClose() {
      this.dialogVisible = false;
      this.form = {
        checked: [],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>