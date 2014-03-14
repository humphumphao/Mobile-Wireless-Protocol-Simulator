function showRandom(){

clear();
document.getElementById("source").disabled = true;
document.getElementById("destination").disabled = true;
document.getElementById("radioBrokenNode").disabled = true;
document.getElementById("radioBrokenLink").disabled = true;
document.getElementById("showRouting").disabled = true;
document.getElementById("reset2").disabled = true;
document.getElementById("yCoord").disabled = true;
document.getElementById("xCoord").disabled = true;
document.getElementById("nodeIdentity").disabled = true;
document.getElementById("AN1").disabled = true;
document.getElementById("SR1").disabled = true;
document.getElementById("reset").disabled = true;
document.getElementById("nodeNum").disabled = true;
document.getElementById("RN1").disabled = true;
document.getElementById("showTable").disabled = true;
document.getElementById("GT").disabled = false;
document.getElementById("SR2").disabled = false;
message.value ="Generate a random network topology." 
}

function generateRandom(){
	clear();
	var count = Math.floor((Math.random()*100)+1);
	randomCountArray.splice(0,1);
	components = [count];
	randomCountArray.push(components);

	if(count>1 && count<10){
		randomTop1();
	}
	else if(count>11 && count<20){
		randomTop2();
	}
	else if(count>21 && count<30){
		randomTop3();
	}
	else if(count>31 && count<40){
		randomTop4();
	}
	else if(count>41 && count<50){
		randomTop5();
	}
	else if(count>51 && count<60){
		randomTop1();
	}
	else if(count>61 && count<70){
		randomTop2();
	}
	else if(count>71 && count<80){
		randomTop3();
	}
	else if(count>81 && count<90){
		randomTop4();
	}
	else{
		randomTop5();
	}
	
}

function randomTop1(){

//arrow(fromx, fromy, tox, toy, z);
arrow(287, 208, 239, 179, 2);
arrow(226, 137, 272, 67, 2);

var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);


context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(370,450); // 1 to 2
context.lineTo(252,372);
context.stroke();
context.closePath();

context.moveTo(314,208); // S1 to 2
context.lineTo(252,372);
context.stroke();
context.closePath();

context.moveTo(314,208); // S1 to 5
context.lineTo(223,162);
context.stroke();
context.closePath();

context.moveTo(294,55); // R1 to 6
context.lineTo(223,162);
context.stroke();
context.closePath();

context.moveTo(314,208); // S1 to 3
context.lineTo(458,190);
context.stroke();
context.closePath();

context.moveTo(552,37); // 4 to 3
context.lineTo(458,190);
context.stroke();
context.closePath();

context.moveTo(294,55); // R1 to 4
context.lineTo(552,37);
context.stroke();
context.closePath();

context.moveTo(370,450); // 1 to 6
context.lineTo(540,337);
context.stroke();
context.closePath();

