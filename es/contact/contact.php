<!DOCTYPE html>
<!--hecho por Alvaro Avalos
Contacto:
tlalvaro15@gmail.com
+51 931 740 008-->
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Dactilar</title>
		<link rel="shortcut icon" href="../../logo/logo_color.png">
		<link rel="apple-touch-icon" href="../../logo/logo_color.png">
		<link rel="stylesheet" type="text/css" href="../../contact/contact_style.css">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">
	</head>

<body>

	<div class="select-language">
		<div class="action-lang">
			<ul>
				<li><a href="../../contact/contact.php">en</a></li>
				<li><a href="./contact.php">es</a></li>
			</ul>
		</div>
	</div>

	<div class="firstnavbar">
		<ul class="firstnavbar-links">
			<li><a class="home" href="../index">inicio</a></li>
			<li><a class="about" href="../about/about">sobre nosotros</a></li>
			<li><a class="contact"href="./contact.php">contacto</a></li>
			<li><a class="shop" href="../shop/shop">tienda</a></li>
		</ul>

	<div class="firstnavbar-cel">
		<div class="firstnavbar-cel-button">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
			<div class="line4"></div>
			<div class="line5"></div>
		</div>
	</div>

	</div>

	<div class="logo-container">
		<div class="logo-clean">
			<img src="../../logo/logo_clean.png">
		</div> 
	</div>

	<div class="contact-form">
		<form method="POST">

			<div class="full-name">

				<div class="first-name">
					<label class="name-sub" for="name">ID*</label>
					<input type="text" name="firstname" required>
					<label class="subtitle-firstname" for="firstname">Nombres</label>
				</div>

				<div class="last-name">
					<br><input type="text" name="lastname" required>
					<label class="subtitle-lastname" for="lastname">Apellidos</label>
				</div>
 
			</div>

			<div class="left-content">

				<div class="contact-email">
					<label for="email-adress">Correo Electrónico*</label>
					<input type="email" name="email" required>
				</div>

				<div class="contact-subject">
					<label for="subject">Asunto*</label>
					<input type="text" name="subject" required>

				</div>

				<div class="contact-message">
					<label for="message">Mensaje*</label>
					<textarea maxlength="10024" type="text" name="message" required></textarea>
				</div>

				<div class="contact-submit">
					<input type="submit" name="submit" value="enviar">
				</div>

			</div>

		</form>
		
		<?php
	
    	if(isset($_POST['submit'])){
    	    
    	    include_once '../../contact/contact_connect.php';
    	    $obj = new Contact();
    	    
    	    $res = $obj->contact($_POST);
    	    
    	    $to_email = str_replace(" ", "", $_POST['email']);
    	    
    	    $body = "This is a test... Thanks for your interest, we will be in touch...";
    	    
    	    $headers = 'From: Dactilar <hola@dactilar.com.pe>' //. "\r\n"
    	                //'Reply-To: hola@dactilar.com.pe'
    	                ;
    	    
    	    mail($to_email, $_POST['subject'], $body, $headers);
    	    
    	    $to_email_own = 'hola@dactilar.com.pe';
    	    
    	    $body_own = 'De: ' . ucfirst(strtolower(str_replace(" ", "", $_POST['firstname']))) ." ". 
    	                        ucfirst(strtolower(str_replace(" ", "", $_POST['lastname']))) . "\r\n" .
    	                'Correo: ' . str_replace(" ", "", $_POST['email']) ."\r\n" .
    	                'Asunto: ' . ucfirst(strtolower($_POST['subject'])) . "\r\n" .
    	                'Contenido: ' . "\r\n" .
    	                $_POST['message'];
    	    
    	    $headers_own .= 'From: ' . $_POST['email'];
    	    
    	    mail($to_email_own, $_POST['subject'], $body_own, $headers_own);
    	    
    	    if($res == true) {
    	        
    	        echo "<script>alert('te conectaste maldita sea fuck yeah')</script>";
    	        
    	    }else {
    	        
    	        echo "<script>alert('ptmr qué hiciste mal a parte de nacer')</script>";
    	        
    	    }
    	}
    	?>
		
	</div>

	<script src="../../contact/contact_script.js"></script>
</body>
</html>