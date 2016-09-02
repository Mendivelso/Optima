<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>formulario</title>
<style type="text/css">
@font-face {
  font-family:"Quicksand-Regular";
  src:url(css/fonts/Quicksand-Regular.otf)format("truetype");
}
.cont{
  background:#009ba8;
  border-radius: 15px;
}
h1{
  text-align: center;
  color: #fff;
  font-family:"Quicksand-Regular";
  font-size: 35px;
  text-transform: uppercase;

}
a{
  text-decoration: none;
}
</style>
<script language="JavaScript">
setTimeout("update()",4000);
function update(){
document.location.href="index.html"
}
</script>
</head>

<body>
  <?php
  $mail='"Contacto"';
  $name = $_POST['txtName'];
  $emp = $_POST['txtEmp'];
  $cargo = $_POST['txtCargo'];
  $men = $_POST['txtMsj'];

  $header = 'From: ' . $mail . " \r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";
  $mensaje = " \r\n";

  /*$mensaje = "Este mensaje fue enviado por " . $name .  ", su telefono es  " . $tel . ", su direccion es  " . $dir . ", El mensaje es  " . $obs . " \r\n";*/

  $mensaje = '
  Este mensaje fue enviado por:
  Nombre interesado: '.$name.'
  Empresa: '. $emp . '
  Su Cargo es: '. $cargo . '
  El Mensaje es  '. $men .'
  ';

  //echo $mensaje;

  $mensaje .= "Enviado el " . date('d/m/Y', time());
  $para = 'optima@optimatm.com'; 
  $asunto = 'Nuevo Contacto Optima tm';


  mail($para, $asunto, utf8_decode($mensaje), $header);

  ?>
  <p align="center" class="Estilo2 Estilo5">
    <div class="cont">
      <a href="index.html">
        <center><img src="img/logoblanco.png" width="15%"></center>
        <h1>Gracias por dejar tu mensaje  pronto nos comunicaremos</h1>
          <br /><br/>
      </a>
    </div>
  </p>
</body>
</html>
