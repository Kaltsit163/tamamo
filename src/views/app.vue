<style scoped>
	@import '../styles/common.css';
</style>
<template>
	<div>
		<el-menu></el-menu>
		<router-view></router-view>
		<el-back-top></el-back-top>
		<el-ball-loading></el-ball-loading>
	</div>
</template>
<script>
	import elBackTop from 'components/back-top.vue';
	import elBallLoading from 'components/ball-loading.vue';
	import elMenu from 'components/menu.vue';
	import store from '../vuex/store.js';
	export default {
		name: 'tamamo',
		store,
		components: {
			elBackTop, elBallLoading, elMenu
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
