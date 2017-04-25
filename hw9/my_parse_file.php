<?php
	session_start();

	if (!$_SESSION["creds"]) {
		$_SESSION["creds"] = $_SESSION["creds"] . '&emsp;{ <br> &emsp;&emsp;FirstName: "' . $_POST['firstname'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;LastName: "' . $_POST['lastname'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;Address Line 1: "' . $_POST['add1'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;Address Line 2: "' . $_POST['add2'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;City: "' . $_POST['city'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;State: "' . $_POST['state'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;Zip: "' . $_POST['zip'] . '"'
		. '<br> &emsp;}';
	} else {
		$_SESSION["creds"] = $_SESSION["creds"] . ',<br>&emsp;{ <br> &emsp;&emsp;FirstName: "' . $_POST['firstname'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;LastName: "' . $_POST['lastname'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;Address Line 1: "' . $_POST['add1'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;Address Line 2: "' . $_POST['add2'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;City: "' . $_POST['city'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;State: "' . $_POST['state'] . '"' . ',' . "<br>"
		. '   &emsp;&emsp;Zip: "' . $_POST['zip'] . '"'
		. '<br> &emsp;}';
	}

	echo '{<br>' . $_SESSION["creds"] . '<br>}';
?>