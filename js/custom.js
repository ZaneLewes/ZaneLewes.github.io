/* 轮播背景图片 */

$(function () {
	$.backstretch([
		"https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202211042110890.png",
		"https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202211042120208.png",
		"https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202211042142032.png",
		"https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202211042200996.png",
		"https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202211042256743.png"
	], { duration: 10000, fade: 1500 });
});



/* 鼠标点击文字特效 */
var a_idx = 0;
var a_click = 1;
var a = new Array("GOOD GOOD STUDY","DAY DAY UP","w(·Д·)w", "(#`O′)", "（/TДT)/", "┭┮﹏┭┮", "_(:3」∠)_");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
		/* 点击频率，点击几次就换文字 */
		var frequency = 2;
		if (a_click % frequency === 0) {
			
			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
			y = e.pageY;
			$i.css({
				"z-index": 9999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": randomColor(),
				"-webkit-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});
			
		}
	a_click ++;
		
    });
});
