function motion(){ 
		
	if(motionCount<dsdvArray.length){
		//alert(motionCount)
		if(dsdvArray[motionCount][5] == dsdvArray[motionCount][7]){ //X Coord is same 
			if(dsdvArray[motionCount][6] < dsdvArray[motionCount][8]){ 
			
				var x = parseInt(dsdvArray[motionCount][5])-25;
				var y = parseInt(dsdvArray[motionCount][6])-25;
				var x1 = parseInt(dsdvArray[motionCount][7])-25;
				var y1 = parseInt(dsdvArray[motionCount][8])-25;
				motionCount++;
				movementDown(x,y-20,x1,y1+20);
				
			}
			else if(dsdvArray[motionCount][6] > dsdvArray[motionCount][8]){ 
				
				var x = parseInt(dsdvArray[motionCount][5])-25;
				var y = parseInt(dsdvArray[motionCount][6])-25;
				var x1 = parseInt(dsdvArray[motionCount][7])-25;
				var y1 = parseInt(dsdvArray[motionCount][8])-25;
				motionCount++;
				movementUp(x,y+20,x1,y1-20);
				
			}
			

		}
		else if(dsdvArray[motionCount][6] == dsdvArray[motionCount][8]){ //Y Coord is same
			if(dsdvArray[motionCount][5] < dsdvArray[motionCount][7]){
				var x = parseInt(dsdvArray[motionCount][5])-25;
				var y = parseInt(dsdvArray[motionCount][6])-25;
				var x1 = parseInt(dsdvArray[motionCount][7])-25;
				var y1 = parseInt(dsdvArray[motionCount][8])-25;
				motionCount++;
				movementRight(x-20,y,x1+20,y1); 
				
			}
			else if(dsdvArray[motionCount][5] > dsdvArray[motionCount][7]){
				var x = parseInt(dsdvArray[motionCount][5])-25;
				var y = parseInt(dsdvArray[motionCount][6])-25;
				var x1 = parseInt(dsdvArray[motionCount][7])-25;
				var y1 = parseInt(dsdvArray[motionCount][8])-25;
				motionCount++;
				movementLeft(x+20,y,x1-20,y1); 
			}
			
		}
		else{
		
			if(dsdvArray[motionCount][5] < dsdvArray[motionCount][7] && dsdvArray[motionCount][6] < dsdvArray[motionCount][8]){
				var x = parseInt(dsdvArray[motionCount][5])-25;
				var y = parseInt(dsdvArray[motionCount][6])-25;
				var x1 = parseInt(dsdvArray[motionCount][7])-25;
				var y1 = parseInt(dsdvArray[motionCount][8])-25;
				motionCount++;
				var a = x1 - x;
				var b = y1 - y;
				if(a>b){ //x increase by 1
					var c = a/a;
					var d = b/a;
					movementSE1(x-c*20,y-d*20,x1+c*20,y1+d*20,c,d);
				}
				else{ //y increase by 1
					var c = a/b;
					var d = b/b;
					movementSE2(x-c*20,y-d*20,x1+c*20,y1+d*20,c,d);
				}


			}
			else if(dsdvArray[motionCount][5] < dsdvArray[motionCount][7] && dsdvArray[motionCount][6] > dsdvArray[motionCount][8]){
				var x = parseInt(dsdvArray[motionCount][5])-25;
				var y = parseInt(dsdvArray[motionCount][6])-25;
				var x1 = parseInt(dsdvArray[motionCount][7])-25;
				var y1 = parseInt(dsdvArray[motionCount][8])-25;
				motionCount++;
				var a = x1 - x;
				var b = y - y1;
				if(a>b){ //x increase by 1
					var c = a/a;
					var d = b/a;
					movementNE1(x-c*20,y+d*20,x1+c*20,y1-d*20,c,d);
				}
				else{ //y increase by 1
					var c = a/b;
					var d = b/b;
					movementNE1(x-c*20,y+d*20,x1+c*20,y1-d*20,c,d);
				}
				
			}
			else if(dsdvArray[motionCount][5] > dsdvArray[motionCount][7] && dsdvArray[motionCount][6] < dsdvArray[motionCount][8]){
				var x = parseInt(dsdvArray[motionCount][5])-25;
				var y = parseInt(dsdvArray[motionCount][6])-25;
				var x1 = parseInt(dsdvArray[motionCount][7])-25;
				var y1 = parseInt(dsdvArray[motionCount][8])-25;
				motionCount++;
				var a = x - x1;
				var b = y1 - y;
				if(a>b){ //x increase by 1
					var c = a/a;
					var d = b/a;
					movementSW2(x+c*20,y-d*20,x1-c*20,y1+d*20,c,d);
				}
				else{ //y increase by 1
					var c = a/b;
					var d = b/b;
					movementSW2(x+c*20,y-d*20,x1-c*20,y1+d*20,c,d);
				}
			}
			else if(dsdvArray[motionCount][5] > dsdvArray[motionCount][7] && dsdvArray[motionCount][6] > dsdvArray[motionCount][8]){
				var x = parseInt(dsdvArray[motionCount][5])-25;
				var y = parseInt(dsdvArray[motionCount][6])-25;
				var x1 = parseInt(dsdvArray[motionCount][7])-25;
				var y1 = parseInt(dsdvArray[motionCount][8])-25;
				motionCount++;
				var a = x - x1;
				var b = y - y1;
				if(a>b){ //x increase by 1
					var c = a/a;
					var d = b/a;
					movementNW1(x+c*20,y-d*20,x1+c*20,y1-d*20,c,d);
				}
				else{ //y increase by 1
					var c = a/b;
					var d = b/b;
					movementNW2(x+c*20,y-d*20,x1+c*20,y1-d*20,c,d);
				}
			}
		}
	}
	else{
		
		message.value="Packet reach destination node\nClick on 'Show Table' to enable animation"
		//document.getElementById("SR1").disabled = true;
		motionCount=0;
	}
}

