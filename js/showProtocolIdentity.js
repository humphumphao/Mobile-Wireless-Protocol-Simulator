function showProtocolIdentity(){
var c=document.getElementById("myCanvasTimeLine");
var contextTimeLine=c.getContext("2d");
var protocolIdentity = document.getElementById("protocolIdentity").value;
	if(protocolIdentity=="dsdv"){
		resetAll();
		contextTimeLine.clearRect(0, 0, 800, 300);
		reDraw();
		drawingNormal();
		document.getElementById("SR1").disabled = true;
		document.getElementById("TL").disabled = true;
		document.getElementById("routingNumber").disabled = false;
		message.value="Create your network topology and Click on 'Show Path' to proceed";
	}
	else if(protocolIdentity=="dsr"){
		resetAll();
		contextTimeLine.clearRect(0, 0, 800, 300);
		reDraw();
		drawingNormal2();
		document.getElementById("SR1").disabled = true;
		document.getElementById("TL").disabled = true;
		document.getElementById("routingNumber").disabled = true;
		message.value="Create your network topology and Click on 'Show Path' to proceed";
	}

}

function showMotion(){

var protocolIdentity = document.getElementById("protocolIdentity").value;
	if(protocolIdentity=="dsdv"){
		checkNodeTableArray();
		createDsdvPath();
		
	}
	else if(protocolIdentity=="dsr"){
		checkNodeTableArray();
		routeRREQPath();
	}
	else{
	message.value="Please select a protocol."
	}


}

function showTimeLine(){
document.getElementById("sForward").disabled = false;
document.getElementById("sBackward").disabled = false;
var protocolIdentity = document.getElementById("protocolIdentity").value;
	if(protocolIdentity =="dsdv"){
		showTimeLineDsDv();	
	}
	else if(protocolIdentity =="dsr"){
		showTimeLineDsr();	
	}

}