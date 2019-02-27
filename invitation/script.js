window.onload = function(){
	var audiobox = document.getElementById("audiobox");
	var audio = document.getElementById("audio");

	audiobox.addEventListener("click",function(){
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
	},false);	// stop propagation
}