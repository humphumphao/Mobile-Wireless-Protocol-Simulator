function createDsrPath(){
document.getElementById("SR1").disabled = false;
document.getElementById("TL").disabled = false;

	if(sendersArray.length == 0){
		
		message.value="You need a source node to generate the routing table"
	}
	else if(receiversArray.length == 0){

		message.value="You need to identify the destination node to generate the routing table"
	}
	else{
	checkNodeTableArray2();
		for(var i=0;i<nodeTableArray.length;i++){
			if(nodeTableArray[i][0] == "S1" && nodeTableArray[i][1] == "R1"){
				if(nodeTableArray[i][2] == "R1"){
					components=nodeTableArray[i];
					dsdvArray.push(components);
				}
				else{
					components=nodeTableArray[i];
					dsdvArray.push(components);
					findSequencePath(nodeTableArray[i][0],nodeTableArray[i][2]);
				}
			}
			else if(nodeTableArray[i][0] == "S1"){
				
				components =nodeTableArray[i];
				dsdvArray.push(components);	
				findSequencePath(nodeTableArray[i][0],nodeTableArray[i][2]);				
			}
		}
		
		routeRREQPath();
	}
	
}

function findSequencePath(previousNode,nextNode){	
	for(var i=0;i<nodeTableArray.length;i++){
		if(nodeTableArray[i][0] == nextNode && nodeTableArray[i][2] != previousNode && nodeTableArray[i][1] == "R1"){
			if(nodeTableArray[i][2] == "R1"){
				components=nodeTableArray[i];
				dsdvArray.push(components);
				break;
			}
			components=nodeTableArray[i];
			dsdvArray.push(components);
			findSequencePath(nodeTableArray[i][0],nodeTableArray[i][2]);
		}
		else if(nodeTableArray[i][0] == nextNode && nodeTableArray[i][2] != previousNode){
			components=nodeTableArray[i];
			dsdvArray.push(components);
			findSequencePath(nodeTableArray[i][0],nodeTableArray[i][2]);
		}
	}


}

function routeRREQPath(){
	
	checkDsdvArrayPath();
	for(var i=0;i<dsdvArray.length;i++){
		x1 = parseInt(dsdvArray[i][5]);
		y1 = parseInt(dsdvArray[i][6]);
		x2 = parseInt(dsdvArray[i][7]);
		y2 = parseInt(dsdvArray[i][8]);
		arrow(x1,y1,x2,y2,1);
	}
	
	messageTimeLine.value="Blue Arrow --> RREQ\nOrange Arrow --> RREP";

}



function findRREQ(){

	/*for(var i=0;i<nodeTableArray.length;i++){
		if(nodeTableArray[i][0] == "S1"){
			for(var j=0;j<nodeTableArray.length;j++){
				if(nodeTableArray[i][1] == nodeTableArray[j][0] && nodeTableArray[j][1] == "R1"){
					components=[nodeTableArray[i][0],nodeTableArray[j][1],nodeTableArray[i][2],nodeTableArray[i][3]+nodeTableArray[j][3],nodeTableArray[i][4]+nodeTableArray[j][4],nodeTableArray[i][5],nodeTableArray[i][6],nodeTableArray[i][7],nodeTableArray[i][8]];
					nodeTableArray.push(components);
				}
			}
		}
	checkNodeTableArray2();
	}*/
	
	createDsrPath();

}


