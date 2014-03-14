function addTableArray(x,y){
	if(x == "S1"){
		components = [x,y];
		sourceTableArray.push(components);
	}
	else{
		components = [x,y];
		normalTableArray.push(components);
	}
}
function generateTableArray(){ 
	
	if(sourceTableArray.length>0){ 
		for(var i=0; i<sourceTableArray.length;i++){
			var hop = 1;
			//alert("i")
			components = [sourceTableArray[i][0],sourceTableArray[i][1],hop,sourceTableArray[i][1],0];
			//alert(components)
			tableArray.push(components);
			checkTable();
		}
		
		for(var i=0; i<tableArray.length;i++){ 	//alert("1")
			for(var j=0; j<normalTableArray.length;j++){ //alert("2")
				if(normalTableArray[j][4] == 0 || tableArray[i][1] != "R1"){
					if(tableArray[i][1] == normalTableArray[j][0]){ //alert(tableArray[i][1]); //alert(normalTableArray[i][0]);
						normalTableArray[j][4] == 1;
						var hop = tableArray[i][2] + 1;
						components = [normalTableArray[j][0],normalTableArray[j][1],hop,tableArray[i][3]];
						tableArray.push(components); //alert(tableArray[tableArray.length-1]);
						checkTable();
					}
					else if(tableArray[i][1] == normalTableArray[j][1]){ //alert(tableArray[i][1]); //alert(normalTableArray[i][1]);
						normalTableArray[j][4] == 1;
						var hop = tableArray[i][2] + 1;
						components = [normalTableArray[j][1],normalTableArray[j][0],hop,tableArray[i][3]];
						tableArray.push(components); //alert(tableArray[tableArray.length-1]);
						checkTable();
					}
				}
			}
		}
		
	}
	else{
		message.value="A source node is needed to generate the table"
	}
	
	/*if(tableArray.length>0){
	
		for(var j=0; j<tableArray.length;j++){
			for(var i=0; i<normalTableArray.length;i++){
				if(tableArray[j][1] != "R1"){alert(normalTableArray.length)
					if(normalTableArray[i][0] ==  tableArray[j][1] && normalTableArray[i][1] != tableArray[j][0] ){alert("1")
						var z = tableArray[j][2]+1
						components = [normalTableArray[i][0],normalTableArray[i][1],z,tableArray[j][3],normalTableArray[i][2]];
						tableArray.push(components);
					}
					else if(normalTableArray[i][1] == tableArray[j][1] && normalTableArray[i][0] != tableArray[j][0]){alert("2")
						var z = tableArray[j][2]+1
						components = [normalTableArray[i][1],normalTableArray[i][0],z,tableArray[j][3],normalTableArray[i][2]];
						tableArray.push(components);
					}
				}
			}
		}
	}	
	
	checkTable();
	checkDestTable();*/
	dsdvRoutingTable();
}

function checkTable(){
	//alert("check table");
	for(var i=0;i<tableArray.length;i++){
		for(var j=i+1;j<tableArray.length;j++){
			if(tableArray[i][1] == tableArray[j][1] && tableArray[i][2] == tableArray[j][2]){
				tableArray.splice(j,1);	//alert("splice");										
			}
			else if(tableArray[i][1] == tableArray[j][1] && tableArray[i][2] < tableArray[j][2]){
				tableArray.splice(j,1); //alert("splice");								
			}
		}
	}
}

function removeTableArray(index){
	
	dsdvArray.splice(0,dsdvArray.length);
	
	for(var i=0;i<tableArray.length;i++){
		if(tableArray[i][0] == index || tableArray[i][1] == index){
			tableArray.splice(i,1);	
		}
	}
	
	for(var i=0;i<normalTableArray.length;i++){
		if(normalTableArray[i][0] == index || normalTableArray[i][1] == index){
			normalTableArray.splice(i,1);	
		}
	}
	
	for(var i=0;i<sourceTableArray.length;i++){
		if(sourceTableArray[i][0] == index || sourceTableArray[i][1] == index){
			sourceTableArray.splice(i,1);
		}
	}

}

