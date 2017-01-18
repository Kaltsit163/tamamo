<style scoped>
	@import '../styles/common.css';
</style>
<template>
	<div>
		<router-view></router-view>
		<el-back-top></el-back-top>
	</div>
</template>
<script>
	import elBackTop from '../components/backTop';
	import store from '../vuex/store.js';
	export default {
		name: 'tamamo',
		store,
		components: {
			elBackTop
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
