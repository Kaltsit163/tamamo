<style scoped lang="less">
		@import '../less/bangumi.less';
</style>
<template>
		<section class="bangumi-wrap">
			<img class="bangumi-cover" :src="info.cover">
			<p class="bangumi-name">{{info.name}}</p>
			<span :class="['like-btn']" @click="pushToLike(info)"></span>
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
		mounted () {
		},
		methods: {
			pushToLike: function (info) {
				this.$store.dispatch('ADD_ITEM', info);
			}
		}
	}
</script>