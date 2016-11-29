<style scoped lang="less">
    @import '../less/meter.less';
</style>
<template>
    <section id='meter'>{{count}}</section>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        data () {
            return {}
        },
        ready () {
        },
        methods: {
        },
        computed: {
            ...mapGetters({
                count: 'GET_COUNT'
            })
        }
    }
</script>