function movementDown(x,y,x1,y1){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	y+=1;
	if(y!=y1){
		var loopTimer = setTimeout('movementDown('+x+','+y+','+x1+','+y1+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}

}

function movementUp(x,y,x1,y1){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	y-=1;
	if(y!=y1){
		var loopTimer = setTimeout('movementUp('+x+','+y+','+x1+','+y1+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}

}

function movementLeft(x,y,x1,y1){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x-=1;
	if(x!=x1){
		var loopTimer = setTimeout('movementLeft('+x+','+y+','+x1+','+y1+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}

}

function movementRight(x,y,x1,y1){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x+=1;
	if(x!=x1){
		var loopTimer = setTimeout('movementRight('+x+','+y+','+x1+','+y1+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}


}

function movementSE1(x,y,x1,y1,c,d){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x+=1; y+=d;
	if(x!=x1){
		var loopTimer = setTimeout('movementSE1('+x+','+y+','+x1+','+y1+','+c+','+d+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}
}

function movementSE2(x,y,x1,y1,c,d){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x+=c; y+=1;
	if(y!=y1){
		var loopTimer = setTimeout('movementSE2('+x+','+y+','+x1+','+y1+','+c+','+d+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}
}

function movementNE1(x,y,x1,y1,c,d){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x+=1; y-=d;
	if(x!=x1){
		var loopTimer = setTimeout('movementNE1('+x+','+y+','+x1+','+y1+','+c+','+d+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}
}

function movementNE2(x,y,x1,y1,c,d){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x+=c; y-=1;
	if(y!=y1){
		var loopTimer = setTimeout('movementNE2('+x+','+y+','+x1+','+y1+','+c+','+d+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}
}

function movementSW1(x,y,x1,y1,c,d){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x-=1; y+=d;
	if(x!=x1){
		var loopTimer = setTimeout('movementSW1('+x+','+y+','+x1+','+y1+','+c+','+d+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}
}

function movementSW2(x,y,x1,y1,c,d){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x-=c; y+=1;
	if(y!=y1){
		var loopTimer = setTimeout('movementSW2('+x+','+y+','+x1+','+y1+','+c+','+d+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}
}

function movementNW1(x,y,x1,y1,c,d){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x-=1; y-=d;
	if(x!=x1){
		var loopTimer = setTimeout('movementNW1('+x+','+y+','+x1+','+y1+','+c+','+d+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}
}

function movementNW2(x,y,x1,y1,c,d){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	saveNetworkTopology();
	
	x-=c; y-=1;
	if(y!=y1){
		var loopTimer = setTimeout('movementNW2('+x+','+y+','+x1+','+y1+','+c+','+d+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, x1, y1);
			};
			img.src = 'img/letter.png';
			motion();
		}
}


