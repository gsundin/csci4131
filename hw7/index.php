<!--TO SEE THE PHP YOU MUST RUN ON PHP SERVER-->
<!--LOCAL PHP5 SERVER: `php -S localhost:8080`-->

<!DOCTYPE html>

<html>

<head>
	<meta charset="UTF-8">
	<script src="client.js"></script>
	<title>Asynchronous Requests</title>
</head>

<body>
	<form id="frm">
		<input id="fname" type="text" name="FirstName" placeholder="First Name"><br>
		<input id="lname" type="text" name="LastName" placeholder="Last Name"><br>
		<input id="add1" type="text" name="AddressLine1" placeholder="Address Line 1"><br>
		<input id="add2" type="text" name="AddressLine2" placeholder="Address Line 2"><br>
		<input id="city" type="text" name="City" placeholder="City"><br>
		<input id="state" type="text" name="State" placeholder="State"><br>
		<input id="zip" type="text" name="ZipCode" placeholder="Zip Code"><br>
		<br>
		<button type="submit" name="submit" value="submit">Submit</button>
		<button type="cancel" name="cancel" value="cancel">Cancel</button>
	</form>

	<p>This code was tested on Chrome.</p>

	<?php

		if (isset($_GET['submit'])) {
			$creds->FirstName =  $_GET['FirstName'];
			$creds->LastName =  $_GET['LastName'];
			$creds->AddressLine1 =  $_GET['AddressLine1'];
			$creds->AddressLine2 =  $_GET['AddressLine2'];
			$creds->City =  $_GET['City'];
			$creds->State =  $_GET['State'];
			$creds->ZipCode =  $_GET['ZipCode'];

			$myJSON = json_encode($creds, JSON_PRETTY_PRINT);

			echo $myJSON;
		}
		
	?>
</body>

</html>