<style scoped lang="less">
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        margin-top: 50px;
        img{
            width: 150px;
        }
    }
</style>
<template>
    <h2>
        <img src="../images/tamamo.jpg">
    </h2>
    <h2 v-time></h2>
    <p @click="console()">1</p>
</template>
<script>
    import NumberSeparator from '../filters/number-separator';
    import Time from '../directives/time';

    export default {
        directives: {
            time: Time
        },
        data () {
            return {

            }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
            console () {
                console.log(2);
            }
        }
    }
</script>
