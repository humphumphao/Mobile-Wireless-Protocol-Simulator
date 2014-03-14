function addLine(x1,x2,y1,y2){

	context.beginPath();
	context.strokeStyle = '#000000'
	context.lineWidth=1;
	context.setLineDash([8]); 
	context.moveTo(x1,y1); 
	context.closePath();
	context.lineTo(x2,y2);
	context.stroke();

}

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