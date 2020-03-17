 

	
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

	dataid = [];
	datafname = [];
	datalname = [];
	dataAge = [];
	
	for(j=1; j<n1+1; j++){
		var collectId = document.getElementById("custable").rows[j].cells[0].innerHTML;
		var collectFname = document.getElementById("custable").rows[j].cells[1].innerHTML;
		var collectLname = document.getElementById("custable").rows[j].cells[2].innerHTML;
		var collectAge = document.getElementById("custable").rows[j].cells[3].innerHTML;

		dataid.push(collectId);
		datafname.push(collectFname);
		datalname.push(collectLname);
		dataAge.push(collectAge);
		localStorage.setItem("Id",   dataid);
		localStorage.setItem("Fname",   datafname);
		localStorage.setItem("Lname",   datalname);
		localStorage.setItem("Age",   dataAge);
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


	dataid = [];
	datafname = [];
	datalname = [];
	dataAge = [];
	
	for(j=1; j<n1; j++){
		var collectId = document.getElementById("custable").rows[j].cells[0].innerHTML;
		var collectFname = document.getElementById("custable").rows[j].cells[1].innerHTML;
		var collectLname = document.getElementById("custable").rows[j].cells[2].innerHTML;
		var collectAge = document.getElementById("custable").rows[j].cells[3].innerHTML;

		dataid.push(collectId);
		datafname.push(collectFname);
		datalname.push(collectLname);
		dataAge.push(collectAge);
		localStorage.setItem("Id",   dataid);
		localStorage.setItem("Fname",   datafname);
		localStorage.setItem("Lname",   datalname);
		localStorage.setItem("Age",   dataAge);
	}

	document.getElementsByTagName('tr')[countRow].setAttribute("onclick", 'clickme(this)' );

	document.getElementById('fname1').value = '';
	document.getElementById('lname1').value = '';
	document.getElementById('age1').value = '';
	SendId = 0;
	$("#modal1").iziModal('close');
		ChangeButton.style.visibility = "hidden";
		DeleteButton.style.visibility = "hidden";
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
		ChangeButton.style.visibility = "hidden";
		DeleteButton.style.visibility = "hidden";
		SendId = 0;

	}

var tabtr = row.rowIndex;



if (check == tabtr) {
table.getElementsByTagName('tr')[tabtr].classList.remove("main");
ChangeButton.style.visibility = "hidden";
DeleteButton.style.visibility = "hidden";
SendId = 0;
}

else{

table.getElementsByTagName('tr')[tabtr].classList.add("main");
ChangeButton.style.visibility = "visible";
DeleteButton.style.visibility = "visible";


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

function closedialoq(){

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
	ChangeButton.style.visibility = "hidden";
	DeleteButton.style.visibility = "hidden";
		check = 0;

		if (table.rows.length>1) {
	dataid = [];
	datafname = [];
	datalname = [];
	dataAge = [];

	for(j=1; j<table.rows.length; j++){
		var collectId = document.getElementById("custable").rows[j].cells[0].innerHTML;
		var collectFname = document.getElementById("custable").rows[j].cells[1].innerHTML;
		var collectLname = document.getElementById("custable").rows[j].cells[2].innerHTML;
		var collectAge = document.getElementById("custable").rows[j].cells[3].innerHTML;


		dataid.push(collectId);
		datafname.push(collectFname);
		datalname.push(collectLname);
		dataAge.push(collectAge);
		localStorage.setItem("Id",   dataid);
		localStorage.setItem("Fname",   datafname);
		localStorage.setItem("Lname",   datalname);
		localStorage.setItem("Age",   dataAge);
	}

	}

	else{
		dataid = [];
		datafname = [];
		datalname = [];
		dataAge = [];

		localStorage.clear();

	}
	break;

}
}

}



	function myFunction(){
	var rows = document.getElementById("custable").rows.length;
	var i = 1;

	for(i=1; i<rows; i++){

document.getElementsByTagName('tr')[i].setAttribute("onclick", 'clickme(this)' );
}
}




	var dataid = [];
	var datafname = [];
	var datalname = [];
	var dataAge = [];


function ShowData(){
dataid = [];
datafname = [];
datalname = [];
dataAge = [];


var tableid = document.getElementById('custable');
var i =0;
dataid.push(localStorage.getItem("Id"));
dataid = dataid.toString();
dataid = dataid.split(",");

datafname.push(localStorage.getItem("Fname"));
datafname = datafname.toString();
datafname = datafname.split(",");


datalname.push(localStorage.getItem("Lname"));
datalname = datalname.toString();
datalname = datalname.split(",");

dataAge.push(localStorage.getItem("Age"));
dataAge = dataAge.toString();
dataAge = dataAge.split(",");

if (localStorage.length >=1) {
for(i=0; i<tableid.rows.length; i++){
	
var deleterow = tableid.deleteRow(1);
}

for(i=0; i<datafname.length; i++){

var newRow = tableid.insertRow(i+1);
	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);
	var cel4 = newRow.insertCell(3);

	cel1.innerHTML = dataid[i];
	cel2.innerHTML = datafname[i];
	cel3.innerHTML = datalname[i];
	cel4.innerHTML = dataAge[i];

	}

}
else{
	for(i=0; i<tableid.rows.length; i++){
	
var deleterow = tableid.deleteRow(1);
}

}

}


