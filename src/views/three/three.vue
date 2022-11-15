<template>
    <div>
        <div class="three-canvas" ref="threeTarget"></div>
    </div>
</template>

<script>
import { ThreeEngine } from './TEngine'
import { allBaseObject } from './TBaseObject'
import { allLights } from './TLights'
import { allHelper } from './THelper'
export default {
    name: "Three",
    data() {
        return {
            ThreeEngine: null,
        };
    },
    mounted() {
        this.ThreeEngine = new ThreeEngine(this.$refs.threeTarget)
        this.ThreeEngine.addObject(...allBaseObject)  // 添加基础模型
        this.ThreeEngine.addObject(...allLights)  // 添加灯光
        this.ThreeEngine.addObject(...allHelper)    // 添加辅助线
    }
}
</script>

<style lang="scss" scoped>
.three-canvas {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #d6eaff;
}
</style>