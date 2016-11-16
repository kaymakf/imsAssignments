<%@ page import="java.util.List" %><%-- Created by IntelliJ IDEA. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title></title>
  </head>
  <body>
      <%
          Cookie[] cookies = request.getCookies();
          if(cookies == null) {
      %>
            <form action="main.jsp">
                Click for save your cookie:<br>
                <input type="submit" value="Click!">
            </form>
      <%
          }
      %>
  </body>
</html>
<%
    public void saveCookie(){
        response.addCookie(new Cookie("Valid","true"));
    }
%>