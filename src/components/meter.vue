<style scoped lang="less">
    @import '../less/meter.less';
</style>
<template>
    <section id='meter'>{{count}}</section>
</template>
<script>
    export default {
        data () {
            return {}
        },
        ready () {
        },
        methods: {
        },
        computed: {
            count: function () {
                return this.$store.state.count
            }
        }
    }
</script>
