<?
// Src: http://www.inmotionhosting.com/support/edu/website-design/using-php-and-mysql/php-insert-database
session_start();

if( $_POST )
{
  DEFINE('DB_USER', 'gsundin');
  DEFINE('DB_PASSWORD', 'password');  // very secure, I know
  DEFINE('DB_HOST', 'localhost');
  DEFINE('DB_NAME', 'my_database');

  $conn = mysql_connect("DB_HOST","DB_USER","DB_PASSWORD");

  if (!$conn)
  {
    die('Could not connect: ' . mysql_error());
  }

  mysql_select_db("database", $conn);

  $users_firstname = $_POST['firstname'];
  $users_lastname = $_POST['lastname'];
  $users_address1 = $_POST['add1'];
  $users_address2 = $_POST['add2'];
  $users_city = $_POST['city'];
  $users_state = $_POST['state'];
  $users_zip = $_POST['zip'];

  $users_firstname = mysql_real_escape_string($users_firstname);
  $users_lastname = mysql_real_escape_string($users_lastname);
  $users_address1 = mysql_real_escape_string($users_address1);
  $users_address2 = mysql_real_escape_string($users_address2);
  $users_city = mysql_real_escape_string($users_city);
  $users_state = mysql_real_escape_string($users_state);
  $users_zip = mysql_real_escape_string($users_zip);

  $query = "INSERT INTO `my_database`.`comments` (`firstname`, `lastname`, `add1`,
        `add2`, `city`, `state`, `zip`) VALUES (NULL, '$users_firstname',
        '$users_lastname', '$users_address1', '$users_address2',
        '$users_city', '$users_state', '$users_zip');";

  mysql_query($query);

  echo "<h2>Thank you for your Comment!</h2>";

  mysql_close($conn);
}
?>