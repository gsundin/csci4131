<?php
	// Start the session
	session_start();
	session_destroy();
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="client.js"></script>
  <title>Asynchronous Requests</title>
</head>
<body>
	<h2>Asynchronous Stuff</h2>
	<form id="frm">
		First Name: <input id="first_name" name="first_name" type="text"><br>
		Last Name: <input id="last_name" name="last_name" type="text"><br>
		Address Line 1: <input id="add1" name="add1" type="text"><br>
		Address Line 2: <input id="add2" name="add2" type="text"><br>
		City: <input id="city" name="city" type="text"><br>
		State: <input id="state" name="state" type="text"><br>
		Zip Code: <input id="zip" name="zip" type="text"><br>
	</form>

	<input name="myBtn" type="submit" value="Submit Data" onclick="ajax_post();"> <br><br>
	<div id="status"></div>
</body>
</html>