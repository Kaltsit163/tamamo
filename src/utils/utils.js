/*
 * @Author: liuye
 * @Date: 2016-11-16 10:23:47
 * @Last Modified by: liuye
 */

export default {
    badApple() {
        let cv = document.getElementById('cv');
        let c = cv.getContext('2d');
        let txtDiv = document.getElementById('txt');
        let playBtn = document.getElementById("button");
        let audio = document.getElementById('audio');
        let img = new Image();
        let index = 1;
        let flag = false;
        img.src = 'images/badapple00000.jpg';
        img.onload = init; // 图片加载完开始转换

        playBtn.onclick = function() {
            if (!flag) {
                audio.play();
                play();
                flag = true;
                playBtn.value = '播放中...';
            }
        };

        // 播放动画
        function play() {
            if (index++ < 4380) {
                img.src = 'images/badapple0' + format(index, 4) + '.jpg';
                setTimeout(play, 50);
            } else {
                playBtn.value = '播放完成\n点击重放';
                flag = false;
                index = 1;
                audio.load();
                img.src = 'images/badapple00000.jpg';
            }
        }


        // 格式化
        function format(num, all) {
            var arr = num.toString().split('');
            for (var i = 0; arr.length < all; i++) {
                arr.unshift('0');
            }
            return arr.join('');

        }

        // 根据灰度生成相应字符
        function toText(g) {
            if (g <= 30) {
                return '#';
            } else if (g > 30 && g <= 60) {
                return '&';
            } else if (g > 60 && g <= 120) {
                return '$';
            } else if (g > 120 && g <= 150) {
                return '*';
            } else if (g > 150 && g <= 180) {
                return 'o';
            } else if (g > 180 && g <= 210) {
                return '!';
            } else if (g > 210 && g <= 240) {
                return ';';
            } else {
                return '.';
            }
        }


        // 根据rgb值计算灰度
        function getGray(r, g, b) {
            return 0.299 * r + 0.578 * g + 0.114 * b;
        }

        // 转换
        function init() {
            txtDiv.style.width = img.width + 'px';
            cv.width = img.width;
            cv.height = img.height;
            c.drawImage(img, 0, 0);
            let imgData = c.getImageData(0, 0, img.width, img.height);
            let imgDataArr = imgData.data;
            let imgDataWidth = imgData.width;
            let imgDataHeight = imgData.height;
            let html = '';
            for (h = 0; h < imgDataHeight; h += 12) {
                let p = '<p>';
                for (w = 0; w < imgDataWidth; w += 6) {
                    let index = (w + imgDataWidth * h) * 4;
                    let r = imgDataArr[index + 0];
                    let g = imgDataArr[index + 1];
                    let b = imgDataArr[index + 2];
                    let gray = getGray(r, g, b);
                    p += toText(gray);
                }
                p += '</p>';
                html += p;
            }
            txtDiv.innerHTML = html;
        }
    }
};