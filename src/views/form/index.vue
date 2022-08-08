<template>
  <div id="app">
    <el-button type="primary" @click="dialog = true" size="default">
      点击打开 Dialog
    </el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialog"
      width="1200px"
      :modal-append-to-body="true"
      ><div>
        <BaseForm
          ref="baseForm"
          :formObj="formObj"
          :formData="formData"
          :searchSelectOptionsCb="searchSelectOptionsCb"
          @selectChange="selectChange"
          @inputINPUT="inputINPUT"
          @inputChange="inputChange"
          @querySelectValue="querySelectValue"
          @formSwitchChange="formSwitchChange"
          @buttonClick="buttonClick"
        >
        </BaseForm>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogOK">确认</el-button>
        <el-button @click="dialog = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import formJs from "./testForm";
export default {
  name: "App",
  components: {
    BaseForm,
  },
  data() {
    return {
      dialog: false, //弹出框
      formObj: formJs.formObj,
      formData: formJs.formData,
      searchSelectOptionsCb: [], //form表单搜索select返回值
    };
  },
  watch: {
    dialog(newVal, oldVal) {
      if (!newVal) {
        this.$refs.baseForm.resetForm(); //窗口关闭清空表单
      }
    },
  },
  methods: {
    // select选择框变化
    selectChange(value, index, prop) {
      console.log(value, index, prop);
    },
    // inpuit变化
    inputINPUT(value, index, prop) {
      console.log(value, index, prop);
    },
    // inpuit Change
    inputChange(value, index, prop) {
      console.log(value, index, prop);
    },
    // select 搜索值
    querySelectValue(value, index, prop) {
      console.log(value, index, prop);
      let arr = [
        {
          label: "搜索返回1号",
          value: 1,
        },
        {
          label: "搜索返回2号",
          value: 2,
        },
      ];
      this.searchSelectOptionsCb = arr;
    },
    // form表单switch变化
    formSwitchChange(val, index, prop) {
      console.log(val, index, prop);
    },
    // 按钮点击
    buttonClick(index, prop) {
      console.log(index, prop);
    },
    dialogOK() {
      //判断表单验证是否通过
      if (this.$refs.baseForm.submitForm()) {
        console.log("success");
        console.log(this.formData);
      } else {
        console.log("error");
      }
    },
  },
};
</script>

<style scope lang="scss">
.el-dialog {
  height: 100%;
}
</style>
