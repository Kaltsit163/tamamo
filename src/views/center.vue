<style scoped lang="less">
    @import '../less/center.less';
</style>
<template>
    <section class="center">
        <h1>Center</h1>
        <li v-for="(item, index) in pushData" @click="console(index)">{{item}}</li>
    </section>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        data () {
            return {
            }
        },
        ready () {
        },
        methods: {
            console: function (index) {
                console.log(index)
            }
        },
        computed: {
            ...mapGetters({
                pushData: 'GET_ITEM'
            })
        }
    }
</script>
