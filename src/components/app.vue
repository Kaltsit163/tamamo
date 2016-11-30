<style scoped>
	@import '../styles/common.css';
</style>
<template>
	<div>
		<router-view></router-view>
		<el-foot></el-foot>
		<el-loading></el-loading>
		<el-meter></el-meter>
		<el-back-top></el-back-top>
	</div>
</template>
<script>
	import elFoot from '../components/foot';
	import elLoading from '../components/loading';
	import elMeter from '../components/meter';
	import elBackTop from '../components/backTop';
	import store from '../vuex/store.js';
	export default {
		name: 'tamamo',
		store,
		components: {
			elFoot, elLoading, elMeter, elBackTop
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
