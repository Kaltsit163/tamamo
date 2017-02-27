<style scoped lang="less">
  .tamamo-menu {
    font-family: "Kaushan Script";
  }
  .menu-head {
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    background:#ede9de;
    color: #000;
    text-align: center;
    align-items: center;
    border-bottom: 1px dotted #000;
    .flex-1 {
      flex: 1;
    }
    .flex-2 {
      flex: 2;
    }
    .flex-3 {
      flex: 3;
    }
    .menu-desc {
      font-size: 0.6rem;
    }
    .icon {
      font-size: 1rem;
    }
    .icon-more {
      animation: 1s up-down infinite;
      position: relative;
      font-size: 0.1rem;
    }
    @keyframes up-down {
      0% {
        bottom: 0;
      }
      50% {
        bottom: -0.1rem;
      }
      100% {
        bottom: 0;
      }
    }
  }
  .nav-list {
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: 0.5s slide-down ease-out;
    > li {
      position: relative;
      color: rgba(231,101,65,1);
      line-height: 1.8rem;
      font-size: 0.6rem;
    }
    .js {
        animation-duration: 0.7s;
      }
    .css {
        animation-duration: 0.8s;
      }
    .other {
        animation-duration: 0.9s;
      }
    @keyframes slide-down {
      0% {
        height: 0;
      }
      100% {
        height: 5.4rem;
      }
    }
  }
</style>
<template>
  <section class="tamamo-menu">
    <section class="menu-head">
      <section class="flex-1" @click="toggleInfo()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-huli"></use>
        </svg>
			</section>
      <section class="flex-3" @click="toggleNav()">
        <p class="menu-desc">See More Tamamo</p>
        <svg class="icon icon-more" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
			</section>
			<section class="flex-1">
        <svg v-if="isNight" class="icon" aria-hidden="true">
          <use xlink:href="#icon-night"></use>
        </svg>
        <svg v-if="!isNight" class="icon" aria-hidden="true">
          <use xlink:href="#icon-sun"></use>
        </svg>
			</section>
    </section>
    <ul v-show="navShow" class="nav-list" >
      <li class="animated bounceInLeft js">JavaScript</li>
      <li class="animated bounceInLeft css">CSS</li>
      <li class="animated bounceInLeft other">Other</li>
    </ul>
    <section v-show="infoShow" class="menu-aside" >
      <ul class="info-list"></ul>
    </section>
  </section>
</template>
<script>
export default {
  name: "menu",  
  data() {
    return {
      navShow: false,
      infoShow: false
    };
  },
  methods: {
    toggleInfo () {
      this.infoShow = !this.infoShow;
    },
    toggleNav () {
      this.navShow = !this.navShow;
    }
  },
  mounted() {

  },
  computed: {
    "isNight": function () {
      const time = new Date;
      const isNight = time.getHours() > 20 || time.getHours() < 6;
      return isNight;
    }
  } 
};
</script>