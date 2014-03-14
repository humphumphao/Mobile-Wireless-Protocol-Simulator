function saveNetworkTopology(){

		if(sendersArray.length>0){

		var text = "S1";
		context.fillStyle = "green";
		context.beginPath();
		var radius = 20; // for example
		context.arc(sendersArray[0][2], sendersArray[0][3], radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		context.fillStyle = "black";
		context.font = "20px Georgia";
		context.textBaseline = "top";
		context.fillText(text, sendersArray[0][2]-radius/4 ,sendersArray[0][3]-radius/2);
		
		saveSourceNode();
	
	}
	
	if(receiversArray.length>0){
	
		var text = "R1";
		context.fillStyle = "red";
		context.beginPath();
		var radius = 20; // for example
		context.arc(receiversArray[0][2], receiversArray[0][3], radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		context.fillStyle = "black";
		context.font = "20px Georgia";
		context.textBaseline = "top";
		context.fillText(text, receiversArray[0][2]-radius/4 ,receiversArray[0][3]-radius/2);
		
		saveDestinationNode();
	
	}
	
	if(normalArray.length>0){
	
		for(var i=0;i<normalArray.length;i++){
		
			var text = normalArray[i][0];
			context.fillStyle = "grey";
			context.beginPath();
			var radius = 20; // for example
			context.arc(normalArray[i][2], normalArray[i][3], radius, 0, Math.PI * 2);
			context.closePath();
			context.fill();
			context.fillStyle = "black";
			context.font = "20px Georgia";
			context.textBaseline = "top";
			context.fillText(text, normalArray[i][2]-radius/4 ,normalArray[i][3]-radius/2);
			context.closePath();
			
			saveIntermediateNode(text);
		
		}
	}

}

function saveIntermediateNode(nodeNum){

var x1,x2,y1,y2,text;	
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
				if(normalArray[0][3] < receiversArray[0][3]){
					y1 = parseInt(normalArray[x][3]) + 20;
					y2 = parseInt(receiversArray[0][3]) - 20;
					addLine(normalArray[x][2],receiversArray[0][2],y1,y2);
				}
				else if(normalArray[x][3] > receiversArray[0][3]){
					y1 = parseInt(normalArray[x][3]) - 20;
					y2 = parseInt(receiversArray[0][3]) + 20;
					addLine(normalArray[x][2],receiversArray[0][2],y1,y2);							
				}				
			}
			else if(receiversArray[0][3] == normalArray[x][3]){
				if(normalArray[x][2] < receiversArray[0][2]){
					x1 = parseInt(normalArray[x][2]) + 20;
					x2 = parseInt(receiversArray[0][2]) - 20;
					addLine(x1,x2,normalArray[x][3],receiversArray[0][3]);

				}
				else if(normalArray[x][2] > receiversArray[0][2]){
					x1 = parseInt(normalArray[x][2]) - 20;
					x2 = parseInt(receiversArray[0][2]) + 20;
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
					addLine(x1,x2,y1,y2);
				}
			}
				
		}
	
	}
	
	if(sendersArray.length == 1){
	
		if(sendersArray[0][2] - normalArray[x][2] < 150 && sendersArray[0][2] - normalArray[x][2] > -150 && sendersArray[0][3] - normalArray[x][3] < 150 && sendersArray[0][3] - normalArray[x][3] > -150){
				if (normalArray[x][2] == sendersArray[0][2]){
					if(sendersArray[0][3] < normalArray[x][3]){ 
						y1 = parseInt(sendersArray[0][3]) + 20;
						y2 = parseInt(normalArray[x][3]) - 20;
						addLine(sendersArray[0][2],normalArray[x][2],y1,y2);
					}
					else if(sendersArray[0][3] > normalArray[x][3]){
						y1 = parseInt(sendersArray[0][3]) - 20;
						y2 = parseInt(normalArray[x][3]) + 20;
						addLine(sendersArray[0][2],normalArray[x][2],y1,y2);
					}				
				}
				else if(normalArray[x][3] == sendersArray[0][3]){
					if(sendersArray[0][2] < normalArray[x][2]){
						x1 = parseInt(sendersArray[0][2]) + 20;
						x2 = parseInt(normalArray[x][2]) - 20;
						addLine(x1,x2,sendersArray[0][3],normalArray[x][3]);				
					}
					else if(sendersArray[0][2] > normalArray[x][2]){
						x1 = parseInt(sendersArray[0][2]) - 20;
						x2 = parseInt(normalArray[x][2]) + 20;
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
						addLine(x1,x2,y1,y2);
					}
				}		
		}
	}
	
	if(normalArray.length>1){
		for(var i = 0;i < normalArray.length; i++){
			
			if(normalArray[x][2] - normalArray[i][2] < 150 && normalArray[x][2] - normalArray[i][2] > -150 && normalArray[x][3] - normalArray[i][3] < 150 && normalArray[x][3] - normalArray[i][3] > -150){
				if (normalArray[i][2] == normalArray[x][2]){	
					if(normalArray[i][3] < normalArray[x][3]){
						y1 = parseInt(normalArray[i][3]) + 20;
						y2 = parseInt(normalArray[x][3]) - 20;
						addLine(normalArray[i][2],normalArray[x][2],y1,y2);
					}
					else if(normalArray[i][3] > normalArray[x][3]){
						y1 = parseInt(normalArray[i][3]) - 20;
						y2 = parseInt(normalArray[x][3]) + 20;
						addLine(normalArray[i][2],normalArray[x][2],y1,y2);	
					}				
				}
				else if(normalArray[i][3] == normalArray[x][3]){
					if(normalArray[i][2] < normalArray[x][2]){
						x1 = parseInt(normalArray[i][2]) + 20;
						x2 = parseInt(normalArray[x][2]) - 20;
						addLine(x1,x2,normalArray[i][3],normalArray[x][3]);	
					}
					else if(normalArray[i][2] > normalArray[x][2]){
						x1 = parseInt(normalArray[i][2]) - 20;
						x2 = parseInt(normalArray[x][2]) + 20;
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
						addLine(x1,x2,y1,y2);	
					}
				}
				
			}
		}
	
	}


}

