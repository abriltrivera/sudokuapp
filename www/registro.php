<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $serverName = "localhost";
    $connectionOptions = array(
        "Database" => "sudokuapp",
        "Uid" => "root",
        "PWD" => " "
    );
    
    $conn = sqlsrv_connect($serverName, $connectionOptions);

    if ($conn === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];


    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);


    $sql = "INSERT INTO Users (NombreUsuario, Contraseña, CorreoElectronico) VALUES (?, ?, ?)";
    $params = array($name, $hashedPassword, $email);
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }


    sqlsrv_close($conn);


    header("Location: registro_exitoso.html");
    exit();
}
?>
