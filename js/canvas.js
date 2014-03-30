function arrow(fromx, fromy, tox, toy, z){
	context.beginPath();
	context.setLineDash([0]); 
	if(z == "0"){
	context.strokeStyle = '#FF9A00'
	}
	else if(z=="2")
	context.strokeStyle = '#FF0000'
	else if(z=="3")
	context.strokeStyle = '#00FFFF'
	else if(z=="4")
	context.strokeStyle = '#FE2EF7'
	else{
	context.strokeStyle = '#2D37F4'
	}
	context.lineWidth=2
    var headlen = 10;   // length of head in pixels
    var angle = Math.atan2(toy-fromy,tox-fromx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
	context.stroke();
}

function arrowTimeLine(fromx, fromy, tox, toy, z){
	var c=document.getElementById("myCanvasTimeLine");
	var contextTimeLine=c.getContext("2d");
	contextTimeLine.beginPath();
	contextTimeLine.setLineDash([0]); 
	if(z == "0"){
	contextTimeLine.strokeStyle = '#FF9A00'
	}
	else if(z=="2")
	contextTimeLine.strokeStyle = '#FF0000'
	else if(z=="3")
	contextTimeLine.strokeStyle = '#00FFFF'
	else if(z=="4")
	contextTimeLine.strokeStyle = '#FE2EF7'
	else{
	contextTimeLine.strokeStyle = '#2D37F4'
	}
	contextTimeLine.lineWidth=2
    var headlen = 10;   // length of head in pixels
    var angle = Math.atan2(toy-fromy,tox-fromx);
    contextTimeLine.moveTo(fromx, fromy);
    contextTimeLine.lineTo(tox, toy);
    contextTimeLine.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    contextTimeLine.moveTo(tox, toy);
    contextTimeLine.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
	contextTimeLine.stroke();
}

function createNode(xCoord,yCoord,text){
	
	var c=document.getElementById("myCanvasTimeLine");
	var contextTimeLine=c.getContext("2d");
	if(text == "S1"){
		contextTimeLine.fillStyle = "green";
		contextTimeLine.beginPath();
		var radius = 15; // for example
		contextTimeLine.arc(xCoord, yCoord, radius, 0, Math.PI * 2);
		contextTimeLine.closePath();
		contextTimeLine.globalCompositeOperation = "source-over";
		contextTimeLine.fill();
		contextTimeLine.fillStyle = "black";
		contextTimeLine.font = "15px Georgia";
		contextTimeLine.textBaseline = "top";
		contextTimeLine.fillText(text, xCoord-radius/4 ,yCoord-radius/2);
		
		contextTimeLine.beginPath();
		contextTimeLine.strokeStyle = 'black'
		contextTimeLine.lineWidth=1
		contextTimeLine.moveTo(xCoord,yCoord+15); 
		contextTimeLine.lineTo(xCoord,yCoord+185);
		contextTimeLine.stroke();
		contextTimeLine.closePath();
	}
	else if(text == "R1"){
		contextTimeLine.fillStyle = "red";
		contextTimeLine.beginPath();
		var radius = 15; // for example
		contextTimeLine.arc(xCoord, yCoord, radius, 0, Math.PI * 2);
		contextTimeLine.closePath();
		contextTimeLine.globalCompositeOperation = "source-over";
		contextTimeLine.fill();
		contextTimeLine.fillStyle = "black";
		contextTimeLine.font = "15px Georgia";
		contextTimeLine.textBaseline = "top";
		contextTimeLine.fillText(text, xCoord-radius/4 ,yCoord-radius/2);
		
		contextTimeLine.beginPath();
		contextTimeLine.strokeStyle = 'black'
		contextTimeLine.lineWidth=1
		contextTimeLine.moveTo(xCoord,yCoord+15); 
		contextTimeLine.lineTo(xCoord,yCoord+185);
		contextTimeLine.stroke();
		contextTimeLine.closePath();
	}
	else{
		contextTimeLine.fillStyle = "grey";
		contextTimeLine.beginPath();
		var radius = 15; // for example
		contextTimeLine.arc(xCoord, yCoord, radius, 0, Math.PI * 2);
		contextTimeLine.closePath();
		contextTimeLine.globalCompositeOperation = "source-over";
		contextTimeLine.fill();
		contextTimeLine.fillStyle = "black";
		contextTimeLine.font = "15px Georgia";
		contextTimeLine.textBaseline = "top";
		contextTimeLine.fillText(text, xCoord-radius/4 ,yCoord-radius/2);
		
		contextTimeLine.beginPath();
		contextTimeLine.strokeStyle = 'black'
		contextTimeLine.lineWidth=1
		contextTimeLine.moveTo(xCoord,yCoord+15); 
		contextTimeLine.lineTo(xCoord,yCoord+185);
		contextTimeLine.stroke();
		contextTimeLine.closePath();
	}


}

function drawingNormal(){

arrow(10, 175, 69, 175, 2);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

function drawingNormal2(){

arrow(10, 175, 69, 175, 1);
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75, 170);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}