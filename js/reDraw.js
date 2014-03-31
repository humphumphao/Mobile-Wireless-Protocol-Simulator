function reDraw(){

	if(sendersArray.length>0){

		var text = "S1";
		context.fillStyle = "green";
		context.beginPath();
		var radius = 20; // for example
		context.arc(sendersArray[0][2], sendersArray[0][3], radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		context.fillStyle = "black";
		context.font = "20px Georgia";
		context.textBaseline = "top";
		context.fillText(text, sendersArray[0][2]-radius/4 ,sendersArray[0][3]-radius/2);
		
		compareSourceNode();
	
	}
	checkNodeTableArray();
	
	if(normalArray.length>0){
	
		for(var i=0;i<normalArray.length;i++){
		
			var text = normalArray[i][0];
			context.fillStyle = "grey";
			context.beginPath();
			var radius = 20; // for example
			context.arc(normalArray[i][2], normalArray[i][3], radius, 0, Math.PI * 2);
			context.closePath();
			context.fill();
			context.fillStyle = "black";
			context.font = "20px Georgia";
			context.textBaseline = "top";
			context.fillText(text, normalArray[i][2]-radius/4 ,normalArray[i][3]-radius/2);
			context.closePath();
			checkNodeTableArray();
			compareIntermediateNode(text);
			
		}
	}
	checkNodeTableArray();
	
	if(receiversArray.length>0){
	
		var text = "R1";
		context.fillStyle = "red";
		context.beginPath();
		var radius = 20; // for example
		context.arc(receiversArray[0][2], receiversArray[0][3], radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		context.fillStyle = "black";
		context.font = "20px Georgia";
		context.textBaseline = "top";
		context.fillText(text, receiversArray[0][2]-radius/4 ,receiversArray[0][3]-radius/2);
		
		compareDestinationNode();
	
	}
	
	checkNodeTableArray();
	
}