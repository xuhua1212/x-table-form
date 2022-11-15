import { AxesHelper, GridHelper } from 'three'

export const allHelper = []

// 坐标辅助
export const axesHelper = new AxesHelper(500)  // 创建坐标辅助 （500 为辅助线的长度）
// 创建地面网格辅助
export const gridHelper = new GridHelper(100, 10, 'red', 'rgb(222, 225, 230)')

allHelper.push(axesHelper, gridHelper)  // 添加到辅助列表
