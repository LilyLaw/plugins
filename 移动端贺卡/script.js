window.onload = function(){
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");


	audio.addEventListener("ended",function(){
		music.classList.remove("play");
		// music.animationPlayState = "paused";
		// music.webkitAnimationPlayState = "paused";
	},false)

	// music.onclick = function(){
	// 	if(audio.paused){
	// 		audio.play();
	// 		music.classList.add("play");
	// 		// this.style.animationPlayState = "running";
	// 		// this.style.webkitAnimationPlayState = "running";
	// 	}else{
	// 		audio.pause();
	// 		music.classList.remove("play");
	// 		// this.style.animationPlayState = "paused";
	// 		// this.style.webkitAnimationPlayState = "paused";
	// 	}
	// }

	music.addEventListener("touchstart",function(){
		if(audio.paused){
			audio.play();
			music.classList.add("play");
		}else{
			audio.pause();
			music.classList.remove("play");
		}
	},false);

	page1.ontouchstart = function(){
		this.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%";

		setTimeout(()=>{
			page2.classList.add("fadeOut");
			page3.classList.add("fadeIn");
		},5500)
	}
}
