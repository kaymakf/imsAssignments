<%@ page import="java.util.List" %><%-- Created by IntelliJ IDEA. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title></title>
  </head>
  <body>
      <%


          if(request.getParameter("save?") == null){
              Cookie[] cookies = request.getCookies();
                if(cookies == null) {
      %>
                    <form action="index.jsp" method="post">
                        Click to save your cookie:<br>
                        <input type="submit" value="Click!">
                        <input type="hidden" value="true" name="save?" />
                    </form>
      <%
                }
                else {
                    %>
                        <form action="index.jsp" method="post">
                            Click to delete your cookie:<br>
                        <input type="submit" value="Click!">
                        <input type="hidden" value="false" name="save?" />
                         </form>
      <%
                }
          }
          else {
                if(request.getParameter("save?") == "true") {
                    response.addCookie(new Cookie("saved", "true"));
                    response.sendRedirect("index.jsp");
                }
                else {
                    Cookie killMyCookie = new Cookie("saved", null);
                    killMyCookie.setMaxAge(0);
                    killMyCookie.setPath("/");
                    response.addCookie(killMyCookie);
                }
            }
      %>
  </body>
</html>
<%!

%>