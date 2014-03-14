function addNode(){ 

var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var xCoord=document.getElementById("xCoord").value;
var yCoord=document.getElementById("yCoord").value;
var message = document.getElementById("message");
var nodeIdentity = document.getElementById("nodeIdentity").value;

if(xCoord>99 && xCoord<=800 && yCoord>99 && yCoord<=550 && nodeIdentity == "Sender" || nodeIdentity == "Receiver" || nodeIdentity == "Normal"){

	if(nodeIdentity == "Sender"){

		if(sendersArray.length == 1){
			message.value = "Only 1 source node is allowed in the network topology. Please remove source node to change its location."
		}
		
		else{
			message.value = "Source node added"
			var text = "S1";
			components = [text, nodeIdentity, xCoord, yCoord];
			sendersArray.push(components);
			
			context.fillStyle = "green";
			context.beginPath();
			var radius = 20; // for example
			context.arc(xCoord, yCoord, radius, 0, Math.PI * 2);
			context.closePath();
			context.globalCompositeOperation = "source-over";
			context.fill();
			context.fillStyle = "black";
			context.font = "20px Georgia";
			context.textBaseline = "top";
			context.fillText(text, xCoord-radius/4 ,yCoord-radius/2);

			compareSourceNode();
		}
	}
	
	if(nodeIdentity == "Receiver"){
		if(receiversArray.length == 1){
			message.value = "Only 1 destination node is allowed in the network topology. Please remove destination node to change its location."
		}
		
		else{
			message.value = "Destination node added"
			var text = "R1";
			components = [text, nodeIdentity, xCoord, yCoord];
			receiversArray.push(components);
			
			context.fillStyle = "red";
			context.beginPath();
			var radius = 20; // for example
			context.arc(xCoord, yCoord, radius, 0, Math.PI * 2);
			context.closePath();
			context.globalCompositeOperation = "source-over";
			context.fill();
			context.fillStyle = "black";
			context.font = "20px Georgia";
			context.textBaseline = "top";
			context.fillText(text, xCoord-radius/4 ,yCoord-radius/2);
			
			compareDestinationNode();
		}	
	}
	
	if(nodeIdentity == "Normal"){
	message.value = "Intermediate node added"
	var text = numOfNode.length + 1 ;
	components = [text, nodeIdentity, xCoord, yCoord];
	numOfNode.push(text);
	normalArray.push(components);

	context.fillStyle = "grey";
	context.beginPath();
	var radius = 20; // for example
	context.arc(xCoord, yCoord, radius, 0, Math.PI * 2);
	context.closePath();
	context.globalCompositeOperation = "source-over";
	context.fill();
	context.fillStyle = "black";
	context.font = "20px Georgia";
	context.textBaseline = "top";
	context.fillText(text, xCoord-radius/4 ,yCoord-radius/2);
	context.closePath();

	compareIntermediateNode(text);
	
	}


}

}