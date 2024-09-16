<header class="encabezado">

	<div class="contenedor_menu">
		<div class="logo">
			<img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724702751/miproyecto/boc1vxlyzijxtnr2foel.png"
				alt="logo">
		</div>

		<div class="barras">
			<div id="back_menu"></div>
			<nav>
				<img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724702751/miproyecto/boc1vxlyzijxtnr2foel.png"
				alt="logo">
				<ul class="menu-horizontal">
					<li><a href="/">Vuelve al Inicio</a></li>
					<li><a href="/">inscripción</a>
					<ul class="menu-vertical">
						<li><a href="https://forms.gle/qYtmYsHZeRb7onz68">Formulario</a></li>
					</ul>
				    </li>
				    <li><a href="/inicio_sesion">Inicia sesión</a></li>
				    <li><a href="/quejas">Quejas</a></li>
			    </ul>
			</nav>
		</div>
	</div>

	<br />
	<br />
	<main>
		<div class="contenedor-cover">
			<div class="cover">
				<div class="text">
					<h1>INICIO DE SESIÓN</h1>
		        </div>
		    </div>
	    </div>
    </main>
</header>

<section class="formulario">
	<form name="Nuevo usuario" method="post"> 
	   
		Nombre del estudiante:
		<br>
		<input type="text" name="Nombre" placeholder="Ingrese su nombre..." required>
		<br>
		Apellido:
		<br>
		<input type="text" name="Apellido" placeholder="Ingrese su apellido..." required>
		<br>
		Nikname:
	   <br>
		<input type="text" name="Nikname" placeholder="Ingrese su Nikname..." required>
		<br>
	   Contraseña:
	   <br>
		<input type="password" name="Contraseña" placeholder="Ingrese su Contraseña..." required>
		<br>
	</form>

	<button>enviar</button>
  </section>

<footer class="pie_de_pagina">
	<div class="container">
		<div class="footer-link">
			<div class="img">
				<img
					src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724702751/miproyecto/boc1vxlyzijxtnr2foel.png"
					alt="logo"
					class="logoa"
				/>
				<img
					src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724702846/miproyecto/k123hi9vn2o4ns9jevqt.jpg"
					alt="lola"
					class="lola"
				/>
			</div>
			<div class="link">
				<h4>Compañía</h4>
				<ul>
					<li><a href="/">señor1</a></li>
					<li><a href="/">señor2</a></li>
					<li><a href="/">señora3</a></li>
				</ul>
			</div>
			<div class="link">
				<h4>Compañía</h4>
				<ul>
					<li><a href="/">señor4</a></li>
					<li><a href="/">señor5</a></li>
				</ul>
			</div>
			<div class="link">
				<h4>Queja</h4>
				<ul>
					<li><a href="/">Inquietudes</a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>


<style>
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		list-style: none;
	}

	.encabezado {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url(https://res.cloudinary.com/dapvpqxhz/image/upload/v1724703252/miproyecto/ecswdprmp2m68dgjvzsx.jpg);
		min-height: 55vh;
		background-position: center center ;
		background-repeat: no-repeat;
		background-size: cover;
		align-items: center;
		padding: 40px;
		z-index: 1;
		}

	.contenedor_menu{ 
		max-width: 1200px;
		height: 100%;
		margin: auto;
		display: flex;
		justify-content: space-between;
	}
	.logo{
		height:100px;
		display: flex;
		align-items: center;
	}
	.logo img {
		width: 95px;
		border-radius: 60%;
		position: relative;
		font-size: 25px;
	}

	.barras {
		display: flex;
		align-items: center;
	}

	.barras .menu-horizontal {
		display: flex;
		justify-content: space-between;
	}
	.barras .menu-horizontal li{
		margin-left: 36px;
	}

	.barras .menu-horizontal li a {
		font-size: 16px;
		color: white;
		margin-left: 36px;
		display: block;
		text-transform: uppercase;
	}

	.barras nav img{
		display: none;
	}
	.encabezado li:hover {
		background: rgb(0, 41, 80); 
	}

	.barras .menu-horizontal .menu-vertical {
		position: absolute;
		display: none;
		width: 200px;
		background-color: rgb(107, 107, 104);
	}

	.encabezado .menu-horizontal li:hover .menu-vertical {
		display: block;
	}
	
    .contenedor-cover{
		width: 100%;
		height: 800%;
		padding: 40px;
	}

	.cover{
		max-width: 1200px;
		height: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}
	
	.cover .text h1{
		font-size: 34px;
		color: white;
		text-transform: uppercase;
	}

	@media screen and (max-width:1200px){

		.encabezado{
			padding:40px;
		}
	}

    .pie_de_pagina {
		background-color: rgb(39, 82, 45);
	}

	.pie_de_pagina .img {
		text-align: center;
	}

	.pie_de_pagina img {
		margin-bottom: 10px;
	}

	.pie_de_pagina .link a {
		display: block;
		margin: 20px;
	}

	.pie_de_pagina .logoa {
		width: 65px;
		border-radius: 50%;
		position: relative;
	}
	.pie_de_pagina .lola {
		width: 65px;
		border-radius: 50%;
		position: relative;
	}


	.pie_de_pagina .img {
		margin-top: 50px;
	}

	.pie_de_pagina .footer-link {
		display: flex;
		justify-content: space-between;
		width: 50%;
		line-height: 5px;
		margin-left: 46px;
		text-align: center;
	}

	.link {
		margin-left: 35px;
		margin-top: 20px;
		text-align: center;
	}
	.footer-link h4 {
		position: relative;
		margin-bottom: 30px;
		font-weight: 400;
		font-size: 15px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		color: rgb(245, 255, 110);
		text-align: center;
	}

	.footer-link li a {
		position: relative;
		font-weight: 400;
		font-size: 15px;
		font-family: Century Schoolbook;
		color: rgb(253, 253, 253);
	}

	.pie_de_pagina a:hover {
		background: rgb(146, 0, 0);
		padding: 10px;
		
	}
</style>