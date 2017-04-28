<?
session_start();

if( $_POST )
{
  $_SESSION["creds"] = '<br>{ <br> &emsp;FirstName: "' . $_POST['firstname'] . '"' . ',' . "<br>"
    . '   &emsp;LastName: "' . $_POST['lastname'] . '"' . ',' . "<br>"
    . '   &emsp;Address Line 1: "' . $_POST['add1'] . '"' . ',' . "<br>"
    . '   &emsp;Address Line 2: "' . $_POST['add2'] . '"' . ',' . "<br>"
    . '   &emsp;City: "' . $_POST['city'] . '"' . ',' . "<br>"
    . '   &emsp;State: "' . $_POST['state'] . '"' . ',' . "<br>"
    . '   &emsp;Zip: "' . $_POST['zip'] . '"'
    . '<br>}';

  DEFINE('DB_USER', 'root');
  DEFINE('DB_PASSWORD', 'password');  // very secure, I know
  DEFINE('DB_HOST', 'localhost');
  DEFINE('DB_NAME', 'my_database');

  $conn = mysql_connect("127.0.0.1:3306","root","password");

  if (!$conn)
  {
    die('Could not connect: ' . mysql_error());
  }

  $users_id = 0;

  if (!$_SESSION["id"]) {
    $_SESSION["id"] = 0;
  } else {
    $_SESSION["id"] = $_SESSION["id"] + 1;
  }

  $retrieval = $_POST["retrieval"];  // If TRUE, we will retrieve database instead of trying to add to it

  $id_counter = $_SESSION["id"];

  $users_firstname = $_POST['firstname'];
  $users_lastname = $_POST['lastname'];
  $users_address1 = $_POST['add1'];
  $users_address2 = $_POST['add2'];
  $users_city = $_POST['city'];
  $users_state = $_POST['state'];
  $users_zip = $_POST['zip'];

  mysql_select_db('my_database');

  if ($retrieval == 0) {
    $query = "INSERT INTO `addressbook` (`ID`, `First Name`, `Last Name`, `Address Line 1`,
        `Address Line 2`, `City`, `State`, `Zip Code`) VALUES ('{$id_counter}', '{$users_firstname}',
        '{$users_lastname}', '{$users_address1}', '{$users_address2}',
        '{$users_city}', '{$users_state}', '{$users_zip}');";
  } else {
    $query = "SELECT `ID`, `First Name`, `Last Name`, `Address Line 1`,
        `Address Line 2`, `City`, `State`, `Zip Code` FROM `addressbook` ORDER BY `Last Name`, `First Name`;";
  }

  $retval = mysql_query($query, $conn);

  if(!$retval) {
    die('Could not enter data: ' . mysql_error());
  } else if ($retrieval == 0) {
    echo "<h2>Data has been submitted:</h2>";

    echo $_SESSION["creds"];

    echo "<br><h2>Here's what the query looked like:</h2><br>";

    echo $query;
  } else {
    echo "<h2>Here's what the query looked like:</h2><br>";

    echo $query;

    echo "<br><h2>Data retrieved:</h2><br>";

    while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
      echo "<b>ID:</b> {$row['ID']}  <br> ".
         "<b>First Name:</b> {$row['First Name']}  <br> ".
         "<b>Last Name:</b> {$row['Last Name']} <br> ".
         "<b>Address Line 1:</b> {$row['Address Line 1']} <br> ".
         "<b>Address Line 2:</b> {$row['Address Line 2']}  <br> ".
         "<b>City:</b> {$row['City']}  <br> ".
         "<b>State:</b> {$row['State']}  <br> ".
         "<b>Zip Code:</b> {$row['Zip Code']}  <br> ".
         "--------------------------------<br>";
    }
  }

  mysql_close($conn);
}
?>
