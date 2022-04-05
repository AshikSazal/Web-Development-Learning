<?php
$file_name = $file_type = $file_tem_loc = $file_size = $file_store = '';
if (isset($_POST['upload'])) {
    $file_name = $_FILES['file']['name'];
    $file_type = $_FILES['file']['type'];
    $file_size = $_FILES['file']['size'];
    $file_tem_loc = $_FILES['file']['tmp_name'];

    $file_store = "image/product/" . $file_name;


    $allowed = array('png', 'gif', 'jpg', 'jpeg');
    $ext = pathinfo($file_name, PATHINFO_EXTENSION);
    if (in_array($ext, $allowed)) {
        move_uploaded_file($file_tem_loc, $file_store);
    } else {
        echo "file not format";
    }

    echo $file_store . '<br>';
    echo $file_tem_loc . '<br>';
    echo $file_type;

    $conn = new mysqli('localhost', 'root', '', 'practice');
    $sql = "insert into uploadimage(location) values ('$file_store')";
    mysqli_query($conn, $sql);
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>

    <form method="post" action="?" enctype="multipart/form-data">
        <label>Uploading file</label>
        <p> <input type="file" name="file" placeholder="hi"> </p>
        <p> <input type="submit" name="upload" value="upload image"> </p>
    </form>

</body>

</html>