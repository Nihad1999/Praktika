 

	
$(function () {
		
		 $ (".modal").iziModal({

		 	title: "Melumatlari daxil edin",
		 	overlayClose: false,
		 	radius: 10,
		 	padding: 10

		 });

	});

$(function(){

		  $("#modal1").iziModal({
		  	title: 'Melumatlari daxil edin',
		  	padding: 10,
		  	radius: 10
		   


		    });


		  $('#ChangeButton').on('click', function(event) {
		      event.preventDefault();
		      if (SendId >=1) {
		     $("#modal1").iziModal('open');
		 	}
		 	else{
		 		alert("Please");
		 	}

		  });

		});


function addRow() 
{	

	var n1 = document.getElementById("custable").rows.length;
	var i=1;
	var j=1;
	var gathering = 1; 
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var age = document.getElementById('age').value;
	var id =0;

	if (fname.length && lname.length && age.length >=1) 
{


	var table = document.getElementsByTagName('table')[0];
	for(i=1; i<n1;i++){
 
   	var x = document.getElementById("custable").rows[i].cells[0].innerHTML;
   		
}
	if (n1>1) {
	id = parseInt(x) + gathering;
	}
	else{
	id = 1;
}
	var newRow = table.insertRow(table.rows.length);
	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);
	var cel4 = newRow.insertCell(3);

	cel1.innerHTML = id;
	cel2.innerHTML = fname;
	cel3.innerHTML = lname;
	cel4.innerHTML = age;


	tablebase = [];


for(i=1; i<table.rows.length; i++){
    for(j=0; j<table.rows[0].cells.length; j++){
        tablebase.push(table.rows[i].cells[j].innerHTML);
        localStorage.setItem("Datatab",   tablebase);
        }        

}


document.getElementsByTagName('tr')[n1].setAttribute("onclick", 'clickme(this)' );

	document.getElementById('fname').value = '';
	document.getElementById('lname').value = '';
	document.getElementById('age').value = '';

}

else{
	alert("Please input value");
}	

}




function ChangeRow(){
	var n1 = document.getElementById("custable").rows.length;
	var id = SendId;
	var j =1;
	var i=1;
	var countRow = 0;
	var fname = document.getElementById('fname1').value;
	var lname = document.getElementById('lname1').value;
	var age = document.getElementById('age1').value;

if (id.length && fname.length && lname.length && age.length >=1) 
{
	var table = document.getElementsByTagName('table')[0];

		for(i=1; i<n1;i++){
   	var x = document.getElementById("custable").rows[i].cells[0].innerHTML;
   	countRow = countRow + 1;
   	console.log(countRow);
   	console.log(x);
   	console.log(id);
	
	if (id==x) {
	var deleteRow = table.deleteRow(countRow);
	var newRow = table.insertRow(countRow);
	break;
}

}
	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);
	var cel4 = newRow.insertCell(3);

	cel1.innerHTML = id;
	cel2.innerHTML = fname;
	cel3.innerHTML = lname;
	cel4.innerHTML = age;
	
	tablebase = [];


for(i=1; i<table.rows.length; i++){
    for(j=0; j<table.rows[0].cells.length; j++){
        tablebase.push(table.rows[i].cells[j].innerHTML);
        localStorage.setItem("Datatab",   tablebase);
        }        

}
	document.getElementsByTagName('tr')[countRow].setAttribute("onclick", 'clickme(this)' );

	document.getElementById('fname1').value = '';
	document.getElementById('lname1').value = '';
	document.getElementById('age1').value = '';
	SendId = 0;
	$("#modal1").iziModal('close');
	ChangeButton.disabled = true;
	ChangeButton.setAttribute("class", "myButtondisabled");
	DeleteButton.disabled = true;
	DeleteButton.setAttribute("class", "myButtondisabled");
		check = 0;

}

else{
	alert("Please input value");
}	

}


var SendId = 0;
var check = 0;
var ChangeButton = document.getElementById('ChangeButton');
var DeleteButton = document.getElementById('DeleteButton');

