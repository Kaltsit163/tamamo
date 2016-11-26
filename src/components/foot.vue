<style scoped lang="less">
    @import '../less/foot.less';
</style>
<template>
    <section id="footer">
        <router-link :to="{ name: 'index'}">
            <section :class="['foot-item']">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tubichongzhi-bian"></use>
                </svg>
            </section>
        </router-link>
        <router-link :to="{ name: 'video'}">
            <section :class="['foot-item']">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shipin"></use>
                </svg>
            </section>
        </router-link>
        <router-link :to="{ name: 'cos'}">
            <section :class="['foot-item']">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wenzhang"></use>
                </svg>
            </section>
        </router-link>
        <router-link :to="{ name: 'center'}">
            <section :class="['foot-item']">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gerenzhongxin"></use>
                </svg>
            </section>
        </router-link>
    </section>
</template>
<script>
    export default {
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
