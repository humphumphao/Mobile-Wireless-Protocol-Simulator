function sequenceForward(){

	context.clearRect(0, 0, 800, 550);
	saveNetworkTopology();	
	var x3 = 0;
	var y3 = 15;
	var x4 = 75;
	var y4 = 30;
	
	if(sequenceCount<dsdvArray.length){
		sequenceCount++;
		for(var i=0;i<sequenceCount;i++){
				x1 = parseInt(dsdvArray[i][5]);
				y1 = parseInt(dsdvArray[i][6]);
				x2 = parseInt(dsdvArray[i][7]);
				y2 = parseInt(dsdvArray[i][8]);
				arrow(x1,y1,x2,y2,2);
				
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,2);
			}
		message.value ="Packet reached " + dsdvArray[sequenceCount-1][2] + "."
		messageTimeLine.value="Phrase " + sequenceCount + ": Packet reached " + dsdvArray[sequenceCount-1][2] + "." 
	}
	else if(sequenceCount == dsdvArray.length){
		for(var i=0;i<sequenceCount;i++){
				x1 = parseInt(dsdvArray[i][5]);
				y1 = parseInt(dsdvArray[i][6]);
				x2 = parseInt(dsdvArray[i][7]);
				y2 = parseInt(dsdvArray[i][8]);
				arrow(x1,y1,x2,y2,2);
			}
		message.value ="Packet is at destination node."
		messageTimeLine.value ="Final Phrase: Packet is at destination node."
	}

}

function sequenceBackward(){
	var c=document.getElementById("myCanvasTimeLine");
	var contextTimeLine=c.getContext("2d");
	contextTimeLine.clearRect(0, 0, 800, 300);
	showTimeLineDsDv();
	var x3 = 0;
	var y3 = 15;
	var x4 = 75;
	var y4 = 30;

	context.clearRect(0, 0, 800, 550);
	saveNetworkTopology();
	if(sequenceCount>1){
		sequenceCount--;
		for(var i=0;i<sequenceCount;i++){
				x1 = parseInt(dsdvArray[i][5]);
				y1 = parseInt(dsdvArray[i][6]);
				x2 = parseInt(dsdvArray[i][7]);
				y2 = parseInt(dsdvArray[i][8]);
				arrow(x1,y1,x2,y2,2);
				
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,2);
			}
		message.value ="Packet reached " + dsdvArray[sequenceCount-1][2] + "."
		messageTimeLine.value="Phrase " + sequenceCount + ": Packet reached " + dsdvArray[sequenceCount-1][2] + "." 
	}
	else{
		message.value ="Packet is at source node."
		messageTimeLine.value ="Initial Phrase: Packet is at source node."
	}
}

function sequenceForwardOption(){
	
	var protocolIdentity = document.getElementById("protocolIdentity").value;
	if(protocolIdentity=="dsdv"){
		sequenceForward();
	}
	else if(protocolIdentity=="dsr"){
		sequenceForwardDsr();	
	}


}

function sequenceBackwardOption(){

	var protocolIdentity = document.getElementById("protocolIdentity").value;
	if(protocolIdentity=="dsdv"){
		sequenceBackward();
	}
	else if(protocolIdentity=="dsr"){
		sequenceBackwardDsr();	
	}


}

