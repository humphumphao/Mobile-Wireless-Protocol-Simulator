function createDsdvPath(){ 
document.getElementById("SR1").disabled = false;
document.getElementById("TL").disabled = false;
//checkNodeTableArray();

	if(sendersArray.length == 0){
		
		message.value="You need a source node to generate the routing table"
	}
	else if(receiversArray.length == 0){

		message.value="You need to identify the destination node to generate the routing table"
	}
	else{
		message.value="The red arrows show how the packet has being routed." 
		for(var i=0;i<nodeTableArray.length;i++){ 
			if(nodeTableArray[i][0] == "S1"){ 
				if(nodeTableArray[i][2] == "R1" && nodeTableArray[i][1] == "R1"){ 
					components=nodeTableArray[i];
					dsdvArray.push(components);
					routeDsdvPath();
					break;
				}
				else if(nodeTableArray[i][1] == "R1"){
					components = nodeTableArray[i];
					tempDsdvArray.push(components);	
				}
			}
		}
				
		for(var j=0;j<tempDsdvArray.length;j++){
			for(var k=j+1;k<tempDsdvArray.length;k++){
				if(tempDsdvArray[j][3] > tempDsdvArray[k][3]){
					var temp = tempDsdvArray[k];
					tempDsdvArray[k] = tempDsdvArray[j];
					tempDsdvArray[j] = temp;
				}		
			}
		}		
		components = tempDsdvArray[0];
		dsdvArray.push(components); 
		tempDsdvArray.splice(0,1);
		components = ["S1"]; 
		confirmNode.push(components); 
		findSourcePath(dsdvArray[0][0],dsdvArray[0][2]); 
		
	}
}

function findSourcePath(previousNode,nextNode){
		
	for(var i=0;i<nodeTableArray.length;i++){
		var count = 0;
		
		for(var a=0;a<confirmNode.length;a++){ 
			if(confirmNode[a] == nodeTableArray[i][2]){
				count++;
			}
		}

		if(nodeTableArray[i][0] == nextNode && nodeTableArray[i][2] != previousNode && count == 0){
			if(nodeTableArray[i][2] == "R1" && nodeTableArray[i][1] == "R1"){ 
				components=nodeTableArray[i];
				dsdvArray.push(components);
				routeDsdvPath();
				break;
			}
			else if(nodeTableArray[i][1] == "R1"){
				var tempArray = new Array();
				components =nodeTableArray[i];
				tempArray.push(components);	

				/*for(var j=0;j<nodeTableArray.length;j++){
					if(tempArray[0][0] == nodeTableArray[j][0] && nodeTableArray[j][1] == "R1" && tempArray[0][3] > nodeTableArray[j][3]){
						tempArray.splice(0,tempArray.length);
						components = nodeTableArray[j];
						tempArray.push(components);
					}		
				}*/
				
				components=tempArray[0];
				dsdvArray.push(components);
				components = [tempArray[0][0]];
				confirmNode.push(components);
				tempArray.splice(0,tempArray.length);
					if(dsdvArray.length > nodeTableArray.length){
						findSourcePath2(); 
					}
					else{
						findSourcePath(dsdvArray[dsdvArray.length-1][0],dsdvArray[dsdvArray.length-1][2]);
					}
				}
			}	
	}
	
}

function findSourcePath2(){

	if(tempDsdvArray.length > 0){
		dsdvArray.splice(0,dsdvArray.length);
		components = tempDsdvArray[0];
		dsdvArray.push(components);
		tempDsdvArray.splice(0,1);
		findSourcePath(dsdvArray[0][0],dsdvArray[0][2]);
	}
	else if(tempDsdvArray.length == 0){
		message.value = "Destination node is not connected in the network."
	}

}

function routeDsdvPath(){
	
	//checkDsdvPath();

	for(var i=0;i<dsdvArray.length;i++){
		//alert("8");
		x1 = parseInt(dsdvArray[i][5]);
		y1 = parseInt(dsdvArray[i][6]);
		x2 = parseInt(dsdvArray[i][7]);
		y2 = parseInt(dsdvArray[i][8]);
		arrow(x1,y1,x2,y2,2);
	}
}

function createRoutingTable(){
	tableArray.splice(0,tableArray.length);
	//alert(tableArray.length);
	var routingNumber=document.getElementById("routingNumber").value;
	for(var i=0;i<nodeTableArray.length;i++){
		if(nodeTableArray[i][0] == routingNumber){
			components=nodeTableArray[i];
			tableArray.push(components);
		}
	
	}

	dsdvRoutingTable();
}

function checkDsdvArrayPath(){
	
	for(var i=0;i<dsdvArray.length;i++){
		for(var j=i+1;j<dsdvArray.length;j++){
			
			if(dsdvArray[i][0] == dsdvArray[j][0] && dsdvArray[i][1] == dsdvArray[j][1] && dsdvArray[i][2] == dsdvArray[j][2]){
				dsdvArray.splice(j,1);
			}

		}
	}
}


