<style scoped lang="less">
    @import '../less/index.less';
</style>
<template>
    <section id="index">
        <bangumi v-for="item in bangumiData"
                 :info=item
        ></bangumi>
    </section>
</template>
<script>
    import bangumi from '../components/bangumi';
    export default {
        components: {
            bangumi
        },
        data () {
            return {
                bangumiData: [
                    {
                        'name': '伪恋',
                        'cover': 'http://i0.hdslb.com/320_200/video/d0/d0b5808d7e4f16c00f93b8fc5153dabe.jpg',
                        'videoSrc': ''
                    },
                    {
                        'name': '白箱',
                        'cover': 'http://i2.hdslb.com/320_200/video/dc/dcd38eac6fb993d02d2b7453c224eec7.jpg',
                        'videoSrc': ''
                    },
                    {
                        'name': '我的青春恋爱物语一定有问题',
                        'cover': 'http://i0.hdslb.com/320_200/video/69/6948d3ac5b41cd4292532c3af1178656.jpg',
                        'videoSrc': ''
                    },
                    {
                        'name': '希德尼娅的骑士',
                        'cover': 'http://i2.hdslb.com/320_200/video/a4/a4ff34b87a8e71409d69dcac35994044.jpg',
                        'videoSrc': ''
                    },
                    {
                        'name': '噬神者',
                        'cover': 'http://i0.hdslb.com/bfs/archive/7cfcdcb922d430bc5e399f59437cf5a925347e6f.jpg_320x200.jpg',
                        'videoSrc': ''
                    },
                    {
                        'name': '战场女武神',
                        'cover': 'http://i0.hdslb.com/320_200/video/54/54a9bb84e872d5fe7b5a317852506981.jpg',
                        'videoSrc': '',
                    }
                ]
            }
        },
        ready () {

        },
        methods: {
        }
    }
</script>
