<%@page import="com.Power"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>ElectroGrid Power Station Monitoring</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.js"></script>
<script src="Components/users.js"></script>

</head>
<body>
		<div class="container">
		 <div class="row">
		 <div class="col-6">
		
		<h1>Power Station</h1>
		<form id="formUsers" name="formUsers" method="post" enctype="multipart/form-data">
			 Power Station Name:
			<input id="name" name="name" type="text" class="form-control form-control-sm">
			<br> Energy Type:
			<input id="eType" name="eType" type="text" class="form-control form-control-sm">
			<br> Mega Watts:
			<input id="cMW" name="cMW" type="text" class="form-control form-control-sm">
			<br> Active Status:
			<input id="status" name="status" type="text" class="form-control form-control-sm">
			<br>
			<br>
			<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
			<input type="hidden" id="hidUserIDSave" name="hidUserIDSave" value="">
		</form>
		<br>
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
		
		<br>
		<div id="divUsersGrid">
			
			 <%
	 	    Power power = new Power();
	 	   out.print(power.readData());
	       %>
		</div>
		
		</div>
		</div>
		</div>

</body>
</html>