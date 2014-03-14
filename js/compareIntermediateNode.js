function compareIntermediateNode(nodeNum){

var components = new Array();
var x;

if(normalArray.length>0){
	for(var j = 0;j < normalArray.length; j++){
		
		if(normalArray[j][0] == nodeNum){
		
			x = j;
		
		}
	
	}

}
	if(receiversArray.length == 1){

		if(receiversArray[0][2] - normalArray[x][2] < 150 && receiversArray[0][2] - normalArray[x][2] > -150 && receiversArray[0][3] - normalArray[x][3] < 150 && receiversArray[0][3] - normalArray[x][3] > -150){
			if (receiversArray[0][2] == normalArray[x][2]){	
				if(normalArray[x][3] < receiversArray[0][3]){ 
					x1 = normalArray[x][2];
					x2 = receiversArray[0][2];
					y1 = parseInt(normalArray[x][3]) + 20;
					y2 = parseInt(receiversArray[0][3]) - 20;
					dist = y2 - y1;
					addLine(normalArray[x][2],receiversArray[0][2],y1,y2);
					
				}
				else if(normalArray[x][3] > receiversArray[0][3]){
					x1 = normalArray[x][2];
					x2 = receiversArray[0][2];
					y1 = parseInt(normalArray[x][3]) - 20;
					y2 = parseInt(receiversArray[0][3]) + 20;
					dist = y1 - y2;
					addLine(normalArray[x][2],receiversArray[0][2],y1,y2);						
				}				
			}
			else if(receiversArray[0][3] == normalArray[x][3]){
				if(normalArray[x][2] < receiversArray[0][2]){
					x1 = parseInt(normalArray[x][2]) + 20;
					x2 = parseInt(receiversArray[0][2]) - 20;
					y1 = receiversArray[0][3];
					y2 = normalArray[x][3];
					dist = x2 - x1;
					addLine(x1,x2,normalArray[x][3],receiversArray[0][3]);
				}
				else if(normalArray[x][2] > receiversArray[0][2]){
					x1 = parseInt(normalArray[x][2]) - 20;
					x2 = parseInt(receiversArray[0][2]) + 20;
					y1 = receiversArray[0][3];
					y2 = normalArray[x][3];
					dist = x1 - x2;
					addLine(x1, x2,normalArray[x][3],receiversArray[0][3]);		
				}				
			}
			else{
				if(normalArray[x][2] < receiversArray[0][2] && normalArray[x][3] < receiversArray[0][3]){

					var a = parseInt(receiversArray[0][2]) - parseInt(normalArray[x][2]);
					var b = parseInt(receiversArray[0][3]) - parseInt(normalArray[x][3]);
					
					if(a>b){ //x increase by 1
						var c = a/a*20;
						var d = b/a*20;
						x1 = parseInt(normalArray[x][2]) + c;
						x2 = parseInt(receiversArray[0][2]) - c;
						y1 = parseInt(normalArray[x][3]) + d;
						y2 = parseInt(receiversArray[0][3]) - d;
					
					}
					else{ //y increase by 1
						var c = a/b*20;
						var d = b/b*20;
						x1 = parseInt(normalArray[x][2]) + c;
						x2 = parseInt(receiversArray[0][2]) - c;
						y1 = parseInt(normalArray[x][3]) + d;
						y2 = parseInt(receiversArray[0][3]) - d;
					}
					
					dist = Math.sqrt(x1*x2+y1*y2)
					addLine(x1,x2,y1,y2);
				}
				else if(normalArray[x][2] > receiversArray[0][2] && normalArray[x][3] < receiversArray[0][3]){
					
					var a = parseInt(normalArray[x][2]) - parseInt(receiversArray[0][2]);
					var b = parseInt(receiversArray[0][3]) - parseInt(normalArray[x][3]);
					
					if(a>b){ //x increase by 1
						var c = a/a*20;
						var d = b/a*20;
						x1 = parseInt(normalArray[x][2]) - c;
						x2 = parseInt(receiversArray[0][2]) + c;
						y1 = parseInt(normalArray[x][3]) + d;
						y2 = parseInt(receiversArray[0][3]) - d;
					
					}
					else{ //y increase by 1
						var c = a/b*20;
						var d = b/b*20;
						x1 = parseInt(normalArray[x][2]) - c;
						x2 = parseInt(receiversArray[0][2]) + c;
						y1 = parseInt(normalArray[x][3]) + d;
						y2 = parseInt(receiversArray[0][3]) - d;
					}
					
					dist = Math.sqrt(x1*x2+y1*y2)
					addLine(x1,x2,y1,y2);
				}
				else if(normalArray[x][2] < receiversArray[0][2] && normalArray[x][3] > receiversArray[0][3]){
					
					var a = parseInt(receiversArray[0][2]) - parseInt(normalArray[x][2]);
					var b = parseInt(normalArray[x][3]) - parseInt(receiversArray[0][3]);
					
					if(a>b){ //x increase by 1
						var c = a/a*20;
						var d = b/a*20;
						x1 = parseInt(normalArray[x][2]) + c;
						x2 = parseInt(receiversArray[0][2]) - c;
						y1 = parseInt(normalArray[x][3]) - d;
						y2 = parseInt(receiversArray[0][3]) + d;
					
					}
					else{ //y increase by 1
						var c = a/b*20;
						var d = b/b*20;
						x1 = parseInt(normalArray[x][2]) + c;
						x2 = parseInt(receiversArray[0][2]) - c;
						y1 = parseInt(normalArray[x][3]) - d;
						y2 = parseInt(receiversArray[0][3]) + d;
					}
					
					dist = Math.sqrt(x1*x2+y1*y2)
					addLine(x1,x2,y1,y2);
					
				}
				else if(normalArray[x][2] > receiversArray[0][2] && normalArray[x][3] > receiversArray[0][3]){
					
					var a = parseInt(normalArray[x][2]) - parseInt(receiversArray[0][2]);
					var b = parseInt(normalArray[x][3]) - parseInt(receiversArray[0][3]);
					
					if(a>b){ //x increase by 1
						var c = a/a*20;
						var d = b/a*20;
						x1 = parseInt(normalArray[x][2]) - c;
						x2 = parseInt(receiversArray[0][2]) + c;
						y1 = parseInt(normalArray[x][3]) - d;
						y2 = parseInt(receiversArray[0][3]) + d;
					
					}
					else{ //y increase by 1
						var c = a/b*20;
						var d = b/b*20;
						x1 = parseInt(normalArray[x][2]) - c;
						x2 = parseInt(receiversArray[0][2]) + c;
						y1 = parseInt(normalArray[x][3]) - d;
						y2 = parseInt(receiversArray[0][3]) + d;
					}
					
					dist = Math.sqrt(x1*x2+y1*y2)
					addLine(x1,x2,y1,y2);
				}
			}
			components = [nodeNum,"R1","R1",dist,1,x1,y1,x2,y2];
			nodeTableArray.push(components);
			createNodeTable(nodeNum,"R1","R1",dist,1,x1,y1,x2,y2);
			addTableArray(nodeNum,"R1");
			components = (nodeNum);
			nodeAvailable.push(components);			
				
		}
	
	}
	
	if(sendersArray.length == 1){
	
		if(sendersArray[0][2] - normalArray[x][2] < 150 && sendersArray[0][2] - normalArray[x][2] > -150 && sendersArray[0][3] - normalArray[x][3] < 150 && sendersArray[0][3] - normalArray[x][3] > -150){
				if (normalArray[x][2] == sendersArray[0][2]){
					if(sendersArray[0][3] < normalArray[x][3]){ 
						x1 = sendersArray[0][2];
						x2 = normalArray[x][2];
						y1 = parseInt(sendersArray[0][3]) + 20;
						y2 = parseInt(normalArray[x][3]) - 20;
						dist = y2 - y1;
						addLine(sendersArray[0][2],normalArray[x][2],y1,y2);	
					}
					else if(sendersArray[0][3] > normalArray[x][3]){
						x1 = sendersArray[0][2];
						x2 = normalArray[x][2];
						y1 = parseInt(sendersArray[0][3]) - 20;
						y2 = parseInt(normalArray[x][3]) + 20;
						dist = y1 - y2;
						addLine(sendersArray[0][2],normalArray[x][2],y1,y2);	
					}				
				}
				else if(normalArray[x][3] == sendersArray[0][3]){
					if(sendersArray[0][2] < normalArray[x][2]){
						x1 = parseInt(sendersArray[0][2]) + 20;
						x2 = parseInt(normalArray[x][2]) - 20;
						y1 = sendersArray[0][3];
						y2 = normalArray[x][3];
						dist = x2 - x1;
						addLine(x1,x2,sendersArray[0][3],normalArray[x][3]);						
					}
					else if(sendersArray[0][2] > normalArray[x][2]){
						x1 = parseInt(sendersArray[0][2]) - 20;
						x2 = parseInt(normalArray[x][2]) + 20;
						y1 = sendersArray[0][3];
						y2 = normalArray[x][3];
						dist = x1 - x2;
						addLine(x1, x2,sendersArray[0][3],normalArray[x][3]);		
					}				
				}
				else{
					if(sendersArray[0][2] < normalArray[x][2] && sendersArray[0][3] < normalArray[x][3]){
						
						var a = parseInt(normalArray[x][2]) - parseInt(sendersArray[0][2]);
						var b = parseInt(normalArray[x][3]) - parseInt(sendersArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(normalArray[x][2]) - c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(normalArray[x][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(normalArray[x][2]) - c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(normalArray[x][3]) - d;
						}
					
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
					else if(sendersArray[0][2] > normalArray[x][2] && sendersArray[0][3] < normalArray[x][3]){
						
						var a = parseInt(sendersArray[0][2]) - parseInt(normalArray[x][2]);
						var b = parseInt(normalArray[x][3]) - parseInt(sendersArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(normalArray[x][2]) + c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(normalArray[x][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(normalArray[x][2]) + c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(normalArray[x][3]) - d;
						}
					
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
					else if(sendersArray[0][2] < normalArray[x][2] && sendersArray[0][3] > normalArray[x][3]){
						
						var a = parseInt(normalArray[x][2]) - parseInt(sendersArray[0][2]);
						var b = parseInt(sendersArray[0][3]) - parseInt(normalArray[x][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(normalArray[x][2]) - c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(normalArray[x][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(normalArray[x][2]) - c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(normalArray[x][3]) + d;
						}
					
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
					else if(sendersArray[0][2] > normalArray[x][2] && sendersArray[0][3] > normalArray[x][3]){

						var a = parseInt(sendersArray[0][2]) - parseInt(normalArray[x][2]);
						var b = parseInt(sendersArray[0][3]) - parseInt(normalArray[x][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(normalArray[x][2]) + c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(normalArray[x][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(normalArray[x][2]) + c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(normalArray[x][3]) + d;
						}
					
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
				}
			components = [nodeNum,"S1","S1",dist,1,x2,y2,x1,y1]; 
			nodeTableArray.push(components);
			createNodeTable(nodeNum,"S1","S1",dist,1,x2,y2,x1,y1);
			addTableArray(nodeNum,"S1");
			components = (nodeNum);
			nodeAvailable.push(components);	
		}
	}
	
	if(normalArray.length>1){
		for(var i = 0;i < normalArray.length; i++){
			if(normalArray[i][0] != nodeNum){
			if(normalArray[x][2] - normalArray[i][2] < 150 && normalArray[x][2] - normalArray[i][2] > -150 && normalArray[x][3] - normalArray[i][3] < 150 && normalArray[x][3] - normalArray[i][3] > -150){
				if (normalArray[i][2] == normalArray[x][2]){	
					if(normalArray[i][3] < normalArray[x][3]){
						x1 = normalArray[i][2];
						x2 = normalArray[x][2];
						y1 = parseInt(normalArray[i][3]) + 20;
						y2 = parseInt(normalArray[x][3]) - 20;
						dist = y2 - y1;
						addLine(normalArray[i][2],normalArray[x][2],y1,y2);
					}
					else if(normalArray[i][3] > normalArray[x][3]){
						x1 = normalArray[i][2];
						x2 = normalArray[x][2];
						y1 = parseInt(normalArray[i][3]) - 20;
						y2 = parseInt(normalArray[x][3]) + 20;
						dist = y1 - y2;
						addLine(normalArray[i][2],normalArray[x][2],y1,y2);		
					}				
				}
				else if(normalArray[i][3] == normalArray[x][3]){
					if(normalArray[i][2] < normalArray[x][2]){
						x1 = parseInt(normalArray[i][2]) + 20;
						x2 = parseInt(normalArray[x][2]) - 20;
						y1 = normalArray[i][3];
						y2 = normalArray[x][3];
						dist = x2 - x1;
						addLine(x1,x2,normalArray[i][3],normalArray[x][3]);
					}
					else if(normalArray[i][2] > normalArray[x][2]){
						x1 = parseInt(normalArray[i][2]) - 20;
						x2 = parseInt(normalArray[x][2]) + 20;
						y1 = normalArray[i][3];
						y2 = normalArray[x][3];
						dist = x1 - x2;
						addLine(x1, x2,normalArray[i][3],normalArray[x][3]);
					}				
				}
				else{
					if(normalArray[i][2] < normalArray[x][2] && normalArray[i][3] < normalArray[x][3]){
						
						var a = parseInt(normalArray[x][2]) - parseInt(normalArray[i][2]);
						var b = parseInt(normalArray[x][3]) - parseInt(normalArray[i][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(normalArray[i][2]) + c;
							x2 = parseInt(normalArray[x][2]) - c;
							y1 = parseInt(normalArray[i][3]) + d;
							y2 = parseInt(normalArray[x][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(normalArray[i][2]) + c;
							x2 = parseInt(normalArray[x][2]) - c;
							y1 = parseInt(normalArray[i][3]) + d;
							y2 = parseInt(normalArray[x][3]) - d;
						}
					
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
					else if(normalArray[i][2] > normalArray[x][2] && normalArray[i][3] < normalArray[x][3]){
						
						var a = parseInt(normalArray[i][2]) - parseInt(normalArray[x][2]);
						var b = parseInt(normalArray[x][3]) - parseInt(normalArray[i][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(normalArray[i][2]) - c;
							x2 = parseInt(normalArray[x][2]) + c;
							y1 = parseInt(normalArray[i][3]) + d;
							y2 = parseInt(normalArray[x][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(normalArray[i][2]) - c;
							x2 = parseInt(normalArray[x][2]) + c;
							y1 = parseInt(normalArray[i][3]) + d;
							y2 = parseInt(normalArray[x][3]) - d;
						}
					
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
					else if(normalArray[i][2] < normalArray[x][2] && normalArray[i][3] > normalArray[x][3]){
					
						var a = parseInt(normalArray[x][2]) - parseInt(normalArray[i][2]);
						var b = parseInt(normalArray[i][3]) - parseInt(normalArray[x][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(normalArray[i][2]) + c;
							x2 = parseInt(normalArray[x][2]) - c;
							y1 = parseInt(normalArray[i][3]) - d;
							y2 = parseInt(normalArray[x][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(normalArray[i][2]) + c;
							x2 = parseInt(normalArray[x][2]) - c;
							y1 = parseInt(normalArray[i][3]) - d;
							y2 = parseInt(normalArray[x][3]) + d;
						}
					
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
					else if(normalArray[i][2] > normalArray[x][2] && normalArray[i][3] > normalArray[x][3]){
						
						var a = parseInt(normalArray[i][2]) - parseInt(normalArray[x][2]);
						var b = parseInt(normalArray[i][3]) - parseInt(normalArray[x][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(normalArray[i][2]) - c;
							x2 = parseInt(normalArray[x][2]) + c;
							y1 = parseInt(normalArray[i][3]) - d;
							y2 = parseInt(normalArray[x][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(normalArray[i][2]) - c;
							x2 = parseInt(normalArray[x][2]) + c;
							y1 = parseInt(normalArray[i][3]) - d;
							y2 = parseInt(normalArray[x][3]) + d;
						}
					
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
				}
				
				components = [nodeNum,normalArray[i][0],normalArray[i][0],dist,1,x2,y2,x1,y1];
				nodeTableArray.push(components);
				createNodeTable(nodeNum,normalArray[i][0],normalArray[i][0],dist,1,x2,y2,x1,y1);
				addTableArray(nodeNum,normalArray[i][0]);
				components = (nodeNum);
				nodeAvailable.push(components);		
				
			}
		}
	
	}

}
}