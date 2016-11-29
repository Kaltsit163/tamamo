<style scoped lang="less">
    @import '../less/index.less';
</style>
<template>
    <section id="index">
        <p>index</p>
        <button class="add" @click="add()">add</button>
        <p>发送到个人中心的是{{iptData}}</p>
        <input class="ipt" v-model="iptData">
        <button @click="push()">点我发送</button>
    </section>
</template>
<script>
    export default {
        data () {
            return {
                iptData: ''
            }
        },
        ready () {

        },
        methods: {
            add: function () {
                this.$store.dispatch('ADD_COUNT', 1)
            },
            push: function () {
                this.$store.dispatch('ADD_ITEM', this.iptData)
            }
        }
    }
</script>
