<?php

	echo 'Thank you '. $_POST['firstname'] . ' ' . $_POST['lastname'] . ', says the PHP file';

	/*$q=$_GET["q"];

	echo "hello world\n";

	echo($q);

	// Process the form post entries
	$FirstName = $_GET["FirstName"];
	$LastName = $_GET["LastName"];

	// create a JSON response of the form submitted data
	if (count($_REQUEST) > 0) {
		$JSONResponse = "{";
		$JSONResponse = $JSONResponse . "\tFirst Name: \"$FirstName\"";
		$JSONResponse = $JSONResponse . "\tLast Name: \"$LastName\"";
		$JSONResponse = $JSONResponse . "}";
	}

	// Output the result if the form was submitted
	echo $JSONresponse === "" ? "" : $JSONresponse;*/

	echo "\ngoodbye world";

?>