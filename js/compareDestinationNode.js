function compareDestinationNode(){

var components = new Array();

	if(normalArray.length>0){
		for(var i = 0;i < normalArray.length; i++){
			
			if(receiversArray[0][2] - normalArray[i][2] < 150 && receiversArray[0][2] - normalArray[i][2] > -150 && receiversArray[0][3] - normalArray[i][3] < 150 && receiversArray[0][3] - normalArray[i][3] > -150){
				if (receiversArray[0][2] == normalArray[i][2]){
					if(normalArray[i][3] < receiversArray[0][3]){
						x1 = parseInt(normalArray[i][2]);
						x2 = parseInt(receiversArray[0][2]);
						y1 = parseInt(normalArray[i][3]) + 20;
						y2 = parseInt(receiversArray[0][3]) - 20;
						dist = y2 - y1;
						text = i + 1;					
						addLine(normalArray[i][2],receiversArray[0][2],y1,y2);
					}
					else if(normalArray[i][3] > receiversArray[0][3]){
						x1 = parseInt(normalArray[i][2]);
						x2 = parseInt(receiversArray[0][2]);
						y1 = parseInt(normalArray[i][3]) - 20;
						y2 = parseInt(receiversArray[0][3]) + 20;
						dist = y1 - y2;
						text = i + 1;
						addLine(normalArray[i][2],receiversArray[0][2],y1,y2);
					}				
				}
				else if(receiversArray[0][3] == normalArray[i][3]){
					if(normalArray[i][2] < receiversArray[0][2]){
						x1 = parseInt(normalArray[i][2]) + 20;
						x2 = parseInt(receiversArray[0][2]) - 20;
						y1 = parseInt(normalArray[i][3]);
						y2 = parseInt(receiversArray[0][3]);
						dist = x2 - x1;
						text = i + 1;
						addLine(x1,x2,normalArray[i][3],receiversArray[0][3]);
					}
					else if(normalArray[i][2] > receiversArray[0][2]){
						x1 = parseInt(normalArray[i][2]) - 20;
						x2 = parseInt(receiversArray[0][2]) + 20;
						y1 = parseInt(normalArray[i][3]);
						y2 = parseInt(receiversArray[0][3]);
						dist = x1 - x2;
						text = i + 1;
						addLine(x1,x2,normalArray[i][3],receiversArray[0][3]);
					}				
				}
				else{
					if(normalArray[i][2] < receiversArray[0][2] && normalArray[i][3] < receiversArray[0][3]){
							
						var a = parseInt(receiversArray[0][2]) - parseInt(normalArray[i][2]);
						var b = parseInt(receiversArray[0][3]) - parseInt(normalArray[i][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(normalArray[i][2]) + c;
							x2 = parseInt(receiversArray[0][2]) - c;
							y1 = parseInt(normalArray[i][3]) + d;
							y2 = parseInt(receiversArray[0][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(normalArray[i][2]) + c;
							x2 = parseInt(receiversArray[0][2]) - c;
							y1 = parseInt(normalArray[i][3]) + d;
							y2 = parseInt(receiversArray[0][3]) - d;
						}	
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(normalArray[i][2] > receiversArray[0][2] && normalArray[i][3] < receiversArray[0][3]){
						
						var a = parseInt(normalArray[i][2]) - parseInt(receiversArray[0][2]);
						var b = parseInt(receiversArray[0][3]) - parseInt(normalArray[i][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(normalArray[i][2]) - c;
							x2 = parseInt(receiversArray[0][2]) + c;
							y1 = parseInt(normalArray[i][3]) + d;
							y2 = parseInt(receiversArray[0][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(normalArray[i][2]) - c;
							x2 = parseInt(receiversArray[0][2]) + c;
							y1 = parseInt(normalArray[i][3]) + d;
							y2 = parseInt(receiversArray[0][3]) - d;
						}	
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(normalArray[i][2] < receiversArray[0][2] && normalArray[i][3] > receiversArray[0][3]){
						
						var a = parseInt(receiversArray[0][2]) - parseInt(normalArray[i][2]);
						var b = parseInt(normalArray[i][3]) - parseInt(receiversArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(normalArray[i][2]) + c;
							x2 = parseInt(receiversArray[0][2]) - c;
							y1 = parseInt(normalArray[i][3]) - d;
							y2 = parseInt(receiversArray[0][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(normalArray[i][2]) + c;
							x2 = parseInt(receiversArray[0][2]) - c;
							y1 = parseInt(normalArray[i][3]) - d;
							y2 = parseInt(receiversArray[0][3]) + d;
						}	
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(normalArray[i][2] > receiversArray[0][2] && normalArray[i][3] > receiversArray[0][3]){
						
						var a = parseInt(normalArray[i][2]) - parseInt(receiversArray[0][2]);
						var b = parseInt(normalArray[i][3]) - parseInt(receiversArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(normalArray[i][2]) - c;
							x2 = parseInt(receiversArray[0][2]) + c;
							y1 = parseInt(normalArray[i][3]) - d;
							y2 = parseInt(receiversArray[0][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(normalArray[i][2]) - c;
							x2 = parseInt(receiversArray[0][2]) + c;
							y1 = parseInt(normalArray[i][3]) - d;
							y2 = parseInt(receiversArray[0][3]) + d;
						}	
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);
					}
				}
					components = ["R1",normalArray[i][0],normalArray[i][0],dist,1,x2,y2,x1,y1];
					nodeTableArray.push(components);
					createNodeTable("R1",normalArray[i][0],normalArray[i][0],dist,1,x2,y2,x1,y1);
					//components = [normalArray[i][0],"R1","R1",dist,1];
					//nodeTableArray.push(components);
					//createNodeTable(normalArray[i][0],"R1","R1",dist,1);
					addTableArray(normalArray[i][0],"R1");
					components = ("R1");
					nodeAvailable.push(components);
			}
					
		}
	
	}
	
	if(sendersArray.length>0){
	
		if(receiversArray[0][2] - sendersArray[0][2] < 150 && receiversArray[0][2] - sendersArray[0][2] > -150 && receiversArray[0][3] - sendersArray[0][3] < 150 && receiversArray[0][3] - sendersArray[0][3] > -150){
			if (receiversArray[0][2] == sendersArray[0][2]){	
					if(sendersArray[0][3] < receiversArray[0][3]){
						x1 = parseInt(sendersArray[0][2]);
						x2 = parseInt(receiversArray[0][2]);
						y1 = parseInt(sendersArray[0][3]) + 20;
						y2 = parseInt(receiversArray[0][3]) - 20;
						dist = y2 - y1;
						addLine(sendersArray[0][2],receiversArray[0][2],y1,y2);
					}
					else if(sendersArray[0][3] > receiversArray[0][3]){
						x1 = parseInt(sendersArray[0][2]);
						x2 = parseInt(receiversArray[0][2]);
						y1 = parseInt(sendersArray[0][3]) - 20;
						y2 = parseInt(receiversArray[0][3]) + 20;
						dist = y1 - y2;
						addLine(sendersArray[0][2],receiversArray[0][2],y1,y2);							
					}				
				}
				else if(receiversArray[0][3] == sendersArray[0][3]){
					if(sendersArray[0][2] < receiversArray[0][2]){
						x1 = parseInt(sendersArray[0][2]) + 20;
						x2 = parseInt(receiversArray[0][2]) - 20;
						y1 = parseInt(sendersArray[0][3]);
						y2 = parseInt(receiversArray[0][3]);
						dist = x2 - x1;
						addLine(x1,x2,sendersArray[0][3],receiversArray[0][3]);
					}
					else if(sendersArray[0][2] > receiversArray[0][2]){
						x1 = parseInt(sendersArray[0][2]) - 20;
						x2 = parseInt(receiversArray[0][2]) + 20;
						y1 = parseInt(sendersArray[0][3]);
						y2 = parseInt(receiversArray[0][3]);
						dist = x1 - x2;
						addLine(x1, x2,sendersArray[0][3],receiversArray[0][3]);			
					}				
				}
				else{
					if(sendersArray[0][2] < receiversArray[0][2] && sendersArray[0][3] < receiversArray[0][3]){
							
						var a = parseInt(receiversArray[0][2]) - parseInt(sendersArray[0][2]);
						var b = parseInt(receiversArray[0][3]) - parseInt(sendersArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(receiversArray[0][2]) - c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(receiversArray[0][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(receiversArray[0][2]) - c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(receiversArray[0][3]) - d;
						}	
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(sendersArray[0][2] > receiversArray[0][2] && sendersArray[0][3] < receiversArray[0][3]){
						
						var a = parseInt(sendersArray[0][2]) - parseInt(receiversArray[0][2]);
						var b = parseInt(receiversArray[0][3]) - parseInt(sendersArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(receiversArray[0][2]) + c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(receiversArray[0][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(receiversArray[0][2]) + c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(receiversArray[0][3]) - d;
						}
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(sendersArray[0][2] < receiversArray[0][2] && sendersArray[0][3] > receiversArray[0][3]){
						
						var a = parseInt(receiversArray[0][2]) - parseInt(sendersArray[0][2]);
						var b = parseInt(sendersArray[0][3]) - parseInt(receiversArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(receiversArray[0][2]) - c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(receiversArray[0][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(receiversArray[0][2]) - c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(receiversArray[0][3]) + d;
						}
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(sendersArray[0][2] > receiversArray[0][2] && sendersArray[0][3] > receiversArray[0][3]){
						
						var a = parseInt(sendersArray[0][2]) - parseInt(receiversArray[0][2]);
						var b = parseInt(sendersArray[0][3]) - parseInt(receiversArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(receiversArray[0][2]) + c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(receiversArray[0][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(receiversArray[0][2]) + c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(receiversArray[0][3]) + d;
						}		
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);						
					}
				}

			components = ["R1","S1","S1",dist,1,x2,y2,x1,y1];
			nodeTableArray.push(components);
			createNodeTable("R1","S1","S1",dist,1,x2,y2,x1,y1);
			addTableArray("S1","R1");
			components = ("R1");
			nodeAvailable.push(components);
		}
		
	}
}