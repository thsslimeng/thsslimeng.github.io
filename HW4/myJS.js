// JavaScript Document
var current = 0;

$(document).ready(function(){
	//前进后退键出现条件：
	$(".scroll").mouseover(function(){
		$(".arr-left").show();
		$(".arr-right").show();
	});
	$(".scroll").mouseout(function(){
		$(".arr-left").hide();
		$(".arr-right").hide();
	});
	
	//前进后退的具体实现：
	var images = [
	"images/U9982P1505T2D2F62DT20140709071736.jpg",
	"images/U10709P1505T2D2F58DT20140709102650.jpg",
	"images/U10709P1505T2D2F46DT20140709100616.jpg",
];
	
	
	var itemWidth = 1000;
	var slideItems = $(".slide-item");
	var slideGroup = $(".slide-group");
	slideGroup.attr("width", itemWidth*slideItems.length + "px");
	
	//小点初始化
	$(".num-slide-item").children("span").eq(current).attr("class", "sin");
	
	function moveRight(){
		var temp_left = Number(slideGroup.css("left").replace(/px/,""));
		if(current<slideItems.length-1){
			slideGroup.animate({left:temp_left-itemWidth+'px'}, 500);
			$(".num-slide-item").children("span").eq(current).attr("class", "sout");
			current++;
			$(".num-slide-item").children("span").eq(current).attr("class", "sin");
			return false;
		}
		if(current==slideItems.length-1){
			slideGroup.animate({left:'0px'}, 500);
			$(".num-slide-item").children("span").eq(current).attr("class", "sout");
			current=0;
			$(".num-slide-item").children("span").eq(current).attr("class", "sin");
		}
		return false;
	};

	function moveLeft(){
		var temp_left = Number(slideGroup.css("left").replace(/px/,""));
		if(current>0){
			slideGroup.animate({left:temp_left+itemWidth+'px'}, 500);
			$(".num-slide-item").children("span").eq(current).attr("class", "sout");
			current--;
			$(".num-slide-item").children("span").eq(current).attr("class", "sin");
			return false;
		}
		if(current==0){
			slideGroup.animate({left:-itemWidth*(slideItems.length-1)+'px'}, 500);
			$(".num-slide-item").children("span").eq(current).attr("class", "sout");
			current=slideItems.length-1;
			$(".num-slide-item").children("span").eq(current).attr("class", "sin");
		}
		return false;
	};
	
	//前进后退按钮
	$(".arr-left").click(function(){
		moveLeft();
	});
	$(".arr-right").click(function(){
		moveRight();
	});
	
	//通过小圆点控制图片
	var k = new Array();
	function moveCurrentTo(value){
		var tempNum = value - current;
		if(tempNum!=0){
			var xtemp_left = Number(slideGroup.css("left").replace(/px/,""));
			slideGroup.animate({left:xtemp_left-itemWidth*tempNum+'px'}, 500);
			$(".num-slide-item").children("span").eq(current).attr("class", "sout");
			current = current+tempNum;
			$(".num-slide-item").children("span").eq(current).attr("class", "sin");
			return false;
		}
		return false;
	};
	
	for(n = 0; n<$(".num-slide-item").children("span").length; n++){
		$(".num-slide-item").children("span").eq(n).attr("id", n);
		$(".num-slide-item").children("span").eq(n).click(function(){
			moveCurrentTo(Number(this.id));
		});
	}

	
});

	var itemWidth = 1000;

	function moveRight(){
		var temp_left = Number($(".slide-group").css("left").replace(/px/,""));
		if(current<$(".slide-item").length-1){
			$(".slide-group").animate({left:temp_left-itemWidth+'px'}, 500);
			$(".num-slide-item").children("span").eq(current).attr("class", "sout");
			current++;
			$(".num-slide-item").children("span").eq(current).attr("class", "sin");
			return false;
		}
		if(current==$(".slide-item").length-1){
			$(".slide-group").animate({left:'0px'}, 500);
			$(".num-slide-item").children("span").eq(current).attr("class", "sout");
			current=0;
			$(".num-slide-item").children("span").eq(current).attr("class", "sin");
		}
		return false;
	};

	var t;
	function timedCount()
	{
	    moveRight();
	    t = setTimeout("timedCount()",5000);
	};
	t = setTimeout("timedCount()",5000);