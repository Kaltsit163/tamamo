<style scoped lang="less">
    @import '../less/cos.less';
</style>
<template>
    <section class="cos">
        <h1>{{currentTime}}</h1>
        <img src="../images/cos.jpg">
    </section>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        vuex : {
            getters: {
                time: state => state.time
            }
        },
        ready () {

        },
        methods: {
        },
        computed: {
            timeVuex () {
                return store.state.time;
            }
        }
    }
</script>
