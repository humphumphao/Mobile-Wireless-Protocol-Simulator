function createDsrPath(){
document.getElementById("SR1").disabled = false;
document.getElementById("TL").disabled = false;
checkNodeTableArray();

	if(sendersArray.length == 0){
		
		message.value="You need a source node to generate the routing table"
	}
	else if(receiversArray.length == 0){

		message.value="You need to identify the destination node to generate the routing table"
	}
	else{
		for(var i=0;i<nodeTableArray.length;i++){
			if(nodeTableArray[i][0] == "S1" && nodeTableArray[i][1] =="R1" && nodeTableArray[i][2] =="R1"){
				components = nodeTableArray[i];
				dsdvArray.push(components);		
				end();	
			}
			else if(nodeTableArray[i][0] == "S1" && nodeTableArray[i][1] =="R1"){
				components = nodeTableArray[i];
				dsdvArray.push(components);		
				findSequencePath(nodeTableArray[i][0],nodeTableArray[i][2]);				
			}
		}
	}
	
}

function findSequencePath(previousNode,nextNode){	
	for(var i=0;i<nodeTableArray.length;i++){

		if(nodeTableArray[i][0] == nextNode && nodeTableArray[i][2] != previousNode && nodeTableArray[i][1] =="R1"){
			if(nodeTableArray[i][2] == "R1"){
				components=nodeTableArray[i];
				dsdvArray.push(components);
				end();
			}
			components=nodeTableArray[i];
			dsdvArray.push(components);
			findSequencePath(nodeTableArray[i][0],nodeTableArray[i][2]);
		}
		
	}


}

function routeRREQPath(){

	checkNodeTableArray();
	for(var i=0;i<dsrLine.length;i++){
		x1 = parseInt(dsrLine[i][0]);
		y1 = parseInt(dsrLine[i][1]);
		x2 = parseInt(dsrLine[i][2]);
		y2 = parseInt(dsrLine[i][3]);
		arrow(x1,y1,x2,y2,1);
	}
	
	messageTimeLine.value="Red Arrow --> RREQ";
	createDsrPath();

}

function end(){
}


