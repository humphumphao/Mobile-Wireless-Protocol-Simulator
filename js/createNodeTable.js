function createNodeTable(tableNode,destn,nextNode,dist,hop,x1,y1,x2,y2){

	//var y = nodeTableArray.length;
	/*for(var i=0;i<nodeTableArray.length;i++){
		if(nodeTableArray[i][0] == destn && nodeTableArray[i][1] != tableNode){
				var checkDuplicate = false;
					for(var a =0;a<nodeTableArray.length;a++){
				for(var c = a+1;c<nodeTableArray.length;c++){
					if(nodeTableArray[a] == nodeTableArray[c]){
						//nodeTableArray.splice(j,1);
						checkDuplicate = true;
					}
				}
			}
			if(checkDuplicate == false)
			{
				components = [tableNode,nodeTableArray[i][1],nextNode,dist+nodeTableArray[i][3],hop+nodeTableArray[i][4]];
				nodeTableArray.push(components);
				for(var j=0;j<nodeTableArray.length;j++){
					if(nodeTableArray[j][0] == nodeTableArray[i][1]){
						components = [nodeTableArray[i][1],tableNode,nodeTableArray[j][2],dist+nodeTableArray[i][3],hop+nodeTableArray[i][4]];
						nodeTableArray.push(components);
						break;
					}
				}
			}
			//checkCreateNodeTable();
		}	
	}*/

	components = [destn,tableNode,tableNode,dist,hop,x2,y2,x1,y1];
	nodeTableArray.push(components);
	
	for(var i=0;i<nodeTableArray.length;i++){
		if(nodeTableArray[i][1] == destn && nodeTableArray[i][0] != tableNode){
			components = [tableNode,nodeTableArray[i][0],nextNode,dist+nodeTableArray[i][3],hop+nodeTableArray[i][4],x1,y1,nodeTableArray[i][7],nodeTableArray[i][8]];
			nodeTableArray.push(components);
			components = [nodeTableArray[i][0],tableNode,nodeTableArray[i][2],dist+nodeTableArray[i][3],hop+nodeTableArray[i][4],nodeTableArray[i][5],nodeTableArray[i][6],nodeTableArray[i][7],nodeTableArray[i][8]];
			nodeTableArray.push(components);
		}
	}
	
	//checkNodeTableArray2();
		
}

/*function createNodeTable2(tableNode,destn,nextNode,dist,hop,nextNode2){

	for(var i=0;i<nodeTableArray.length;i++){
		if(nodeTableArray[i][1] == tableNode && nodeTableArray[i][0] != destn){
			components = [destn,nodeTableArray[i][0],nextNode2,dist+nodeTableArray[i][3],hop+nodeTableArray[i][4]];
			alert(components + "2");
			nodeTableArray.push(components+ "2");
			components = [nodeTableArray[i][0],destn,nodeTableArray[i][2],dist+nodeTableArray[i][3],hop+nodeTableArray[i][4]];
			alert(nodeTableArray[i] + "2");
			nodeTableArray.push(components);
			if(nodeTableArray[i][4]>1){
				createNodeTable2(nodeTableArray[i][0],destn,nodeTableArray[i][2],dist+nodeTableArray[i][3],hop+nodeTableArray[i][4],nextNode2);
			}
		}
	}

}

function checkCreateNodeTable(){
	
	var y = nodeTableArray.length;
	
	for(var i =0;i<y;i++){
		for(var j = i+1;j<y;j++){
			if(nodeTableArray[i][0] == nodeTableArray[j][0] && nodeTableArray[i][1] == nodeTableArray[j][1] && nodeTableArray[i][4] < nodeTableArray[j][4]){
				nodeTableArray.splice(j,1);
			}
		}
	}

}*/

function happy(){
	
	for(var i =0;i<nodeTableArray.length;i++){
	
		alert(nodeTableArray[i]);
		
	}


}

function sad(){
	
	for(var i =0;i<dsdvArray.length;i++){
	
		alert(dsdvArray[i]);
		
	}


}

function checkNodeTableArray(){

	for(var i=0;i<nodeTableArray.length;i++){
		for(var j=i+1;j<nodeTableArray.length;j++){
			if(nodeTableArray[i][0] == nodeTableArray[j][0] && nodeTableArray[i][1] == nodeTableArray[j][1] && nodeTableArray[i][3] > nodeTableArray[j][3] ){
				nodeTableArray.splice(i,1);
			}
			else if(nodeTableArray[i][0] == nodeTableArray[j][0] && nodeTableArray[i][1] == nodeTableArray[j][1] && nodeTableArray[i][3] < nodeTableArray[j][3] ){
				nodeTableArray.splice(j,1);
			}
		}
	}
	checkNodeTableArray2();
	checkNodeTableArray2();
}

function checkNodeTableArray2(){

	for(var i=0;i<nodeTableArray.length;i++){
		for(var j=i+1;j<nodeTableArray.length;j++){
			if(nodeTableArray[i][0] == nodeTableArray[j][0] && nodeTableArray[i][1] == nodeTableArray[j][1] && nodeTableArray[i][4] > nodeTableArray[j][4]){
				nodeTableArray.splice(i,1);
			}
			else if(nodeTableArray[i][0] == nodeTableArray[j][0] && nodeTableArray[i][1] == nodeTableArray[j][1] && nodeTableArray[i][4] < nodeTableArray[j][4]){
				nodeTableArray.splice(j,1);
			}
			else if(nodeTableArray[i][0] == nodeTableArray[j][0] && nodeTableArray[i][1] == nodeTableArray[j][1] && nodeTableArray[i][4] == nodeTableArray[j][4]){
				nodeTableArray.splice(j,1);
			}
		}
	}

}
















