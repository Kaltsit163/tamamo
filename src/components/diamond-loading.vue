<style scoped>
.router-loading {
    width:100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    background: #1C78C5;
}
#loader {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column nowrap;
      flex-flow: column nowrap;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
#loader .diamond {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  border-radius: 2px;
  background: #fff;
  -webkit-transform: translateY(0) rotate(45deg) scale(0);
          transform: translateY(0) rotate(45deg) scale(0);
  -webkit-animation: diamonds 1500ms linear infinite;
          animation: diamonds 1500ms linear infinite;
}
#loader .diamond:nth-child(1) {
  -webkit-animation-delay: -1000ms;
          animation-delay: -1000ms;
}
#loader .diamond:nth-child(2) {
  -webkit-animation-delay: -2000ms;
          animation-delay: -2000ms;
}
#loader .diamond:nth-child(3) {
  -webkit-animation-delay: -3000ms;
          animation-delay: -3000ms;
}
#loader .diamond:nth-child(4) {
  -webkit-animation-delay: -4000ms;
          animation-delay: -4000ms;
}

@-webkit-keyframes diamonds {
  50% {
    -webkit-transform: translateY(-50px) rotate(45deg) scale(1);
            transform: translateY(-50px) rotate(45deg) scale(1);
  }
  100% {
    -webkit-transform: translateY(-100px) rotate(45deg) scale(0);
            transform: translateY(-100px) rotate(45deg) scale(0);
  }
}

@keyframes diamonds {
  50% {
    -webkit-transform: translateY(-50px) rotate(45deg) scale(1);
            transform: translateY(-50px) rotate(45deg) scale(1);
  }
  100% {
    -webkit-transform: translateY(-100px) rotate(45deg) scale(0);
            transform: translateY(-100px) rotate(45deg) scale(0);
  }
}

</style>
<template>
    <div id="router-loading">
        <div class='diamond'></div>
        <div class='diamond'></div>
        <div class='diamond'></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>
