function removeLine(index){
	
	if(index == "S1"){
		lineArrayS.splice(0,1);	
	}
	else if(index == "R1"){
		for(var i=0;i<lineArray.length;i++){
			if(lineArray[i][3] == index){
			
				lineArray.splice(i,1);
			}
		}	
	}		
	else{
		for(var i=0;i<lineArray.length;i++){
			
		
			if(lineArray[i][0] == index || lineArray[i][3] == index){
				
				lineArray.splice(i,1);
				
			}
		}
		for(var i=0;i<lineArrayS.length;i++){
		
			if(lineArray[i][3] == index){
		
				lineArray.splice(i,1);

			}
		}
	}

}