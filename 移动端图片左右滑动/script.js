var startX = 0,endX = 0;
var imgboxlist = document.getElementById("imgboxlist");

window.onload = function(){
	inw = window.innerWidth;
	for (var i = 0; i < imgboxlist.children.length; i++) {
		imgboxlist.children[i].style.width = inw +"px";
	}

	imgboxlist.style.width = imgboxlist.children.length*inw + "px";

	imgboxlist.addEventListener('touchstart',(event)=>{
		startX = event.changedTouches[0].pageX;
	},false);
	imgboxlist.addEventListener('touchend',touchend,false);
	imgboxlist.addEventListener('touchmove',touchmove,false);
}

function touchend(event){
	endX = event.changedTouches[0].pageX;
	var trx = parseInt(imgboxlist.style.transform.replace(/[^0-9-]/ig,""));
	var maxl = -(imgboxlist.children.length-1)*100;
	if((startX-endX>=10)&&(trx>maxl)){ // from right to left , move next
		trx= trx - 100;
		imgboxlist.style.transform = "translate(" + trx + "vw";
	}else if((endX - startX >= 10)&&(trx<0)){ // from left to right , move previous
		trx= trx + 100;
		imgboxlist.style.transform = "translate(" + trx + "vw";
	}
}


function touchmove(event){
	
}



























































// window.onload = function(){
// 	new Lllslide(document.getElementById("imgboxlist"))
// }

// function Lllslide(dom){
// 	this.targetEle = dom;
// 	this.startX = 0;
// 	this.endX = 0;
// 	this.init();	// Initialize the layout of the target element
// 	this.changepos();	// change the position of the target element
// }

// Lllslide.prototype.init = function(){
// 	inw = window.innerWidth;
// 	for (var i = 0; i < this.targetEle.children.length; i++) {
// 		this.targetEle.children[i].style.width = inw +"px";
// 	}

// 	this.targetEle.style.width = this.targetEle.children.length*inw + "px";
// }

// Lllslide.prototype.changepos = function(){
// 	var self = this;
// 	self.targetEle.addEventListener('touchend',touchend);
// 	self.targetEle.addEventListener('touchstart',touchstart);
// 	self.targetEle.addEventListener('touchmove',touchmove);

// 	var touchstart = function(event){
// 		self.startX = event.changedTouches[0].pageX;

// 	}

// 	var touchend = function (event){
// 		self.endX = event.changedTouches[0].pageX;
// 		var trx = parseInt(self.targetEle.style.transform.replace(/[^0-9-]/ig,""));
// 		var maxl = -(self.targetEle.children.length-1)*100;

// 		if((self.startX-self.endX>=10)&&(trx>maxl)){ // from right to left , move next
// 			trx= trx - 100;
// 			self.targetEle.style.transform = "translate(" + trx + "vw";
// 		}else if((self.endX - self.startX >= 10)&&(trx<0)){ // from left to right , move previous
// 			trx= trx + 100;
// 			self.targetEle.style.transform = "translate(" + trx + "vw";
// 		}
// 	}

// 	var touchmove = function(){

// 	}
// }
