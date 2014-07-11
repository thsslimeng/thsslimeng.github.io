$(document).ready(function(){
	var url = '/image.json';

	function processData(data){
		var nlength = data["slide-item"].length;

		var i = 0;
		//添加图片
		for(i = 0; i<nlength; i++){
			$(".slide-item a").eq(i).attr("href", data["slide-item"][i]["href"]);
			$(".slide-item a img").eq(i).attr("src", data["slide-item"][i]["src"]);
			$(".image-info").eq(i).text(data["slide-item"][i]["image-info"]);
		}
	};

	function handler(){
		if (this.readyState == this.DONE) {
	      if (this.status == 200) {
	        try {
	          processData(JSON.parse(this.responseText));
	        	} catch(ex) {
	          console.log(ex.message);
	        	}	
	      }
	    }
	};

	var client = new XMLHttpRequest();
	client.onreadystatechange = handler;
	client.open('GET', url, true);
	client.send();
});