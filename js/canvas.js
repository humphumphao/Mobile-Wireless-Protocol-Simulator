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

