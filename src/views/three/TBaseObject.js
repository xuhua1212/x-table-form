import { BoxGeometry, Mesh, MeshStandardMaterial } from "three"
// 创建立方体
export const box = new Mesh(
    new BoxGeometry(20, 20, 20),  // 设置立方体的大小 (x 长度, y 高度 ,z 长度)
    new MeshStandardMaterial({   // 设置材质
        color: 'rgb(36, 172, 242)',  // 设置材质的颜色
        metalness: 0.5,   // 金属度 （1 最像金属，0 最不想金属）
        roughness: 0   // 粗糙度（0 最光滑，1 最粗糙）
    })
)
// box.name = 'box'
// box.position.set(5, 5, 5)  // 设置模型位置 (x,y,z)
box.sheshimoxingshuju = {
    name: 'box',
    user: '我是ed.'
}
export const allBaseObject = []  // 返回所有基础模型
allBaseObject.push(box)  // 添加到模型数组