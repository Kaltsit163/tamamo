<style scoped>
.router-loading {
    width:100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    background: #ede9de;
    transition: 10s;
}

.container {
	height: 150px;
	left: 50%;
	margin: -75px 0 0 -53px;
	position: absolute;
	top: 50%;
	width: 106px;
  text-align:center;
}


.cord{
  padding-top:100px;
  width:15px;
  transform: rotate(0deg);
  transform-origin:50% 50%;
  float:left;
}


.ball{
  background:#333;
  width:15px;
  height:15px;
  float:left;
  border-radius:50%;
}

.shadows{
  clear:left;
  padding-top:20px;
  margin-left:-2px;
}

.shadows div{
  float:left;
  margin-left: 2px;
  width:13px;
  height:3px;
  border-radius:50%;
  box-shadow: 0px 0px 3px rgba(204, 204, 204, 0.3);
  background: rgba(204, 204, 204, 0.3);
}

.leftMove{
  animation: leftBall .5s ease-in-out 0s infinite alternate;
}
.rightMove{
  animation: rightBall .5s ease-in-out 0s infinite alternate;
}


.leftShadow{
  animation: leftShadowN .5s ease-in-out 0s infinite alternate;
}
.rightShadow{
  animation: rightShadowN .5s ease-in-out 0s infinite alternate;
}


@keyframes leftBall
{
0% {
  transform: rotate(0deg) translateY(0px);
  }
/*this pauses the ball at the begining*/
50% {
  transform: rotate(0deg) translateY(0px);
  }
100% {
  transform: rotate(50deg) translateY(-20px);
  }

}

@keyframes rightBall
{
0% {
  transform: rotate(-50deg) translateY(-20px);
  }
/*this pauses the ball at the begining*/
50% {
  transform: rotate(0deg) translateY(0px);
  }
100% {
  transform: rotate(0deg) translateY(0px)
      translateX(0px);
  }

}

@keyframes leftShadowN
{
0% {
transform: translateX(0px);


  }
/*this pauses the ball at the begining*/
50% {
  transform: translateX(0px);

  }

100% {

transform: translateX(-25px);
  }

}

@keyframes rightShadowN
{
0% {
  transform: translateX(25px);
  }
/*this pauses the ball at the begining*/
50% {
  transform: translateY(0px);

  }

100% {
  transform: translateY(0px);

  }

}


/*colors*/

.cord:nth-of-type(1) .ball{
  background:#335672;
}
.cord:nth-of-type(2) .ball{
  background:#35506b;
}
.cord:nth-of-type(3) .ball{
  background:#5f4e60;
}
.cord:nth-of-type(4) .ball{
  background:#924a4e;
}
.cord:nth-of-type(5) .ball{
  background:#a73a33;
}
.cord:nth-of-type(6) .ball{
  background:#cf4231;
}
.cord:nth-of-type(7) .ball{
  background:#df3e2a;
}

</style>
<template>
  <div class="router-loading" v-show="routerShow">
      <div class="container">
          <div class="cord leftMove">
              <div class="ball"></div>
          </div>
          <div class="cord">
              <div class="ball"></div>
          </div>
          <div class="cord">
              <div class="ball"></div>
          </div>
          <div class="cord">
              <div class="ball"></div>
          </div>
          <div class="cord">
              <div class="ball"></div>
          </div>
          <div class="cord">
              <div class="ball"></div>
          </div>
          <div class="cord rightMove">
              <div class="ball" id="first"></div>
          </div>
          <div class="shadows">
              <div class="leftShadow"></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div class="rightShadow"></div>
          </div>
      </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
              routerShow: true
            }
        },
        created () {
          let _this = this;
          setTimeout( ()=> {
            _this.routerShow = false;
          }, 1000)
        }
    }
</script>
