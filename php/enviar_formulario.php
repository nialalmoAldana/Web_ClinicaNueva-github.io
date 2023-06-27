<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  $destinatario = 'nicalealdmor@hotmail.com'; // Reemplaza esto con tu dirección de correo electrónico institucional

  $asunto = 'Formulario de contacto';
  $cuerpo = "Nombre: $nombre\nCorreo electrónico: $email\nMensaje: $mensaje";

  $headers = "From: $nombre <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo '¡El formulario ha sido enviado con éxito!';
  } else {
    echo 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.';
  }
}
?>