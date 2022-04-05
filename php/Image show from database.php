<?php
$conn = new mysqli('localhost', 'root', '', 'ecommerce');
$query = mysqli_query($conn,"select * from product");
$rowcount = mysqli_num_rows($query);
while($row = mysqli_fetch_array($query)){
  echo "<img src=$row[location] style='height: 100px; width: 100px;'>";
}

?>
