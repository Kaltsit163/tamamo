<style scoped lang="less">
  @import '../less/canvas.less';
</style>
<template>
  <section class="canvas-content">
    <canvas class="tamamo-canvas" width="800" height="600"></canvas>
  </section>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    let requestId = null;
    class Ball {
      constructor(radius = 40, color = '#fff') {
        this.x = 0
        this.y = 0
        this.vx = 0
        this.vy = 0
        this.radius = radius
        this.rotation = 0
        this.mass = 1
        this.scaleX = 1
        this.scaleY = 1
        this.name = ''
        this.color = _parseColor(color)
        this.lineWidth = 1
      }
      draw(ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.scale(this.scaleX, this.scaleY)
        ctx.lineWidth = this.lineWidth
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.color
        ctx.beginPath()
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()
      }
      getBounds() {
        return {
          x: this.x - this.radius,
          y: this.y - this.radius,
          width: this.radius * 2,
          height: this.radius * 2
        }
      }
    }
    const canvas = document.querySelector('.tamamo-canvas');
    const ctx = canvas.getContext('2d'),
        width = canvas.style.width,
        height = canvas.style.height,
        numParticles = parseInt(width * height / 12000), // 微粒个数
        minDist = 150, // 最少尘埃数目
        springAmount = 0.0001
    let particles = [];

      for (let i = 0; i < numParticles; i++) {
          let ball = new Ball(Math.random() * 5, '#ebebeb');
            ball.x = Math.random() * width
            ball.y = Math.random() * height
            ball.vx = Math.random() * 6 - 3
            ball.vy = Math.random() * 6 - 3
          particles.push(ball) // 在将所有微粒都new出来之后放入离子堆
      }

      function gravaite(ballA, ballB) {
          let dx = ballB.x - ballA.x,
              dy = ballB.y - ballA.y,
              dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < minDist) {
              ctx.save()
              ctx.strokeStyle = 'rgba(242, 242, 242, .3)'
              ctx.beginPath()
              ctx.moveTo(ballA.x, ballA.y)
              ctx.lineTo(ballB.x, ballB.y)
              ctx.closePath()
              ctx.stroke()
              ctx.restore()

              let ax = dx * springAmount,
                  ay = dy * springAmount
              ballA.vx += ax
              ballA.vy += ay
              ballB.vx -= ax
              ballB.vy -= ay
          }
      }

      function move(ball, i) {
          ball.x += ball.vx
          ball.y += ball.vy
          if (ball.x > width) {
              ball.x = 0
          } else if (ball.x < 0) {
              ball.x = width
          }

          if (ball.y > height) {
              ball.y = 0
          } else if (ball.y < 0) {
              ball.y = height
          }

          for (let j = i + 1; j < numParticles; j++) {
              gravaite(ball, particles[j])
          }
      }

      function draw(ball) {
          ball.draw(ctx)
      }

      function drawFrame() {
          requestId = window.requestAnimationFrame(drawFrame, canvas)
          ctx.clearRect(0, 0, width, height)

          particles.forEach(move)
          particles.forEach(draw)
      }
      drawFrame();
  },
  methods: {
  }
}
</script>