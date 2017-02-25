<style scoped>
	@import '../styles/common.css';
</style>
<template>
	<div>
		<router-view></router-view>
		<el-back-top></el-back-top>
		<el-foot-nav></el-foot-nav>
		<el-ball-loading></el-ball-loading>
	</div>
</template>
<script>
	import elBackTop from 'components/backTop.vue';
	import elFootNav from 'components/foot.vue';
	import elBallLoading from 'components/ball-loading.vue';
	import store from '../vuex/store.js';
	export default {
		name: 'tamamo',
		store,
		components: {
			elBackTop, elFootNav, elBallLoading
		},
		data () {
			return {
			}
		},
		mounted () {
		},
		methods: {
		}
	}
</script>