context.moveTo(458,190); // 3 to 6
context.lineTo(540,337);
context.stroke();
context.closePath();

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(370, 450, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 370-radius/4 ,450-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(252, 372, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 252-radius/4 ,372-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(314, 208, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 314-radius/4 ,208-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(223, 162, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 223-radius/4 ,162-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(294, 55, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 294-radius/4 ,55-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(458, 190, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 458-radius/4 ,190-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(552, 37, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 552-radius/4 ,37-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(540, 337, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 540-radius/4 ,337-radius/2);

randomTopTable1();
}

function randomTopTable1(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - Node S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>2</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>3</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>5</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>5</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>8</td>" +

    "<td>5</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>5</td>" +

    "<td>2</td>" +

    "</tr>" +

    "<table>";


}

function randomTop2(){

arrow(649, 460, 340, 474, 2);
arrow(306, 463, 199, 343, 2);
arrow(619, 356, 658, 447, 2);

var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);


context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(615,330); // S1 to 1
context.lineTo(684,222);
context.stroke();
context.closePath();

context.moveTo(721,80); // 2 to 1
context.lineTo(684,222);
context.stroke();
context.closePath();

context.moveTo(615,330); // S1 to 3
context.lineTo(546,235);
context.stroke();
context.closePath();

context.moveTo(615,330); // S1 to 4
context.lineTo(536,372);
context.stroke();
context.closePath();

context.moveTo(411,256); // 5 to 4
context.lineTo(536,372);
context.stroke();
context.closePath();

context.moveTo(411,256); // 5 to 3
context.lineTo(546,235);
context.stroke();
context.closePath();

context.moveTo(411,256); // 5 to 6
context.lineTo(363,105);
context.stroke();
context.closePath();

context.moveTo(261,201); // 7 to 6
context.lineTo(363,105);
context.stroke();
context.closePath();

context.moveTo(261,201); // 7 to R1
context.lineTo(175,328);
context.stroke();
context.closePath();

context.moveTo(615,330); // S1 to 8
context.lineTo(679,468);
context.stroke();
context.closePath();

context.moveTo(317,486); // 9 to 8
context.lineTo(679,468);
context.stroke();
context.closePath();

context.moveTo(317,486); // 9 to R1
context.lineTo(175,328);
context.stroke();
context.closePath();

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(317, 486, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("9", 317-radius/4 ,486-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(679, 468, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("8", 679-radius/4 ,468-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(175, 328, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 175-radius/4 ,328-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(261, 201, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 261-radius/4 ,201-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(363, 105, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 363-radius/4 ,105-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(411, 256, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 411-radius/4 ,256-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(536, 372, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 536-radius/4 ,372-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(615, 330, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 615-radius/4 ,330-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(684, 222, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 684-radius/4 ,222-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(721, 80, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 721-radius/4 ,80-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(546, 235, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 546-radius/4 ,235-radius/2);

randomTopTable2();


}

function randomTopTable2(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - Node S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>3</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>4</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>3</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>7</td>" +

    "<td>3</td>" +

    "<td>4</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>8</td>" +

    "<td>8</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>9</td>" +

    "<td>8</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>8</td>" +

    "<td>3</td>" +

    "</tr>" +

    "<table>";


}

function randomTop3(){

arrow(121, 480, 209, 480, 2);
arrow(255, 460, 404, 330, 2);
arrow(431, 290, 483, 203, 2);
arrow(510, 174, 574, 139, 2);

var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);


context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(97,469); // S1 to 1
context.lineTo(232,469);
context.stroke();
context.closePath();

context.moveTo(97,469); // S1 to 2
context.lineTo(150,306);
context.stroke();
context.closePath();

context.moveTo(232,469); // 3 to 1
context.lineTo(415,307);
context.stroke();
context.closePath();

context.moveTo(225,155); // 4 to 2
context.lineTo(150,306);
context.stroke();
context.closePath();

context.moveTo(415,307); // 4 to 3
context.lineTo(225,155);
context.stroke();
context.closePath();

context.moveTo(415,307); // 5 to 3
context.lineTo(486,180);
context.stroke();
context.closePath();

context.moveTo(588,121); // 5 to R1
context.lineTo(486,180);
context.stroke();
context.closePath();

context.moveTo(415,307); // 6 to 3
context.lineTo(544,404);
context.stroke();
context.closePath();

context.moveTo(650,242); // 6 to 7
context.lineTo(544,404);
context.stroke();
context.closePath();

context.moveTo(588,121); // 7 to R1
context.lineTo(650,242);
context.stroke();
context.closePath();

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(650, 242, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 650-radius/4 ,242-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(544, 404, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 544-radius/4 ,404-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(588, 121, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 588-radius/4 ,121-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(486, 180, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 486-radius/4 ,180-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(225, 155, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 225-radius/4 ,155-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(415, 307, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 415-radius/4 ,307-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(150, 306, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 150-radius/4 ,306-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(97, 469, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 97-radius/4 ,469-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(232, 469, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 232-radius/4 ,469-radius/2);

randomTopTable3();
}

function randomTopTable3(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - Node S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>2</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>2</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>1</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>1</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>7</td>" +

    "<td>1</td>" +

    "<td>4</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>1</td>" +

    "<td>4</td>" +

    "</tr>" +

    "<table>";


}

function randomTop4(){

arrow(673, 527, 387, 500, 2);
arrow(339, 485, 255, 438, 2);
arrow(252, 400, 285, 317, 2);
arrow(309, 280, 400, 165, 2);
arrow(425, 124, 449, 65, 2);

var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);


context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(722,432); // S1 to 1
context.lineTo(696,520);
context.stroke();
context.closePath();

context.moveTo(608,434); // S1 to 2
context.lineTo(696,520);
context.stroke();
context.closePath();

context.moveTo(364,490); // S1 to 3
context.lineTo(696,520);
context.stroke();
context.closePath();

context.moveTo(661,344); // 4 to 1
context.lineTo(722,432);
context.stroke();
context.closePath();

context.moveTo(608,434); // 4 to 2
context.lineTo(661,344);
context.stroke();
context.closePath();

context.moveTo(638,226); // 4 to 5
context.lineTo(661,344);
context.stroke();
context.closePath();

context.moveTo(638,226); // 6 to 5
context.lineTo(465,271);
context.stroke();
context.closePath();

context.moveTo(444,386); // 6 to 7
context.lineTo(465,271);
context.stroke();
context.closePath();

context.moveTo(444,386); // 6 to 3
context.lineTo(364,490);
context.stroke();
context.closePath();

context.moveTo(237,421); // 8 to 3
context.lineTo(364,490);
context.stroke();
context.closePath();

context.moveTo(237,421); // 8 to 9
context.lineTo(171,304);
context.stroke();
context.closePath();

context.moveTo(237,421); // 8 to 10
context.lineTo(289,293);
context.stroke();
context.closePath();

context.moveTo(408,142); // 11 to 10
context.lineTo(289,293);
context.stroke();
context.closePath();

context.moveTo(638,226); // 12 to 5
context.lineTo(634,87);
context.stroke();
context.closePath();

context.moveTo(450,42); // 12 to R1
context.lineTo(634,87);
context.stroke();
context.closePath();

context.moveTo(450,42); // 11 to R1
context.lineTo(408,142);
context.stroke();
context.closePath();

context.moveTo(201,150); // 13 to 9
context.lineTo(171,304);
context.stroke();
context.closePath();

context.moveTo(201,150); // 13 to 14
context.lineTo(289,67);
context.stroke();
context.closePath();

context.moveTo(289,67); // R1 to 14
context.lineTo(450,42);
context.stroke();
context.closePath();

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(289, 67, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("14", 289-radius/4 ,67-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(201, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("13", 201-radius/4 ,150-radius/2);


context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(450, 42, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 450-radius/4 ,42-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(634, 87, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("12", 634-radius/4 ,87-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(408, 142, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("11", 408-radius/4 ,142-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(289, 293, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("10", 289-radius/4 ,293-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(171, 304, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("9", 171-radius/4 ,304-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(237, 421, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("8", 237-radius/4 ,421-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(444, 386, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 444-radius/4 ,386-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(465, 271, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 465-radius/4 ,271-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(638, 226, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 638-radius/4 ,226-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(661, 344, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 661-radius/4 ,344-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(364, 490, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 364-radius/4 ,490-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(608, 434, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 608-radius/4 ,434-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(722, 432, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 722-radius/4 ,432-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(696, 520, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 696-radius/4 ,520-radius/2);


randomTopTable4();
}

function randomTopTable4(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - Node S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>2</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>1</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>3</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>7</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>8</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>9</td>" +

    "<td>3</td>" +

    "<td>3</td>" +

    "</tr>" +

	"<tr align = 'middle'>" +
	
	"<td>10</td>" +

    "<td>3</td>" +

    "<td>3</td>" +

    "</tr>" +

	"<tr align = 'middle'>" +
	
	"<td>11</td>" +

    "<td>3</td>" +

    "<td>4</td>" +

    "</tr>" +

	"<tr align = 'middle'>" +
	
	"<td>12</td>" +

    "<td>1</td>" +

    "<td>4</td>" +

    "</tr>" +

	"<tr align = 'middle'>" +
	
	"<td>13</td>" +

    "<td>3</td>" +

    "<td>4</td>" +

    "</tr>" +

	"<tr align = 'middle'>" +
	
	"<td>14</td>" +

    "<td>3</td>" +

    "<td>5</td>" +

    "</tr>" +

	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>3</td>" +

    "<td>5</td>" +

    "</tr>" +
	
    "<table>";


}

function randomTop5(){
arrow(191, 287, 227, 375, 2);
arrow(268, 402, 632, 402, 2);
arrow(648, 370, 624, 78, 2);

var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);


context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(190,262); // S1 to 1
context.lineTo(267,158);
context.stroke();
context.closePath();

context.moveTo(355,229); // 2 to 1
context.lineTo(267,158);
context.stroke();
context.closePath();

context.moveTo(190,262); // S1 to 3
context.lineTo(246,395);
context.stroke();
context.closePath();

context.moveTo(355,229); // 2 to 4
context.lineTo(525,227);
context.stroke();
context.closePath();

context.moveTo(660,395); // 5 to 3
context.lineTo(246,395);
context.stroke();
context.closePath();

context.moveTo(660,395); // 5 to R1
context.lineTo(632,53);
context.stroke();
context.closePath();

context.moveTo(632,53); // R1 to 4
context.lineTo(525,227);
context.stroke();
context.closePath();

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(632, 53, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 632-radius/4 ,53-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(660, 395, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 660-radius/4 ,395-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(525, 227, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 525-radius/4 ,227-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(246, 395, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 246-radius/4 ,395-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(355, 229, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 355-radius/4 ,229-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(267, 158, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 267-radius/4 ,158-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(190, 262, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 190-radius/4 ,262-radius/2);

randomTopTable5();

}

function randomTopTable5(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - Node S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>3</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>1</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>3</td>" +

    "<td>3</td>" +

    "</tr>" +
	
    "<table>";


}

function randomRoutingAnimation(){
	
	var count = randomCountArray[0];
	
	if(count>1 && count<10){
		TopOneRoutingA(287,185);
		setTimeout('TopOneRoutingB(199,141)',1500);
	}
	else if(count>11 && count<20){
		TopTwoRoutingA(592,315);
		setTimeout('TopTwoRoutingB(655,440)',1900);
		setTimeout('TopTwoRoutingC(290,458)',7000);
	}
	else if(count>21 && count<30){
		TopThreeRoutingA(74,440);
		setTimeout('TopThreeRoutingB(205,440)',1700);
		setTimeout('TopThreeRoutingC(384,284)',4500);
		setTimeout('TopThreeRoutingD(460,155)',5700);
	}
	else if(count>31 && count<40){
		TopFourRoutingA(668,495);
		setTimeout('TopFourRoutingB(340,464)',4200);
		setTimeout('TopFourRoutingC(218,395)',5900);
		setTimeout('TopFourRoutingD(265,265)',8000);
		setTimeout('TopFourRoutingE(380,120)',10000);
	}
	else if(count>41 && count<50){
		TopFiveRoutingA(167,242);
		setTimeout('TopFiveRoutingB(222,374)',1700);
		setTimeout('TopFiveRoutingC(633,374)',7000);
	}
	else if(count>51 && count<60){
		TopOneRoutingA(287,185);
		setTimeout('TopOneRoutingB(199,141)',1500);
		
	}
	else if(count>61 && count<70){
		TopTwoRoutingA(592,315);
		setTimeout('TopTwoRoutingB(655,440)',1900);
		setTimeout('TopTwoRoutingC(290,458)',7000);
	}
	else if(count>71 && count<80){
		TopThreeRoutingA(74,440);
		setTimeout('TopThreeRoutingB(205,440)',1700);
		setTimeout('TopThreeRoutingC(384,284)',4500);
		setTimeout('TopThreeRoutingD(460,155)',5700);
	}
	else if(count>81 && count<90){
		TopFourRoutingA(668,495);
		setTimeout('TopFourRoutingB(340,464)',4200);
		setTimeout('TopFourRoutingC(218,395)',5900);
		setTimeout('TopFourRoutingD(265,265)',8000);
		setTimeout('TopFourRoutingE(380,120)',10000);
	}
	else{
		TopFiveRoutingA(167,242);
		setTimeout('TopFiveRoutingB(222,374)',1700);
		setTimeout('TopFiveRoutingC(633,374)',7000);
	}
	
}

function TopOneRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop1();
	
	x-=1; y-=0.5;
	if(x!="199"){
		var loopTimer = setTimeout('TopOneRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 199, 141);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopOneRoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop1();
	
	x+=0.6; y-=1;
	if(y!="30"){
		var loopTimer = setTimeout('TopOneRoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 270, 30);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function TopTwoRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop2();
	
	x+=0.5; y+=1;
	if(y!="440"){
		var loopTimer = setTimeout('TopTwoRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 655, 440);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopTwoRoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop2();
	
	x-=1; y+=0.05;
	if(x!="290"){
		var loopTimer = setTimeout('TopTwoRoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 290, 458);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopTwoRoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop2();
	
	x-=1; y-=1.1;
	if(x!="150"){
		var loopTimer = setTimeout('TopTwoRoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 150, 300);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function TopThreeRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop3();
	
	x+=1; y+=0;
	if(x!="205"){
		var loopTimer = setTimeout('TopThreeRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 205, 440);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopThreeRoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop3();
	
	x+=1; y-=0.87;
	if(x!="384"){
		var loopTimer = setTimeout('TopThreeRoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 384, 284);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopThreeRoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop3();
	
	x+=1; y-=1.7;
	if(x!="460"){
		var loopTimer = setTimeout('TopThreeRoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 460, 155);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopThreeRoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop3();
	
	x+=1; y-=0.6;
	if(x!="565"){
		var loopTimer = setTimeout('TopThreeRoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565, 95);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function TopFourRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop4();
	
	x-=1; y-=0.1;
	if(x!="340"){
		var loopTimer = setTimeout('TopFourRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 340, 464);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopFourRoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop4();
	
	x-=1; y-=0.5;
	if(x!="218"){
		var loopTimer = setTimeout('TopFourRoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 218, 395);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopFourRoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop4();
	
	x+=0.38; y-=1;
	if(y!="265"){
		var loopTimer = setTimeout('TopFourRoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 265, 265);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopFourRoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop4();
	
	x+=0.78; y-=1;
	if(y!="120"){
		var loopTimer = setTimeout('TopFourRoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 380, 120);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopFourRoutingE(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop4();
	
	x+=0.4; y-=1;
	if(y!="18"){
		var loopTimer = setTimeout('TopFourRoutingE('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 425, 18);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function TopFiveRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop5();
	
	x+=0.4; y+=1;
	if(y!="374"){
		var loopTimer = setTimeout('TopFiveRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 222, 374);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopFiveRoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop5();
	
	x+=1; y+=0;
	if(x!="633"){
		var loopTimer = setTimeout('TopFiveRoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 633, 374);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopFiveRoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop5();
	
	x-=0.085; y-=1;
	if(y!="30"){
		var loopTimer = setTimeout('TopFiveRoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 605, 30);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

