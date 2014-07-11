// JavaScript Document
//载入评论
$(document).ready(function(){
var url = './conmment.json';
var currentPage = 1;
var maxConmmentOnePage = 6;//每页最多评论条数
var rawData = new Object();
var temp = 0;//评论的页数
//选中结点载入评论
function processData(data, pageNum){
	var nlength = data["main-conmment"].length;
	$(".total-conmment").children("b").text(nlength);
	
	if(nlength%maxConmmentOnePage != 0){
		temp = nlength/maxConmmentOnePage + 1;
	}
	else{
		temp = nlength/maxConmmentOnePage;
	}
	$(".total-pages").children("b").text(temp);
	var i = 0;
	//添加一页中的评论
	for(i = 0; i<maxConmmentOnePage; i++){
		$(".user-image").children().eq(i).attr("src", data["main-conmment"][i+(maxConmmentOnePage*(pageNum-1))]["user-image"]);
		$(".user-name").children("a").eq(i).text(data["main-conmment"][i+(maxConmmentOnePage*(pageNum-1))]["user-name"]);
		$(".user-conmment").children("p").eq(i).text(data["main-conmment"][i+(maxConmmentOnePage*(pageNum-1))]["user-text"]["user-conmment"]);
		$(".panel").children("span").eq(i).text(data["main-conmment"][i+(maxConmmentOnePage*(pageNum-1))]["user-text"]["panel"]);
	}
};

function handler(){
	if (this.readyState == this.DONE) {
      if (this.status == 200) {
        try {
          processData(JSON.parse(this.responseText), currentPage);
        } catch(ex) {
          console.log(ex.message);
        }
      }
    }
};

function loadConmment(){
	var client = new XMLHttpRequest();
	client.onreadystatechange = handler;
	client.open('GET', url, true);
	client.send();
};

$("h2.loadConmment").click(function(){
	$(".current-page").children("b").text(currentPage);
	loadConmment();
});

//评论翻页
$(".first-page").click(function(){
	currentPage = 1;
	$(".current-page").children("b").text(currentPage);
	loadConmment();
});
$(".last-page").click(function(){
	currentPage = temp;
	$(".current-page").children("b").text(currentPage);
	loadConmment();
});
$(".front-page").click(function(){
	if(currentPage>1){
		currentPage--;
		$(".current-page").children("b").text(currentPage);
		loadConmment();
	}
});
$(".next-page").click(function(){
	if(currentPage < temp){
		currentPage++;
		$(".current-page").children("b").text(currentPage);
		loadConmment();
	}
});

});