function sequenceForwardDsr(){
sequenceCount++;
var x3 = 0;
var y3 = 15;
var x4 = 75;
var y4 = 30;
		
var x5 = 475;	
var y5 = 15;
var x6 = 400;	
var y6 = 30;
var temp;


	if(timeLineNode[0]>timeLineNode[1]){
		temp = timeLineNode[1];
		timeLineNode[1] = timeLineNode[0];
		timeLineNode[0] = temp;
	}
	else{
		temp=timeLineNode[0];
	}

	var temp2 = temp*2;

	
	if(timeLineNode.length>1){
	
		
		if(sequenceCount<temp && sequenceCount<timeLineNode[1]){ 
			
			for(var i=0;i<sequenceCount;i++){
					
					x3 = x3 + 75;
					y3 = y3 + 20;
					x4 = x4 + 75;
					y4 = y4 + 20;
					arrowTimeLine(x3,y3,x4,y4,1);
					
					x5 = x5 - 75;
					y5 = y5 + 20;
					x6 = x6 - 75;
					y6 = y6 + 20;
					arrowTimeLine(x5,y5,x6,y6,1);
				}

			messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ Packets reached next intermediate node." 
		}
		else if(sequenceCount == temp && sequenceCount < timeLineNode[1]){ 

			for(var i=0;i<sequenceCount;i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			for(var i=0;i<temp;i++){
				x5 = x5 - 75;
				y5 = y5 + 20;
				x6 = x6 - 75;
				y6 = y6 + 20;
				arrowTimeLine(x5,y5,x6,y6,1);
			}
			messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ Packet reached destination node. Sending RREP back." 
		}
		
		else if(sequenceCount > temp && sequenceCount < timeLineNode[1]){ 

			for(var i=0;i<sequenceCount;i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			for(var i=0;i<temp;i++){
				x5 = x5 - 75;
				y5 = y5 + 20;
				x6 = x6 - 75;
				y6 = y6 + 20;
				arrowTimeLine(x5,y5,x6,y6,1);
			}
			if(sequenceCount >= temp2){
				var x=temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet going back to source node through the same path taken by the RREQ packet." 
			}
			else{
				var x = sequenceCount - temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet reached back to the source node." 
			}
			x5 = x5 - 75;
			x6 = x6 - 75;
		
			for(var i=0;i<x;i++){
				x5 = x5 + 75;
				y5 = y5 + 20;
				x6 = x6 + 75;
				y6 = y6 + 20;
				arrowTimeLine(x6,y5,x5,y6,0);
			}
			
			//messageTimeLine.value="Red arrows display the path of RREQ packet.\n\nBlue arrows display the path of RREP packet.\n\nTime = " + sequenceCount + ": \nRREP packet going back to source node through the same path taken by the RREQ packet. \n\nOn the other hand, the other RREQ reached next intermediate node instead of destination node." 
		}
		
		else if(sequenceCount > temp && sequenceCount >= timeLineNode[1]){ 

			for(var i=0;i<timeLineNode[1];i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			for(var i=0;i<temp;i++){
				x5 = x5 - 75;
				y5 = y5 + 20;
				x6 = x6 - 75;
				y6 = y6 + 20;
				arrowTimeLine(x5,y5,x6,y6,1);
			}
			if(sequenceCount >= temp2){
				var x=temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet going back to source node through the same path taken by the RREQ packet." 
				sequenceCount--;
			}
			else{
				var x = sequenceCount - temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet reached back to the source node." 
			}
			x5 = x5 - 75;
			x6 = x6 - 75;
			for(var i=0;i<x;i++){
				x5 = x5 + 75;
				y5 = y5 + 20;
				x6 = x6 + 75;
				y6 = y6 + 20;
				arrowTimeLine(x6,y5,x5,y6,0);
			}
			
			//messageTimeLine.value="Red arrows display the path of RREQ packet.\n\nBlue arrows display the path of RREP packet.\n\nTime = " + sequenceCount + ": RREP packet going back to source node through the same path taken by the RREQ packet. \nOn the other hand, the other RREQ packet reached destination node." 
		}
		
		else if(sequenceCount >= temp2 && sequenceCount >= timeLineNode[1]){ 
			sequenceCount--;
			for(var i=0;i<timeLineNode[1];i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			for(var i=0;i<temp;i++){
				x5 = x5 - 75;
				y5 = y5 + 20;
				x6 = x6 - 75;
				y6 = y6 + 20;
				arrowTimeLine(x5,y5,x6,y6,1);
			}
			x5 = x5 - 75;
			x6 = x6 - 75;
			for(var i=0;i<temp;i++){
				x5 = x5 + 75;
				y5 = y5 + 20;
				x6 = x6 + 75;
				y6 = y6 + 20;
				arrowTimeLine(x6,y5,x5,y6,0);
			}
			
			messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet reached back to the source node." 
		}
		
	}
	
	else{
	
		if(sequenceCount<temp){ 
			
			for(var i=0;i<sequenceCount;i++){
					
					x3 = x3 + 75;
					y3 = y3 + 20;
					x4 = x4 + 75;
					y4 = y4 + 20;
					arrowTimeLine(x3,y3,x4,y4,1);
					
				}

			messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ Packet reached next intermediate node." 
		}
		
		else if(sequenceCount == temp){ 

			for(var i=0;i<temp;i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			
			messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ Packet reached destination node. Sending RREP back." 
		}
		
		else if(sequenceCount > temp){ 

			for(var i=0;i<temp;i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			
			if(sequenceCount >= temp2){

				var x=temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet going back to source node through the same path taken by the RREQ packet." 
				sequenceCount--;
			}
			else{
				var x = sequenceCount - temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet reached back to the source node." 
			}
			x3 = x3 + 75;
			x4 = x4 + 75;
		
			for(var i=0;i<x;i++){
				x3 = x3 - 75;
				y3 = y3 + 20;
				x4 = x4 - 75;
				y4 = y4 + 20;
				arrowTimeLine(x4,y3,x3,y4,0);
			}
		
		}
	
	
	}
	
}

function sequenceBackwardDsr(){
	sequenceCount--;
	var c=document.getElementById("myCanvasTimeLine");
	var contextTimeLine=c.getContext("2d");
	contextTimeLine.clearRect(0, 0, 800, 300);
	timeLineNode.splice(0,timeLineNode.length);
	showTimeLineDsr();
	
	var x3 = 0;
	var y3 = 15;
	var x4 = 75;
	var y4 = 30;
	
	var x5 = 475;
	var y5 = 15;
	var x6 = 400;
	var y6 = 30;
	
	var temp;
	
	if(timeLineNode[0]>timeLineNode[1]){
		temp = timeLineNode[1];
		timeLineNode[1] = timeLineNode[0];
		timeLineNode[0] = temp;
	}
	else{
		temp=timeLineNode[0];
	}

	var temp2 = temp*2;

	
	if(timeLineNode.length>1){
		
		if(sequenceCount<=0){ 
		messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ packets at source node."
		sequenceCount++;
		}
		
		else if(sequenceCount<temp && sequenceCount<timeLineNode[1]){ 
			
			for(var i=0;i<sequenceCount;i++){
					
					x3 = x3 + 75;
					y3 = y3 + 20;
					x4 = x4 + 75;
					y4 = y4 + 20;
					arrowTimeLine(x3,y3,x4,y4,1);
					
					x5 = x5 - 75;
					y5 = y5 + 20;
					x6 = x6 - 75;
					y6 = y6 + 20;
					arrowTimeLine(x5,y5,x6,y6,1);
				}

			messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ Packets reached next intermediate node." 
		}
		else if(sequenceCount == temp && sequenceCount < timeLineNode[1]){ 

			for(var i=0;i<sequenceCount;i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			for(var i=0;i<temp;i++){
				x5 = x5 - 75;
				y5 = y5 + 20;
				x6 = x6 - 75;
				y6 = y6 + 20;
				arrowTimeLine(x5,y5,x6,y6,1);
			}
			messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ Packet reached destination node. Sending RREP back" 
		}
		
		else if(sequenceCount > temp && sequenceCount < timeLineNode[1]){ 

			for(var i=0;i<sequenceCount;i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			for(var i=0;i<temp;i++){
				x5 = x5 - 75;
				y5 = y5 + 20;
				x6 = x6 - 75;
				y6 = y6 + 20;
				arrowTimeLine(x5,y5,x6,y6,1);
			}
			x5 = x5 - 75;
			x6 = x6 - 75;
			var x = sequenceCount - temp;
			for(var i=0;i<x;i++){
				x5 = x5 + 75;
				y5 = y5 + 20;
				x6 = x6 + 75;
				y6 = y6 + 20;
				arrowTimeLine(x6,y5,x5,y6,0);
			}
			
			messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet going back to source node through the same path taken by the RREQ packet."
		}
		
		else if(sequenceCount > temp && sequenceCount >= timeLineNode[1]){ 

			for(var i=0;i<timeLineNode[1];i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			for(var i=0;i<temp;i++){
				x5 = x5 - 75;
				y5 = y5 + 20;
				x6 = x6 - 75;
				y6 = y6 + 20;
				arrowTimeLine(x5,y5,x6,y6,1);
			}
			if(sequenceCount >= temp2){
				var x=temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet going back to source node through the same path taken by the RREQ packet." 
			}
			else{
				var x = sequenceCount - temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet reached back to the source node." 
			}
			x5 = x5 - 75;
			x6 = x6 - 75;
			for(var i=0;i<x;i++){
				x5 = x5 + 75;
				y5 = y5 + 20;
				x6 = x6 + 75;
				y6 = y6 + 20;
				arrowTimeLine(x6,y5,x5,y6,0);
			}
			
			//messageTimeLine.value="Red arrows display the path of RREQ packet.\n\nBlue arrows display the path of RREP packet.\n\nTime = " + sequenceCount + ": RREP packet going back to source node through the same path taken by the RREQ packet. \nOn the other hand, the other RREQ packet reached destination node." 
		}
		
		
	}
	else{
	
		if(sequenceCount <=0){
		messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ packet at source node."
		sequenceCount++;
		}
	
		else if(sequenceCount<temp){ 
			
			for(var i=0;i<sequenceCount;i++){
					
					x3 = x3 + 75;
					y3 = y3 + 20;
					x4 = x4 + 75;
					y4 = y4 + 20;
					arrowTimeLine(x3,y3,x4,y4,1);
					
				}

			messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ Packet reached next intermediate node." 
		}
		
		else if(sequenceCount == temp){ 

			for(var i=0;i<temp;i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			
			messageTimeLine.value="Time = " + sequenceCount + ": \nRREQ Packet reached destination node. Sending RREP back." 
		}
		
		else if(sequenceCount > temp){ 

			for(var i=0;i<temp;i++){
			
				x3 = x3 + 75;
				y3 = y3 + 20;
				x4 = x4 + 75;
				y4 = y4 + 20;
				arrowTimeLine(x3,y3,x4,y4,1);
			}
			
			if(sequenceCount >= temp2){
				var x=temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet going back to source node through the same path taken by the RREQ packet." 
			}
			else{
				var x = sequenceCount - temp;
				messageTimeLine.value="Time = " + sequenceCount + ": \nRREP packet reached back to the source node." 
			}
			x3 = x3 + 75;
			x4 = x4 + 75;
		
			for(var i=0;i<x;i++){
				x3 = x3 - 75;
				y3 = y3 + 20;
				x4 = x4 - 75;
				y4 = y4 + 20;
				arrowTimeLine(x4,y3,x3,y4,0);
			}
		
		}
	
	}

}


