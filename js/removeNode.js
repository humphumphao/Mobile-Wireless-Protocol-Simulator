function removeNode(){

var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var nodeNum=document.getElementById("nodeNum").value;
var message=document.getElementById("message");

var protocolIdentity = document.getElementById("protocolIdentity").value;
	if(protocolIdentity=="dsdv"){
		drawingNormal();
	}
	else if(protocolIdentity=="dsr"){
		drawingNormal2();
	}

if(nodeNum==0){
	message.value = "Select node number to remove a intermediate node. \nS1 -> remove source node \nR1 -> remove destination node."

}
else{
	message.value = ""
	if(nodeNum == "S1" && "s1"){
		context.clearRect(sendersArray[0][2]-20, sendersArray[0][3]-20, 40, 40);
		sendersArray.splice(0,1);
		//alert(sendersArray[0]);		
		//removeLine("S1");
		//removeTableArray("S1");
		resetAll();
		motionCount=0;
		reDraw();
	}
	else if(nodeNum == "R1" && "r1"){
		context.clearRect (receiversArray[0][2]-20, receiversArray[0][3]-20, 40, 40);
		receiversArray.splice(0,1);
		//alert(receiversArray[0]);
		//removeLine("R1");
		//removeTableArray("R1");
		resetAll();
		motionCount=0;
		reDraw();

	}
	else{
		for(var i = 0; i<normalArray.length; i++){
			if(normalArray[i][0] == nodeNum){
			context.clearRect (normalArray[i][2]-20, normalArray[i][3]-20, 40, 40);
			normalArray.splice(i,1);
			//alert(normalArray[0]
			//removeLine(nodeNum);
			//removeTableArray(nodeNum);
			resetAll();
			motionCount=0;
			reDraw();
			}
		}	
	}
}
}