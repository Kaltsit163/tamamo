<style scoped>
	@import '../styles/common.css';
</style>
<template>
	<div>
		<router-view></router-view>
		<el-foot></el-foot>
		<!--<el-back-top></el-back-top>-->
		<el-cube-loading></el-cube-loading>
	</div>
</template>
<script>
	import elFoot from '../components/foot';
	import elCubeLoading from '../components/cube-loading';
	import elBackTop from '../components/backTop';
	import store from '../vuex/store.js';
	export default {
		name: 'tamamo',
		store,
		components: {
			elFoot, elCubeLoading, elBackTop
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
