<style scoped lang="less">
    @import '../less/center.less';
</style>
<template>
    <section class="center">
        <h1>Center</h1>
        <p @click='add'>+1s</p>
        <img src="../images/fate.jpg">
    </section>
</template>
<script>
    import { ADD_NUM } from '../vuex/actions.js'
    export default {
        data () {
            return {
            }
        },
        vuex: {
            actions: {
                add: ADD_NUM
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