function saveDestinationNode(){
	
var x1,x2,y1,y2,text;

	if(normalArray.length>0){
		for(var i = 0;i < normalArray.length; i++){
			
			if(receiversArray[0][2] - normalArray[i][2] < 150 && receiversArray[0][2] - normalArray[i][2] > -150 && receiversArray[0][3] - normalArray[i][3] < 150 && receiversArray[0][3] - normalArray[i][3] > -150){
				if (receiversArray[0][2] == normalArray[i][2]){
					if(normalArray[i][3] < receiversArray[0][3]){
						y1 = parseInt(normalArray[i][3]) + 20;
						y2 = parseInt(receiversArray[0][3]) - 20;
						addLine(normalArray[i][2],receiversArray[0][2],y1,y2);
					}
					else if(normalArray[i][3] > receiversArray[0][3]){
						y1 = parseInt(normalArray[i][3]) - 20;
						y2 = parseInt(receiversArray[0][3]) + 20;
						addLine(normalArray[i][2],receiversArray[0][2],y1,y2);		
					}				
				}
				else if(receiversArray[0][3] == normalArray[i][3]){
					if(normalArray[i][2] < receiversArray[0][2]){
						x1 = parseInt(normalArray[i][2]) + 20;
						x2 = parseInt(receiversArray[0][2]) - 20;
						addLine(x1,x2,normalArray[i][3],receiversArray[0][3]);
					}
					else if(normalArray[i][2] > receiversArray[0][2]){
						x1 = parseInt(normalArray[i][2]) - 20;
						x2 = parseInt(receiversArray[0][2]) + 20;
						addLine(x1, x2,normalArray[i][3],receiversArray[0][3]);	
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
						addLine(x1,x2,y1,y2);
					}
				}
				
			}
		}
	
	}
	
	if(sendersArray.length>0){
	
		if(receiversArray[0][2] - sendersArray[0][2] < 150 && receiversArray[0][2] - sendersArray[0][2] > -150 && receiversArray[0][3] - sendersArray[0][3] < 150 && receiversArray[0][3] - sendersArray[0][3] > -150){
			if (receiversArray[0][2] == sendersArray[0][2]){	
					if(sendersArray[0][3] < receiversArray[0][3]){
						y1 = parseInt(sendersArray[0][3]) + 20;
						y2 = parseInt(receiversArray[0][3]) - 20;
						addLine(sendersArray[0][2],receiversArray[0][2],y1,y2);
					}
					else if(sendersArray[0][3] > receiversArray[0][3]){
						y1 = parseInt(sendersArray[0][3]) - 20;
						y2 = parseInt(receiversArray[0][3]) + 20;
						addLine(sendersArray[0][2],receiversArray[0][2],y1,y2);							
					}				
				}
				else if(receiversArray[0][3] == sendersArray[0][3]){
					if(sendersArray[0][2] < receiversArray[0][2]){
						x1 = parseInt(sendersArray[0][2]) + 20;
						x2 = parseInt(receiversArray[0][2]) - 20;
						addLine(x1,x2,sendersArray[0][3],receiversArray[0][3]);
					}
					else if(sendersArray[0][2] > receiversArray[0][2]){
						x1 = parseInt(sendersArray[0][2]) - 20;
						x2 = parseInt(receiversArray[0][2]) + 20;
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
						addLine(x1,x2,y1,y2);
					}
				}
			
		
		}
		
	}

}

