<style scoped lang="less">
    @import '../less/backTop.less';
</style>
<template>
  <section :class="['go-top', {'back-top-show': topShow}]" @click="backTop">
  	<svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-top"></use>
    </svg>
  </section>
</template>
<script>
export default {
  data() {
    return {
      topShow: false,
      speed: 0
    };
  },
  methods: {
    backTop() {
      let that = this;
      that.speed = (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) / 10;
      window.requestAnimationFrame(this.stepBack);
    },
    stepBack() {
      let that = this;
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      scrollTop -= that.speed;
      window.scrollTo(0, scrollTop);
      if (scrollTop > 0) {
        window.requestAnimationFrame(this.stepBack);
      }
    }
  },
  mounted() {
    let that = this;
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      let lenWin = window.screen.height;
      if (scrollTop >= lenWin * 0.5) {
        that.topShow = true;
      } else {
        that.topShow = false;
      }
      return;
    };
  }
};
</script>