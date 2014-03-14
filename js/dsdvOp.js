function dsdvOp(){
document.getElementById("SR1").disabled = false;
document.getElementById("sForward").disabled = false;
document.getElementById("sBackward").disabled = false;
var x1;
var y1;
var x2;
var y2;
var nextNode;
var endNode;
if(sendersArray.length == 0){
	
	message.value="You need a source node to generate the routing table"
}
else if(receiversArray.length == 0){

	message.value="You need to identify the destination node to generate the routing table"
}
else{

		for(var i=0;i<lineArrayS.length;i++){
			if(lineArrayS[i][3] == "R1"){
				components=lineArrayS[i];
				dsdvArray.push(components);
				constructDsdv();	
		
			}

		if(dsdvArray.length == 0 && normalArray.length>0 && lineArrayS.length>0 ){
			for(var n=0;n<lineArrayS.length;n++){
				for(var i=0;i<lineArrayS.length;i++){
					if(i+1<lineArrayS.length){
						if(lineArrayS[i][6] > lineArrayS[i+1][6]){
							//alert("2");
							var count = lineArrayS[i+1];
							lineArrayS[i+1] = lineArrayS[i];
							lineArrayS[i] = count;
						}
					}
				
				}
			}
			for(var i=0;i<lineArrayS.length;i++){
				nextNode = lineArrayS[i][3];	
				components=lineArrayS[i];
				dsdvArray.push(components);
				//alert(components);
				checkRoute();
			}
			findNextNode();
		}
	}
}

}

function findNextNode(){
var sortArray = new Array();
//alert(sortArray.length);
//alert(dsdvArray.length);
//alert(lineArray.length);
//alert(dsdvArray[dsdvArray.length-1]);
//alert(lineArray[0]);
	for(var j=0;j<lineArray.length;j++){
		if(dsdvArray[dsdvArray.length-1][3] == lineArray[j][0] && lineArray[j][3] != dsdvArray[dsdvArray.length-1][0]){
			//alert("for loop 1");
			var components = lineArray[j];
			//alert(components);
			sortArray.push(components);		
			addTableArray(lineArray[j][0],lineArray[j][3]);				
		}
		else if(dsdvArray[dsdvArray.length-1][3] == lineArray[j][3] && lineArray[j][0] != dsdvArray[dsdvArray.length-1][0]){
			//alert("for loop 2");
			var components = [lineArray[j][3],lineArray[j][4],lineArray[j][5],lineArray[j][0],lineArray[j][1],lineArray[j][2],lineArray[j][6]]; 
			sortArray.push(components);	
			//alert(components);
			addTableArray(lineArray[j][3],lineArray[j][0]);	
		}
	}	
	if(sortArray.length > 1){
		for(var n=0;n<sortArray.length;n++){
			for(var i=0;i<sortArray.length;i++){
				if(i+1<sortArray.length){
					if(sortArray[i][6] > sortArray[i+1][6]){
						//alert("5");
						var count = sortArray[i+1];
						sortArray[i+1] = sortArray[i];
						sortArray[i] = count;
					}
				}
			}
		}
	}
	components=sortArray[0];
	dsdvArray.push(components);
	checkRoute();
	//alert(dsdvArray.length);
	if(dsdvArray[dsdvArray.length-1][3] == "R1"){
		//alert("6");
		constructDsdv();
	}
	else{
		//alert("7");
		findNextNode();
	}
}

function constructDsdv(){

	for(var i=0;i<dsdvArray.length;i++){
		//alert("8");
		x1 = parseInt(dsdvArray[i][1]);
		y1 = parseInt(dsdvArray[i][2]);
		x2 = parseInt(dsdvArray[i][4]);
		y2 = parseInt(dsdvArray[i][5]);
		arrow(x1,y1,x2,y2,2);
	}
	
	//generateTableArray();

}

function checkRoute(){
	
	var checkRoute = 0;
	
	for(var i=0;i<dsdvArray.length;i++){
		for(var n=0;n<lineArray.length;n++){
			if(dsdvArray[i][3]==lineArray[n][0]){
				checkRoute++;
			}
		
		}
		if(checkRoute==0){
			//alert(dsdvArray[i])
			dsdvArray.splice(i,1);	
		}
	}
	
	for(var i=0;i<dsdvArray.length;i++){
		if(dsdvArray[i][0]=="S1"){
			for(var j=1;j<dsdvArray.length;j++){
				if(dsdvArray[j][0]=="S1" && dsdvArray[j][6]>dsdvArray[i][6]){
					dsdvArray.splice(j,1);	
				}
			}
		}
	}

}