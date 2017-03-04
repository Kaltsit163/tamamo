<style scoped lang="less">
		
</style>
<template>
		<img class="mergeImg">
</template>
<script>
	export default {
		props: {
		},
		data () {
				return {}
		},
		mounted () {
			this.mergeImg(
				"http://olkcsv4ba.bkt.clouddn.com/prod.png", "//img.alicdn.com/tfscom/TB1vwrfMVXXXXcOaXXXXXXXXXXX_!!0-item_pic.jpg",
				500, 100, 100, 100, ".mergeImg");
		},
		methods: {
			mergeImg (bgUrl, qrUrl, bgSize, qrSize, qrX, qrY, target) {
				if (arguments.length !== 7) { 
					console.warn("老铁！有7个参数");
  				return; 
  			}; 
  			const canvas = document.createElement("canvas");
  			if (canvas.getContext) {
  				canvas.width = bgSize;
  				canvas.height = bgSize;
    			let ctx = canvas.getContext('2d');
    					ctx.fillRect(0 ,0, bgSize, bgSize);
    					ctx.fillStyle='transparent';
    					ctx.fill();
    			let bgImg = new Image();
    					bgImg.crossOrigin = "anonymous";
    					bgImg.src = bgUrl;
    					bgImg.addEventListener("load", ()=> {
      					ctx.drawImage(bgImg, 0, 0, bgSize, bgSize);
      					let qrImg = new Image();
      							qrImg.crossOrigin = "anonymous";
      							qrImg.src = qrUrl;   
      							qrImg.addEventListener("load", ()=> {
        							ctx.drawImage(qr, qrX, qrY, qrSize, qrSize);
        							document.querySelector(target).src = canvas.toDataURL("image/png");
      							});
    					});	
  			};
			}
		}
	}
</script>