function clickme(row){

	var table = document.getElementById('custable');
	var rowstable = table.rows.length;	
	var i = 0;

	for (i=1; i<rowstable; i++){

		table.getElementsByTagName('tr')[i].classList.remove("main");
		// ChangeButton.style.visibility = "hidden";
		ChangeButton.disabled = true;
		ChangeButton.setAttribute("class", "myButtondisabled");
		DeleteButton.disabled = true;
		DeleteButton.setAttribute("class", "myButtondisabled");
		SendId = 0;

	}

var tabtr = row.rowIndex;



if (check == tabtr) {
table.getElementsByTagName('tr')[tabtr].classList.remove("main");
// ChangeButton.style.visibility = "hidden";
ChangeButton.disabled = true;
ChangeButton.setAttribute("class", "myButtondisabled");
DeleteButton.disabled = true;
DeleteButton.setAttribute("class", "myButtondisabled");
SendId = 0;
}

else{

table.getElementsByTagName('tr')[tabtr].classList.add("main");
ChangeButton.disabled = false;
ChangeButton.setAttribute("class", "myButton");
DeleteButton.disabled = false;
DeleteButton.setAttribute("class", "myButton");


var Idtab = document.getElementById("custable").rows[tabtr].cells[0].innerHTML;
var fnamecheck = document.getElementById('custable').rows[tabtr].cells[1].innerHTML;
var lnamecheck = document.getElementById('custable').rows[tabtr].cells[2].innerHTML;
var agecheck = document.getElementById('custable').rows[tabtr].cells[3].innerHTML;


var fnamemodal = document.getElementById('fname1').value = fnamecheck;
var lnamemodal = document.getElementById('lname1').value = lnamecheck;
var agemodal = document.getElementById('age1').value = agecheck;


SendId = Idtab;

}

if(check == tabtr){

	check = 0;
	}
else{
check = tabtr;
	}

}


function AreYouSure(){
var id = SendId;
if (id >= 1) {

document.getElementById('bg-modal').style.display = 'flex';
}
else{

	alert('Please select row');
}	

}

function closedialog(){

	document.getElementById('bg-modal').style.display = 'none';
}

function DeleteRow(){
	var n1 = document.getElementById("custable").rows.length;
	var j=1;
	var i=1;
	var countRow = 0;
	var id = SendId;

	var table = document.getElementsByTagName('table')[0];

	for(i=1; i<n1;i++){

   	var x = document.getElementById("custable").rows[i].cells[0].innerHTML;
   	countRow = countRow + 1;
	
	if (id==x) {
 
	var deleteRow = table.deleteRow(countRow);
	document.getElementById('bg-modal').style.display = 'none';
	SendId = 0;
	
	ChangeButton.disabled = true;
	ChangeButton.setAttribute("class", "myButtondisabled");
	DeleteButton.disabled = true;
	DeleteButton.setAttribute("class", "myButtondisabled");
		check = 0;

	if (table.rows.length>1) {

		tablebase = [];
		
		for(i=1; i<table.rows.length; i++){
		    for(j=0; j<table.rows[0].cells.length; j++){
		        tablebase.push(table.rows[i].cells[j].innerHTML);
		        localStorage.setItem("Datatab",   tablebase);
		        }        
		
		}

	}

	else{
		tablebase = [];
		localStorage.clear();
	}
	break;

}
}

}


	function myFunction(){
	var rows = document.getElementById("custable").rows.length;
	var ChangeButton = document.getElementById('ChangeButton');
	var DeleteButton = document.getElementById('DeleteButton');
	var i = 1;
	ChangeButton.disabled = true;
	ChangeButton.setAttribute("class", "myButtondisabled");
	DeleteButton.disabled = true;
	DeleteButton.setAttribute("class", "myButtondisabled");
	for(i=1; i<rows; i++){

document.getElementsByTagName('tr')[i].setAttribute("onclick", 'clickme(this)' );


}
}

function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

	var SendTableRow = [];
	var exportData = [];

	var tablebase = [];

function ShowData(){
tablebase = [];
var ChangeButton = document.getElementById('ChangeButton');
var DeleteButton = document.getElementById('DeleteButton');

	ChangeButton.disabled = true;
	ChangeButton.setAttribute("class", "myButtondisabled");
	DeleteButton.disabled = true;
	DeleteButton.setAttribute("class", "myButtondisabled");

var tableid = document.getElementById('custable');
var i =0;

tablebase.push(localStorage.getItem("Datatab"));
tablebase = tablebase.toString();
tablebase = tablebase.split(",");


var result = chunkArray(tablebase, 4);
console.log(result.length, result);


if (tableid.rows.length >1  ) {
	console.log(result.length);
for(i=0; i<result.length; i++){
	
var deleterow = tableid.deleteRow(1);
}

}

if(localStorage.getItem("Datatab").length>0){
for(i=0; i<result.length; i++){

var newRow = tableid.insertRow(i+1);
	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);
	var cel4 = newRow.insertCell(3);

	cel1.innerHTML = result[i][0];
	cel2.innerHTML = result[i][1];
	cel3.innerHTML = result[i][2];
	cel4.innerHTML = result[i][3];
	}
	}

}




