var index = 1;
var startpos={x:0,y:0};
var endpos={x:0,y:0};

window.onload = function(){
	var audiobox = document.getElementById("audiobox");
	var audio = document.getElementById("audio");
	var body = document.getElementsByTagName("body")[0];

	// control audio play or pause
	audiobox.addEventListener("touchstart",function(){
		// check the audio play state
		if(audio.paused){
			// audio play
			audio.play();

			//audiobox begin rotate
			audiobox.classList.add("audiorotate");
		}else{
			// audio pause
			audio.pause();

			//audiobox stop rotate
			audiobox.classList.remove("audiorotate");
		}
	},false);	// stop propogation

	page1.addEventListener("touchstart",function(event){
		var mt = event.changedTouches[0];
		startpos.x = mt.pageX;
		startpos.y = mt.pageY;
	},false);
	page1.addEventListener("touchend",function(event){
		var mt = event.changedTouches[0];
		endpos.x = mt.pageX;
		endpos.y = mt.pageY;
		var currentPage = document.getElementById("page"+index);

		if(endpos.y-startpos.y>0){
			// move up
			// index--;
			// var targetPage = document.getElementById("page"+index);
			// moveup(currentPage,targetPage);
		}else if(endpos.y-startpos.y<0){
			//move down
			index++;
			var targetPage = document.getElementById("page"+index);
			movedown(currentPage,targetPage);
		}
	},false);
	page1.addEventListener("touchstart",function(event){
		var mt = event.changedTouches[0];
		startpos.x = mt.pageX;
		startpos.y = mt.pageY;
	},false);
	page2.addEventListener("touchend",function(event){
		var mt = event.changedTouches[0];
		endpos.x = mt.pageX;
		endpos.y = mt.pageY;
		var currentPage = document.getElementById("page"+index);

		if(endpos.y-startpos.y>0){
			// move up
			index=1;
			var targetPage = document.getElementById("page"+index);
			moveup(currentPage,targetPage);
		}else if(endpos.y-startpos.y<0){
			//move down
			// index++;
			// var targetPage = document.getElementById("page"+index);
			// movedown(currentPage,targetPage);
		}
	},false);
}

function moveup(currentPage,targetPage){
	currentPage.style.top = "100%";
	currentPage.style.transition = "top 1s ease-in";
	targetPage.style.top = "0";
	targetPage.style.transition = "top 1s ease-in";
}

function movedown(currentPage,targetPage){
	targetPage.style.display = "block";
	currentPage.style.top = "-100%";
	currentPage.style.transition = "top 1s ease-in";
	targetPage.style.top = "-100%";
	targetPage.style.transition = "top 1s ease-in";
}