<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Assignment6_2</title>
<%
	Integer jsp = (Integer) application.getAttribute("JSP");
	Integer asp = (Integer) application.getAttribute("ASP");
	Integer php = (Integer) application.getAttribute("PHP");
	Integer cf = (Integer) application.getAttribute("ColdFusion");
	if (jsp == null)
		jsp = 0;
	if (asp == null)
		asp = 0;
	if (php == null)
		php = 0;
	if (cf == null)
		cf = 0;
	if (request.getParameter("a") != null)
		switch (request.getParameter("a")) {
		case "0":
			application.setAttribute("JSP", ++jsp);
			break;
		case "1":
			application.setAttribute("ASP", ++asp);
			break;
		case "2":
			application.setAttribute("PHP", ++php);
			break;
		case "3":
			application.setAttribute("ColdFusion", ++cf);
			break;
		}
%>
</head>
<body>
	<div>Which  programming  language  do  you  prefer  for  dynamic 
		web  pages?</div>
	<a href="survey.jsp?a=0">JSP</a>
	<a href="survey.jsp?a=1">PHP</a>
	<a href="survey.jsp?a=2">ASP</a>
	<a href="survey.jsp?a=3">ColdFusion</a>
	<br>
	<br> JSP:<%
		out.println(jsp);
	%>
	ASP:<%
		out.println(asp);
	%>
	PHP:<%
		out.println(php);
	%>
	ColdFusion:<%
		out.println(cf);
	%>

</body>
</html>