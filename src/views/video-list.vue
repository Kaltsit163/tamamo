<style scoped lang="less">
	@import '../less/video.less';
</style>
<template>
	<section class="video">
		<h1>Video</h1>
		<bangumi v-for="item in bangumiData" :info=item></bangumi>
	</section>
</template>
<script>
	import { mapGetters } from 'vuex';
	import bangumi from '../components/bangumi';
	export default {
		components: {
			bangumi
		},
		data () {
			return {
			}
		},
		mounted () {
		},
		computed: {
      ...mapGetters({
      	bangumiData: 'GET_ITEM'
    	})
		}
	}
</script>