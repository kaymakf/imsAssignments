/**
 * 
 */
function deleteValues(){
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
function  validate(val){
	
	if(!(val.charAt(0) == '+' || val.charAt(0) == '-' || val.charAt(0).match("[0-9]")))
		return false;
	
	commaFlag = false;
	
	for(i=1; i < val.length; i++){
		
		value = val.charAt(i);
		
		if(value.match("[,|.]"))
			if(commaFlag==true)
				return false;
			else
				commaFlag = true;
		else
			if(value.match("([0-9])") == null) //returns null in case of doesn't 
				return false;
	}
	
	if(commaFlag == true)
		return val.replace(",", ".");
	else
		return val;
}
function tracker(element, warn){
	validated = validate(element.value);
	warning = document.getElementById(warn)
	if(validated == false)
		warning.style.visibility = "visible";
	else
		document.getElementById("input2").style.visibility = "visible";
}
onload = function () {
    var e = document.getElementById("number1");
    e.onchange = tracker(e,'warning1');
    e.onpropertychange = e.onchange; // for IE8
    //var a = document.getElementById("number2");
    //a.oninput = tracker(e,'warning2');
    //a.onpropertychange = e.oninput; // for IE8
    
 };
 function sum(){
	 var number1 = document.getElementById("number1");
	 var number2 = document.getElementById("number2");
	 
	 if(validate(number1.value) == false){
		 alert("please enter correct values to input 1");
		 return;
	 }
	 
	 if(validate(number2.value) == false){
		 alert("please enter correct values to input 2");
		 return;
	 }
	 var comp = document.getElementById("computation");
	 comp.style.display="none"; 
	 var res = document.getElementById("result");
	 res.style.display="inline";
 }
 
 
 
 
 
 
 
 
 
 