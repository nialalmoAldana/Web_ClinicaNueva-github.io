<?php

    $primer_nombre = isset($_POST["first-name"]) ? $_POST['first-name']:'';
    $primer_apellido = isset($_POST["last-name"]) ? $_POST['last-name']:'';
    $segundo_nombre = isset($_POST["second-name"]) ? $_POST['second-name']:'';
    $segundo_apellido = isset($_POST["second-last-name"]) ? $_POST['second-last-name']:'';
    $tipo_documento = isset($_POST["document-type"]) ? $_POST['document-type']:'';
    $numero_documento = isset($_POST["document-number"]) ? $_POST['document-number']:'';
    $fecha_nacimiento = isset($_POST["birthdate"]) ? $_POST['birthdate']:'';
    $centro_atencion = isset($_POST["center"]) ? $_POST['txt_usuario']:'';
    $correo_electronico = isset($_POST["email"]) ? $_POST['txt_usuario']:'';
    $celular_paciente = isset($_POST["phone"]) ? $_POST['txt_usuario']:'';
    $celular_alternativo = isset($_POST["alternate-phone"]) ? $_POST['txt_usuario']:'';
    $aseguradora_paciente = isset($_POST["insurance"]) ? $_POST['txt_usuario']:'';
    $especialidad = isset($_POST["specialty"]) ? $_POST['txt_usuario']:'';

    try {

        $conexion = new PDO("mysql:host=localhost;port=3306;dbname=prueba_db", "root", "");
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    
        $pdo = $conexion->prepare('INSERT INTO usuarios(usuario, nombre, edad) VALUES(?, ?, ?)');
        $pdo->bindParam(1, $usuario);
        $pdo->bindParam(2, $nombre);
        $pdo->bindParam(3, $edad);
        $pdo->execute() or die(print($pdo->errorInfo()));
    
        echo json_encode('true');
    
    } catch(PDOException $error) {
        echo $error->getMessage();
        die();
    }