<style scoped lang="less">
    @import '../less/cos.less';
</style>
<template>
    <section class="cos">
        <h1>COS</h1>
        <p>{{timeValue}}</p>
        <img src="../images/cos.jpg">
    </section>
</template>
<script>
    import { getTime } from '../vuex/getters.js';
    export default {
        data () {
            return {
            }
        },
        vuex: {
            getters: {
            // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
                timeValue: getTime
            }
        },
        ready () {

        },
        methods: {
        }
    }
</script>
