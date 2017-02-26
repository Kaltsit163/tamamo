<style scoped lang="less">
  .go-top {
    opacity: 0;
    font-size: 0.5rem;
    color: #fff;
    position: fixed;
    text-align: center;
    z-index: 99;
    right: 0.5rem;
    bottom: -1.3rem;
    width: 1.3rem;
    height: 1.3rem;
    line-height: 1.3rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
  }
  .back-top-show {
    bottom: 1.3rem;
    right: 0.5rem;
    opacity: 1;
      transition: 0.3s;
  }
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