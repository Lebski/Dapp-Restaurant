 <?php
$servername = "localhost";
$username = "root";
$password = "asdf";
$dbname = "itmanagement";

// Create connection
$mysqli = new mysqli($servername, $username, $password, $dbname);

//$stmt = $mysqli->prepare("SELECT * FROM bestellungen");
//$stmt->bind_param("s", $_POST['name']);
//$stmt->execute();
//$result = $stmt->get_result();
//if($result->num_rows === 0) exit('No rows');
//while($row = $result->fetch_assoc()) {
//  print_r($row);
//}

$allDrinks = (($_POST['cocktail0'] != 'none') ? "Zombie: " . "[" . $_POST['cocktail0'] . "]   " : "") . (($_POST['cocktail1'] != 'none') ? "Wodka: " . "[" . $_POST['cocktail1'] . "]   " : "") . (($_POST['cocktail2'] != 'none') ? "Tequila: " . "[" . $_POST['cocktail2'] . "]   " : "") . (($_POST['cocktail3'] != 'none') ? "JimBean: " . "[" . $_POST['cocktail3'] . "]   " : "");
//$allDrinks = $_POST['drinks'];
$transactionid = $_POST['txid'];

$stmt = $mysqli->prepare("INSERT INTO bestellungen(tischnummer,drinks, transactionid) VALUES (?,?,?)");
$stmt->bind_param("iss", $_POST['table'],$allDrinks,$transactionid);

$stmt->execute();


//var_export($ages);
$stmt->close();
$mysqli->close();
?>
