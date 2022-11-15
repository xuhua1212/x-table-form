<template>
  <div>
    <BaseSql
      :formDatas="formDatas"
      :rulesData="rulesData"
      @rulesChange="rulesChange"
    />
    <el-select v-model="value" placeholder="请选择" filterable>
      <el-option-group
        v-for="group in options"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-option-group>
    </el-select>
  </div>
</template>

<script>
import BaseSql from "@/components/BaseSql";
export default {
  components: {
    BaseSql,
  },
  data() {
    return {
      options: [
        {
          label: "中信证券上海溧阳路证券营业部",
          options: [
            {
              value: "Shanghai",
              label: "朱向荣",
            },
            {
              value: "Beijing",
              label: "夏小英",
            },
          ],
        },
        {
          label: "中信证券上海分公司",
          options: [
            {
              value: "Chengdu",
              label: "刘德华",
            },
            {
              value: "Shenzhen",
              label: "张学友",
            },
            {
              value: "Guangzhou",
              label: "郭富城",
            },
            {
              value: "Dalian",
              label: "黎明",
            },
          ],
        },
        {
          label: "中信证券",
          options: [
            {
              value: "Chengdu",
              label: "刘德华",
            },
            {
              value: "Shenzhen",
              label: "彭于晏",
            },
          ],
        },
      ],
      formDatas: [
        {
          label: "条件名1",
          value: "one",
        },
        {
          label: "条件名2",
          value: "two",
        },
      ],
      rulesData: {
        //初始化条件对象或者，已保存的条件对象
        relation: "and",
        conditions: [],
        children: [],
      },
    };
  },
  methods: {
    rulesChange(datas) {
      console.log(datas); //输出的条件对象
    },
  },
};
</script>

<style lang="scss" scoped>
</style>