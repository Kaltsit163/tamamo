<style scoped lang="less">
#img {
  width: 200px;
  height: 200px;
}
</style>
<template>
  <section class="upload_wrap">
    <input id="ipt" type="file" @change="initInput">
    <input type="text" v-model="text">
    <canvas width="300" height="300" id="text"></canvas>
  </section>
</template>
<script>
export default {
  data() {
    return {
      text: ""
    }
  },
  mounted() {
    this.saveCanvas();
    this.rotateCanvas();
  },
  methods: {
    initInput() {
      let _this = this;
      const [preview, file, reader] = [document.querySelector("#img"), document.querySelector("#ipt").files[0], new FileReader()];
      reader.addEventListener("load", function () {
        _this.initCanvas(reader.result);
      }, false);
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    initCanvas(url) {
      let _this = this;
      const canvas = document.createElement("canvas");
      const img = new Image();
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        canvas.width = "200";
        canvas.height = "200";
        ctx.fillRect(0, 0, "200", "200");
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        img.crossOrigin = "anonymous";
        img.src = url;
        img.addEventListener("load", () => {
          ctx.drawImage(img, 0, 0, 200, 200);
          ctx.font = "50px";
          ctx.fillText("米特奥拉", 10, 100)
        });
        document.querySelector(".upload_wrap").appendChild(canvas);
      } else {
        console.warn("老铁！你的浏览器不支持canvas");
      }
    },
    saveCanvas() {
      let canvas = document.createElement('canvas');
      canvas.height = 150;
      canvas.width = 150;
      canvas.fillStyle = "#fff";
      let ctx = canvas.getContext('2d');
      ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
      ctx.save();                  // 保存默认状态
      ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
      ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
      ctx.save();                  // 保存当前状态
      ctx.fillStyle = '#FFF'       // 再次改变颜色配置
      ctx.globalAlpha = 0.5;
      ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形
      ctx.restore();               // 重新加载之前的颜色状态
      ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形
      ctx.restore();               // 加载默认颜色配置
      ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
      document.querySelector(".upload_wrap").appendChild(canvas);
    },
    rotateCanvas() {
      function draw() {
        let canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');
        ctx.fillRect(0, 0, 300, 300);
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            ctx.save();
            ctx.strokeStyle = "#9CFF00";
            ctx.translate(50 + j * 100, 50 + i * 100);
            drawSpirograph(ctx, 20 * (j + 2) / (j + 1), -8 * (i + 3) / (i + 1), 10);
            ctx.restore();
          }
        }
        document.querySelector(".upload_wrap").appendChild(canvas);
      }
      function drawSpirograph(ctx, R, r, O) {
        var x1 = R - O;
        var y1 = 0;
        var i = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        do {
          if (i > 20000) break;
          var x2 = (R + r) * Math.cos(i * Math.PI / 72) - (r + O) * Math.cos(((R + r) / r) * (i * Math.PI / 72))
          var y2 = (R + r) * Math.sin(i * Math.PI / 72) - (r + O) * Math.sin(((R + r) / r) * (i * Math.PI / 72))
          ctx.lineTo(x2, y2);
          x1 = x2;
          y1 = y2;
          i++;
        } while (x2 != R - O && y2 != 0);
        ctx.stroke();
      }
      draw();
    }
  },
  watch: {
    'text':function (newV, oldV) {
      let canvas = document.querySelector("#text");
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0,0, 500, 500);
      ctx.font = "20px";
      ctx.fillText(newV, 10, 100)
    }
  }
}
</script>
