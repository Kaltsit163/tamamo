<style scoped lang="less">
    @import '../less/bangumi.less';
</style>
<template>
    <section class="bangumi-wrap" @click="goDetail()">
        <img class="bangumi-cover" :src="info.cover">
        <p class="bangumi-name">{{info.name}}</p>
    </section>
</template>
<script>
    export default {
        props: {
            info: {}
        },
        data () {
            return {}
        },
        ready () {

        },
        methods: {
            goDetail: function (videoSrc) {
                this.$router.push({
                    name: 'video',
                    query: {
                        videoSrc: this.info.videoSrc,
                        cover: this.info.cover,
                        name: this.info.name
                    }
                })
            }
        }
    }
</script>