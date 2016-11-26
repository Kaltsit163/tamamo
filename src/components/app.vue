<style scoped>
    @import '../styles/common.css';
</style>
<template>
    <div>
        <router-view></router-view>
        <el-foot></el-foot>
    </div>
</template>
<script>
    import elFoot from '../components/foot';
    export default {
        components: {
            elFoot
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
