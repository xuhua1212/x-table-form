export default {
  columObj:{
    loading: true,
    // 序号选择框
    selection: true,
    // 序号选择框根据条件是否可选
    selectable: (row, index) => {
      if (row.isSwitch) {
        return true;
      }
    },
    lazy: "false",
    //column列,columType(列类型,可选text(默认为普通文字模式),input(input可编辑框),switch(switch开关),image(图片),operation(操作按钮))
    //prop(参数),label(列名),width(宽度),align(对齐方式),sortable(是否支持排序)
    columnData: [
      {
        text: true,
        prop: "id",
        label: "编号",
        width: "",
        sortable: true,
      },
      {
        text: true,
        prop: "author",
        label: "作者",
        width: "",
      },
      {
        text: true,
        prop: "title",
        label: "标题",
        width: "",
      },
      {
        status: true,
        prop: "status",
        label: "obj类型（mesage）",
        width: "",
      },
      {
        ownDefined: true,
        prop: "count",
        label: "自定义返回内容",
        width: "",
        sortable: false,
        ownDefinedReturn: (row, $index) => {
          if (row.count > 50) {
            return "大于50";
          } else {
            return "小于等于50";
          }
        },
      },
      {
        switch: true,
        prop: "switchs",
        label: "switch开关",
        width: "",
        openText: "打开",
        closeText: "关闭",
        sortable: false,
      },
      {
        image: true,
        prop: "image",
        label: "图片",
        width: "",
        align: "center",
        sortable: false,
      },
      {
        text: true,
        editRow: undefined,
        prop: "name",
        label: "点击可编辑",
        width: "",
        align: "center",
        sortable: false,
      },
      //如果为操作列,则需要填写需要的操作按钮,类型为Object。operation(操作类型,可选edit,del,look),type(按钮样式,参考el—botton类型),label(按钮文字)icon(参考el-icon),color(字体颜色)
      {
        isOperation: true,
        label: "操作",
        width: "180",
        align: "center",
        sortable: false,
        operation: [
          {
            operation: "edit",
            type: "text",
            label: "编辑",
            icon: "",
            color: "red",
            isShow: (row, $index) => {
              return true;
            },
          },
          {
            operation: "del",
            type: "text",
            label: "删除",
            icon: "",
            color: "blue",
            isShow: (row, $index) => {
              return true;
            },
          },
          {
            operation: "look",
            type: "warning",
            label: "查看",
            icon: "",
            color: "",
            isShow: (row, $index) => {
              return true;
            },
          },
        ],
      },
    ],
  },
}