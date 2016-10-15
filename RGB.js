var colors = [];
var squares=document.querySelectorAll(".square");
var pickedcolor;
var colordisplay=document.getElementById("colordisplay");
var message=document.getElementById("message");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var numsqrs=6;
var modebuttons=document.querySelectorAll(".mode");

init();

function init() {
	for(var i=0;i<modebuttons.length;i++)
{
	modebuttons[i].addEventListener("click", function() {
	modebuttons[0].classList.remove("selected");
	modebuttons[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent==="Easy" ? numsqrs=3: numsqrs=6;
	reset();
	});
}
	for(var i=0;i<squares.length;i++) {
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
	var clickedcolor=this.style.background;
	if(clickedcolor===pickedcolor)
	{
		message.textContent="Correct";
		changeColors(clickedcolor);
		document.querySelector("h1").style.background=pickedcolor;
		resetbutton.textContent="Play Again"
	}
	else
	{
		this.style.background="#232323";
		message.textContent="Try again";
	}
	});
}
	reset();
}



function reset() {
	message.textContent=" ";
	colors=generateRandomColors(numsqrs);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	resetbutton.textContent="New Colors";

	for(var i=0;i<squares.length;i++) {
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else 
		{
			squares[i].style.display="none";
		}
	}
	document.querySelector("h1").style.background="steelblue";
}



resetbutton.addEventListener("click", function() {
reset();
}); 

// colordisplay.textContent=pickedcolor;



function changeColors(color) {
	for(var i=0;i<squares.length;i++) {
	squares[i].style.background=color;
}
}

function pickColor() {
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];	
}

function generateRandomColors(num) {
	var arr=[];
	for(var i=0;i<num;i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	var col="rgb(" + r + ", " + g + ", " + b  + ")";
	return(col);

}