<style scoped lang="less">
    @import '../less/index.less';
</style>
<template>
    <section id="index">
        <p>index</p>
        <button class="add" @click="add()">add</button>
    </section>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        ready () {

        },
        methods: {
            add: function (argument) {
               this.$store.commit('addItem', 1)
            }
        }
    }
</script>
