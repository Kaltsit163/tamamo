<style scoped>
	@import '../styles/common.css';
</style>
<template>
	<div>
		<router-view></router-view>
		<el-back-top></el-back-top>
		<el-foot-nav></el-foot-nav>
		<el-slice-loading></el-slice-loading>
	</div>
</template>
<script>
	import elBackTop from 'components/backTop.vue';
	import elFootNav from 'components/foot.vue';
	import elSliceLoading from 'components/slice-loading.vue';
	import store from '../vuex/store.js';
	export default {
		name: 'tamamo',
		store,
		components: {
			elBackTop, elFootNav, elSliceLoading
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
