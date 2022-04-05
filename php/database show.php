<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
      table{
        border-collapse: collapse;
        width: 100%;
        color: #588c7e;
        font-family: monospace;
        font-size: 25px;
        text-align: left;
      }
      th{
        background-color: #588c7e;
        color: white;
      }
      tr:nth-child(even){
        background-color: #f2f2f2;
      }
      th td{
        display: flex;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
      </tr>
  <?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "practice";

  // Create connection
  $conn = new mysqli($servername, $username, $password,$database);

  $sql = "select * from info order by address asc";
  $result = $conn-> query($sql);
  if($result -> num_rows > 0){
    while ($row=$result->fetch_assoc()) {
      echo "<tr><td>".$row["id"]."</td>".
      "<td>".$row["name"]."</td>".
      "<td>".$row["address"]."</td></tr>";
    }
    echo "</table>";
  }
  else {
    echo "0 result";
  }
  $conn->close();
  ?>
    </table>

  </body>
</html>
