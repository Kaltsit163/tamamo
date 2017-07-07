<style scoped lang="less">
	@import '../less/scroll.less';
</style>
<template>
	<section class="wrap">
    <nav>
      <span @click="index = 0">Tab1</span>
      <span @click="index = 1">Tab2</span>
    </nav>
		<ul class="content" 
        :style="{
          'width': `${100 * 2}%`,
          'transform': `translateX(${index * -50}%)`
        }">
			<li>
				<div class="cube">1</div>
        <div class="cube">2</div>
        <div class="cube">3</div>
        <div class="cube">4</div>
        <div class="cube">5</div>
        <div class="cube">6</div>
        <div class="cube">7</div>
        <div class="cube">8</div>
        <div class="cube">9</div>
        <div class="cube">10</div>
			</li>
			<li class="two">
				<div class="cube">1</div>
        <div class="cube">2</div>
        <div class="cube">3</div>
        <div class="cube">4</div>
        <div class="cube">5</div>
        <div class="cube">6</div>
        <div class="cube">7</div>
        <div class="cube">8</div>
        <div class="cube">9</div>
        <div class="cube">10</div>
			</li>
		</ul>
	</section>
</template>
<script>
	export default {
		data () {
			return {
        index: 0
			}
		},
		mounted () {

		},
		methods: {
		}
	}
</script>