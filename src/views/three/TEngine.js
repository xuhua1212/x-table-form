import { WebGLRenderer, Scene, PerspectiveCamera, Vector3, MOUSE, Vector2, Raycaster } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'

export class ThreeEngine {
    dom = null; // 挂载的 DOM
    scene = null; // 场景
    // 构造器函数
    constructor(dom) {
        // 创建渲染器
        let renderer = new WebGLRenderer({
            antialias: true,  // 开启抗锯齿
        })

        dom.appendChild(renderer.domElement)  // 将渲染器挂载到dom
        renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)
        let scene = new Scene()  // 实例化场景
        // 实例化相机
        let camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)
        camera.position.set(50, 50, 50) // 设置相机位置
        camera.lookAt(new Vector3(0, 0, 0))  // 设置相机看先中心点
        camera.up = new Vector3(0, 1, 0)  // 设置相机自身方向
        // 初始化变换控制器
        let transformControls = new TransformControls(camera, renderer.domElement)
        scene.add(transformControls) // 将变换控制器添加至场景

        this.dom = dom
        this.scene = scene
        renderer.render(scene, camera)  // 渲染器渲染场景和相机
        // renderer.setClearColor('rgb(239, 70, 1)')  // 设置渲染器的颜色
        let orbitControls = new OrbitControls(camera, renderer.domElement)
        orbitControls.mouseButtons = {  // 设置鼠标功能键（轨道控制器）
            LEFT: null,  // 左键无功能
            MIDDLE: MOUSE.DOLLY,  // 中键缩放
            RIGHT: MOUSE.ROTATE   // 右键旋转
        }
        // 点击事件
        renderer.domElement.addEventListener("click", event => {
            console.log("click")
            raycaster.setFromCamera(mouse, camera)  // 配置射线发射器，传递鼠标和相机对象
            const intersection = raycaster.intersectObjects(scene.children) // 获取射线发射器捕获的模型列表，传进去场景中所以模型，穿透的会返回我们
            if (intersection.length) {
                const object = intersection[0].object  // 获取第一个模型
                transformControls.attach(object)
            }
        })
        // 逐帧渲染threejs
        let animate = () => {
            renderer.render(scene, camera)  // 渲染器渲染场景和相机
            requestAnimationFrame(animate);
        }
        // 初始化鼠标位置
        let mouse = new Vector2()
        //  屏幕鼠标x，屏幕鼠标y  视图宽度，视图高度
        let x = 0; let y = 0; let width = 0; let height = 0
        renderer.domElement.addEventListener("mousemove", event => {
            x = event.offsetX
            y = event.offsetY
            width = renderer.domElement.offsetWidth
            height = renderer.domElement.offsetHeight
            mouse.x = x / width * 2 - 1
            mouse.y = -y * 2 / height + 1
        })
        // 初始化射线发射器
        let raycaster = new Raycaster()
        // 鼠标点击事件
        renderer.domElement.addEventListener("click", event => {
            raycaster.setFromCamera(mouse, camera)  // 配置射线发射器，传递鼠标和相机对象
            const intersection = raycaster.intersectObjects(scene.children) // 获取射线发射器捕获的模型列表，传进去场景中所以模型，穿透的会返回我们
            console.log(intersection)
        })
        animate()
    }

    /**
   * 向场景中添加模型
   * @param  {...any} object 模型列表
   */
    addObject(...object) {
        object.forEach(elem => {
            this.scene.add(elem)  // 场景添加模型
        })
    }
}