function saveSourceNode(){
var x1,x2,y1,y2,text;

	if(normalArray.length>0){
		for(var i = 0;i < normalArray.length; i++){
			if(sendersArray[0][2] - normalArray[i][2] < 150 && sendersArray[0][2] - normalArray[i][2] > -150 && sendersArray[0][3] - normalArray[i][3] < 150 && sendersArray[0][3] - normalArray[i][3] > -150){
				if (normalArray[i][2] == sendersArray[0][2]){	
					if(sendersArray[0][3] < normalArray[i][3]){
						y1 = parseInt(sendersArray[0][3]) + 20;
						y2 = parseInt(normalArray[i][3]) - 20;
						addLine(sendersArray[0][2],normalArray[i][2],y1,y2);
					}
					else if(sendersArray[0][3] > normalArray[i][3]){
						y1 = parseInt(sendersArray[0][3]) - 20;
						y2 = parseInt(normalArray[i][3]) + 20;
						addLine(sendersArray[0][2],normalArray[i][2],y1,y2);					
					}				
				}
				else if(normalArray[i][3] == sendersArray[0][3]){
					if(sendersArray[0][2] < normalArray[i][2]){ 
						x1 = parseInt(sendersArray[0][2]) + 20;
						x2 = parseInt(normalArray[i][2]) - 20;
						addLine(x1,x2,sendersArray[i][3],normalArray[i][3]);
					}
					else if(sendersArray[0][2] > normalArray[i][2]){
						x1 = parseInt(sendersArray[0][2]) - 20;
						x2 = parseInt(normalArray[i][2]) + 20;
						addLine(x1,x2,sendersArray[0][3],normalArray[i][3]);					
					}				
				}
				else{
					if(sendersArray[0][2] < normalArray[i][2] && sendersArray[0][3] < normalArray[i][3]){
						
						var a = parseInt(normalArray[i][2]) - parseInt(sendersArray[0][2]);
						var b = parseInt(normalArray[i][3]) - parseInt(sendersArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(normalArray[i][2]) - c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(normalArray[i][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(normalArray[i][2]) - c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(normalArray[i][3]) - d;
						}
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(sendersArray[0][2] > normalArray[i][2] && sendersArray[0][3] < normalArray[i][3]){

						var a = parseInt(sendersArray[0][2]) - parseInt(normalArray[i][2]);
						var b = parseInt(normalArray[i][3]) - parseInt(sendersArray[0][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(normalArray[i][2]) + c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(normalArray[i][3]) - d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(normalArray[i][2]) + c;
							y1 = parseInt(sendersArray[0][3]) + d;
							y2 = parseInt(normalArray[i][3]) - d;
						}	
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(sendersArray[0][2] < normalArray[i][2] && sendersArray[0][3] > normalArray[i][3]){
						
						var a = parseInt(normalArray[i][2]) - parseInt(sendersArray[0][2]);
						var b = parseInt(sendersArray[0][3]) - parseInt(normalArray[i][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(normalArray[i][2]) - c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(normalArray[i][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) + c;
							x2 = parseInt(normalArray[i][2]) - c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(normalArray[i][3]) + d;
						}	
						dist = Math.sqrt(x1*x2+y1*y2)
						addLine(x1,x2,y1,y2);	
					}
					else if(sendersArray[0][2] > normalArray[i][2] && sendersArray[0][3] > normalArray[i][3]){
						
						var a = parseInt(sendersArray[0][2]) - parseInt(normalArray[i][2]);
						var b = parseInt(sendersArray[0][3]) - parseInt(normalArray[i][3]);
						
						if(a>b){ //x increase by 1
							var c = a/a*20;
							var d = b/a*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(normalArray[i][2]) + c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(normalArray[i][3]) + d;
						
						}
						else{ //y increase by 1
							var c = a/b*20;
							var d = b/b*20;
							x1 = parseInt(sendersArray[0][2]) - c;
							x2 = parseInt(normalArray[i][2]) + c;
							y1 = parseInt(sendersArray[0][3]) - d;
							y2 = parseInt(normalArray[i][3]) + d;
						}
						addLine(x1,x2,y1,y2);		
					}
				}
				
			}
		}
	
	}
	
	if(receiversArray.length>0){
	
		if(sendersArray[0][2] - receiversArray[0][2] < 150 && sendersArray[0][2] - receiversArray[0][2] > -150 && sendersArray[0][3] - receiversArray[0][3] < 150 && sendersArray[0][3] - receiversArray[0][3] > -150){
			if (receiversArray[0][2] == sendersArray[0][2]){	
					if(sendersArray[0][3] < receiversArray[0][3]){
						y1 = parseInt(sendersArray[0][3]) + 20;
						y2 = parseInt(receiversArray[0][3]) - 20;
						addLine(sendersArray[0][2],receiversArray[0][2],y1,y2);
					}
					else if(sendersArray[0][3] > receiversArray[0][3]){
						y1 = parseInt(sendersArray[0][3]) - 20;
						y2 = parseInt(receiversArray[0][3]) + 20;
						addLine(sendersArray[0][2],receiversArray[0][2],y1,y2);	
					}				
				}
				else if(receiversArray[0][3] == sendersArray[0][3]){
					if(sendersArray[0][2] < receiversArray[0][2]){
						x1 = parseInt(sendersArray[0][2]) + 20;
						x2 = parseInt(receiversArray[0][2]) - 20;
						addLine(x1,x2,sendersArray[0][3],receiversArray[0][3]);
					}
					else if(sendersArray[0][2] > receiversArray[0][2]){
						x1 = parseInt(sendersArray[0][2]) - 20;
						x2 = parseInt(receiversArray[0][2]) + 20;
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
						addLine(x1,x2,y1,y2);
					}
				}


		}
		
	}

}


