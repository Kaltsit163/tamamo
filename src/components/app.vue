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
    export default {
        components: {
            elFoot, elLoading
        },
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
