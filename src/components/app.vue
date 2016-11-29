<style scoped>
    @import '../styles/common.css';
</style>
<template>
    <div>
        <router-view></router-view>
        <el-foot></el-foot>
        <el-loading></el-loading>
        <el-meter></el-meter>
        <el-switch
            v-model="value1"
            on-text=""
            off-text="">
        </el-switch>
        <el-switch
            v-model="value2"
            on-color="#13ce66"
            off-color="#ff4949">
        </el-switch>
    </div>
</template>
<script>
    import elFoot from '../components/foot';
    import elLoading from '../components/loading';
    import elMeter from '../components/meter';
    import store from '../vuex/store.js';
    import { addCount } from '../vuex/actions.js';
    export default {
        name: 'tamamo',
        store,
        components: {
            elFoot, elLoading, elMeter
        },
        data () {
            return {
                value1: true,
                value2: true
            }
        },
        ready () {
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
