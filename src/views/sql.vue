<template>
  <div>
    <BaseSql :formDatas="formDatas" :rulesData="rulesData" @rulesChange="rulesChange" />
  </div>
</template>

<script>
import BaseSql from '@/components/BaseSql'
export default {
  components: {
    BaseSql
  },
  data () {
    return {
      formDatas: [
        {
          label: "条件名1",
          value: "one"
        },
        {
          label: "条件名2",
          value: "two"
        }
      ],
      rulesData: {//初始化条件对象或者，已保存的条件对象
        relation: "and",
        conditions: [],
        children: []
      }
    }
  },
  methods: {
    rulesChange (datas) {
      console.log(datas)//输出的条件对象
    }
  }
}
</script>

<style lang="scss" scoped>
</style>