<style scoped>
    @import '../styles/common.css';
</style>
<template>
    <div>
        <router-view></router-view>
        <el-foot></el-foot>
        <el-loading></el-loading>
    </div>
</template>
<script>
    import elFoot from '../components/foot';
    import elLoading from '../components/loading';
    import store from '../vuex/store.js';
    export default {
        components: {
            elFoot, elLoading
        },
        store: store,
        data () {
            return {}
        },
        ready () {
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
