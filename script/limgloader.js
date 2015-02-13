//Nguyen Thanh Liem - Ringier - 22 - 10 - 2012
function limgloader(){
	limg = this;
	this.loaded = null;
	var countImg = 0;
	var listImgLoaded;
	var listImgsLoad = 0;
	var countErr = 0;
	var listImgsReturn;
	this.loadImg = function(listImg){
		var img;
		listImgsLoad = listImg.length;
		if(listImgsLoad==0) return;
		for(var i = 0; i <listImg.length;i++){
			img = new Image();
			img.src = "images/" + listImg[i];
			img.onload = imgComplete;	
			img.onerror = imgError;
		}
	}
	
	function imgComplete(){
		countImg++;
		if(countImg == listImgsLoad) {
			limg.loaded();
		}
	}
	
	function imgError(){
		countErr++;
		console.log("Total Errors: " + countErr);
	}
	
	
}