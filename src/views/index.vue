<style scoped lang="less">
	@import '../less/index.less';
</style>
<template>
	<section id="index">
		<button @click="add()">点我</button>
		<ul class="bangumis">
			<bangumi v-for="item in bangumiData" :info=item></bangumi>
		</ul>
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
				bangumiData: []
			}
		},
		mounted () {
			this.getData();
		},
		methods: {
			getData: function () {
				axios.get('http://ohjq9c9az.bkt.clouddn.com/list.json').then((res) => {
					if (res.data && res.status === 200) {
						this.bangumiData = res.data;
					}
				}).catch( (error)=> {
					console.log(error)
				})
			},
			add: function () {
				this.$store.dispatch('ADD_COUNT', 1)
			}
		}
	}
</script>