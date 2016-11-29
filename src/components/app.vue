<style scoped>
    @import '../styles/common.css';
</style>
<template>
    <div>
        <router-view></router-view>
        <el-foot></el-foot>
        <el-loading></el-loading>
        <el-meter></el-meter>
    </div>
</template>
<script>
    import elFoot from '../components/foot';
    import elLoading from '../components/loading';
    import elMeter from '../components/meter';
    import store from '../vuex/store.js';
    export default {
        name: 'tamamo',
        store,
        components: {
            elFoot, elLoading, elMeter
        },
        data () {
            return {
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
