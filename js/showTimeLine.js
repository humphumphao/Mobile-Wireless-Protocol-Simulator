function showTimeLineDsDv(){
	var a = 0;
	var c = 0;
	var b = 20;
	checkDsdvArrayPath();
	for(var i = 0;i<dsdvArray.length;i++){
		if(a<800){
			a = a + 75; 
			createNode(a,b,dsdvArray[i][0]);		
		}
	}
	
	createNode(a+75,b,"R1");
	
	
}

function showTimeLineDsr(){
	var a = 400;
	var c = 0;
	var b = 20;
	var d = 0;
	var createdNode = 0;
	var have = 0;

	checkDsdvArrayPath();
	createNode(a,20,"S1");
	var showNode = new Array();
	for(var i = 0;i<dsdvArray.length;i++){
		if(dsdvArray[i][0] == "S1"){
			for(var j =0;j<showNode.length;j++){
				if(showNode[j]==dsdvArray[i][2]){
					have++;
				}
			}
			if(have>0){
				have=0;
			}
			else{
				if(createdNode == 0){
					a = a + 75;
				}
				else{
					a = a - 150;
				}
				createNode(a,20,dsdvArray[i][2]);
				nodeTL++;
				showNode.push(dsdvArray[i][2]);
				createTimeLineNode(a,20,dsdvArray[i][2],createdNode);			
				createdNode++;
			}
		}
		if(nodeTL>0){
		timeLineNode.push(nodeTL);
		}
		nodeTL = 0;
	}
	
}

function createTimeLineNode(x,y,nextNode,a){
	var showNode2=new Array();
	var had = 0;
	if(nextNode!="R1"){
		for(var i=0;i<dsdvArray.length;i++){
			if(dsdvArray[i][0] == nextNode){
				for(var j=0;j<showNode2.length;j++){
					if(showNode2[j]==dsdvArray[i][2]){
						had++;
					}
				}
				if(had>0){
					had=0;
				}
				else{
					if(a == 0){
						x = x + 75;
					}
					else{
						x = x - 75;
					}
					createNode(x,20,dsdvArray[i][2]);
					nodeTL++;
					showNode2.push(dsdvArray[i][2]);
					createTimeLineNode(x,20,dsdvArray[i][2],a);	
				}
			}
		}
	}
}