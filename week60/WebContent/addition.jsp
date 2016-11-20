<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="util.js"/></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body onload="onload()">
	<form>
		<fieldset id="computation">
			<legend>Calculator</legend>
			<div>
				Number 1:<input type="text" id="number1" onchange="tracker(this)"/>
				<b id="warning1" style="visibility: hidden">Please enter a correct input</b>
			</div>
			<div id="input2" style="visibility: hidden">
				Number 2:<input type="text" id="number2" />
			</div>
			<div >
				<input type="submit" value="Computate Sum" onClick="sum()"/>
				<input type="submit" value="Delete" onclick="deleteValues()"/>
			</div>
		</fieldset>
		<fieldset id="result" style = "display: none">
			<legend>Result</legend>
			<div>
				<p id="resultShow"></a>
			</div>
			<div>
				<input type="submit" value="New computation" onClick="newComputation()"/>
			</div>
		</fieldset>
		
	</form>
</body>
</html>