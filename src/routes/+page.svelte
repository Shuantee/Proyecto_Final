
<script> 	
	
	let ver = false;
 
	
</script>


<header class="encabezado">
	<div class="contenedor_menu">
		<div class="logo">
			<img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724702751/miproyecto/boc1vxlyzijxtnr2foel.png"
				alt="logo">
		</div>


			<div class="barras">
				
				<button id="abrir" class="abrir-menu" onclick={()=> ver = !ver}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
					  </svg>
				</button>
				<nav class="nav" class:visible={ver} id="nav" >
					<button id="cerrar" class="cerrar-menu" onclick={()=> ver = !ver}>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
							
						</svg>
					</button>
					<ul class="menu-horizontal">
						<li><a href="/">Inicio</a></li>
						<li><a href="/">Inscripción</a>
							<ul class="menu-vertical">
								<li><a href="https://forms.gle/qYtmYsHZeRb7onz68">Formulario</a></li>
							</ul>
						</li>
						<li><a href="./inicio_sesion">Inicia sesión</a></li>
						<li><a href="./quejas">Quejas</a></li>
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
					<h1>REFRIGERIOS LOLA</h1>
					<p>(RL)</p>
		        </div>
		    </div>
	    </div>
    </main>
</header>

<br />
<br />
<section class="contenido1">
	<h1>¡Bienvenidos a Refrigerios Lola!</h1>
	<br>
		<p>
		<b>
			Aquí podras ver qué alimentos entregan en la institución Lola Gonzalez. Esto es con el fin de
			que sepas cuál de los dos refirgerios escoger, si complemento o vaso de leche.
		</b>
	    </p>
		<p>
			<b>
				También, hay un espacio, llamado quejas, en donde puedas decir, soltar, manifestar, 
				comunicar, expresar, desahogar, opinar, proponer acerca de lo que no estas de acuerdo, 
				de la inconformidad, problema, dificultad que tienes del alimento.
			</b>
		</p>
	    <br />
	    <br />

	    <h3>
		    A continuación te mostraremos los dos tipos de alimentos que entregan para que te decidas por el
		    que maaaás te im-pac-tó.
	    </h3>
	    <br />
		<h3>(Recuerda que solo se puede escoger uno de estos :(...)</h3>
	    <br />
</section>
<section class="vaso">
	<div>
	<h2>Vaso de leche</h2>
	<div class="fotoVaso">
		<img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721727/miproyecto/wbssonvbrggvrsw3gzk9.jpg" alt="foto" class="foto">
		<img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721568/miproyecto/ykswvqg5cffn1dzzafu8.jpg" alt="foto" class="foto">
	</div>
	<p>
		Bienvenidos al vaso de leche, en este lugar lo que buscamos es darle un alimento ligero a los
		estudiantes con el cual se sientan a gusto, en este lugar obtienen bebidas lácteas variadas,
		tambien hay frutas, y comidas como panes que ayudan a un balance en el alimento de los
		estudiantes.
	<p>
	<a href="/vaso_leche" class="btn-1">¿Qué es?</a>
    </div>
</section>
<br />
<br />
<section class="comple">
	<h2>complemento</h2>
	<br>
	<div class="fotoComp">
		<img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721327/miproyecto/ullpwk1n9izaqzhl2s0m.jpg" alt="imagen" class="foto">
		<img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721443/miproyecto/umptturspkmfowpqqnb2.jpg" alt="fotis" class="fotos">
	</div>
	<p>
		En el complemento preparado los estudiantes obtienen comidas balanceadas para el desarrollo de
		los estudiantes a lo largo de su etapa estudiantil, en este lugar, se les da una comida
		balanceada en azucares, y calorias, todo para cuidar a los estudiantes.
	</p>

	<a href="/complemento" class="btn-1">¿Qué es?</a>
</section>
<br />

<footer class="pie_de_pagina">
	
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
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		align-items: center;
		padding: 40px;
		z-index: 1;
		position: relative;
		}
	.contenedor_menu{ 
		max-width: 1200px;
		height: 60px;
		margin: 0 auto;
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
		color: rgb(255, 255, 255);
		margin-left: 36px;
		display: block;
		text-transform: uppercase;
	}
	.encabezado li:hover {
		background: rgb(0, 41, 80); 
	}

	.barras .menu-horizontal .menu-vertical {
		position: absolute;
		display: none;
		width: 200px;
		background-color: rgb(114, 114, 112);
	}

	.encabezado .menu-horizontal li:hover .menu-vertical {
		display: block;
	}

	.abrir-menu, .cerrar-menu{
		display: none;
		border: 0;
		background: 0;
		color: rgb(255, 255, 255);
	}

	@media screen and (max-width:900px){
		.abrir-menu, .cerrar-menu{
			display: block;
			cursor: pointer;
		}
		.nav{
			display: none;
		}
		.nav{
			opacity: 0;
			visibility: hidden;
			display: flex;
			flex-direction: column;
			align-items: end;
			gap: 1rem;
			position: absolute;
			flex-direction: column;
			top: 0;
			right: 0;
			bottom: 0;
			align-items: end;
			background-color: rgb(27, 27, 27);
			padding: 2rem;
			z-index: 1;
			box-shadow: 0 0 0 1000vmax rgba(0, 0, 0, 0.5);
		}

		.menu-horizontal{
			flex-direction: column;
			align-items: end;
		}

		.nav.visible{
			opacity: 1;
			visibility: visible;
			display: block;
		}
		 
	    .menu-horizontal li a {
			color: black;
			margin-top: 25px;
			
		}
		.menu-horizontal a:hover{
		}
	}

	.cover{
		max-width: 1200px;
		height: 100%;
		margin: auto;
	}
	.cover .text{
		max-width: 400px;
	}
	.cover .text h1{
		width: 50%;
		font-size: 36px;
		font-weight: 600;
		color:white;
		margin-top: 40px;
	}
	.cover .text p{
		width: 50%;
		font-size: 18px;
		color: yellow;
	}

	/*otra cosa*/
	.contenido1 {
		text-align: left;
		margin: 25px 25px;
	}
	.contenido1 h1 {
		font-size: 32px;
		font-family: Malgun Gothic;
		color: rgb(0, 0, 0);
		text-transform: uppercase;
		padding: 12px 20px;
		text-align: center;
	}
	.contenido1 p {
		font-size: 32px;
		font-family: Malgun Gothic;
		color: rgb(0, 0, 0);
		text-transform: uppercase;
		padding: 12px 200px;
		text-align: center;
	}

	.contenido1 h3 {
		font-size: 30px;
		font-family: 'Times New Roman', Times, serif;
		color: rgba(12, 88, 5, 0.897);
		text-align: center;
		margin: 10px 90px;
	}

	.contenido1 p {
		font-size: 18px;
		color: black;
		padding: 40px;
	}

	.vaso {
		text-align: center;
		margin: 20px;
	}

	.vaso h2 {
		color: black;
		font-size: 30px;
		text-transform: uppercase;
		margin: 35px;
	}

	.vaso img{
	    width: 160px;
		height: 150px;
		border-radius: 40%;
		position: relative;
		font-size: 25px;
	}	
	.vaso .fotoVaso img{
		width: 155px;
		height: 160px;
		border-radius: 30%;
		position: relative;
		font-size: 20px;
	}
	.vaso p {
		display: flex;
		flex-wrap: wrap;
		min-width: 250px;
		padding: 25px;
		margin: 10px;
		flex: 1;
		min-width: 300px;
	}

	.btn-1 {
		display: inline-block;
		padding: 15px 35px;
		background-color:rgb(39, 82, 45);
		color:white;
	}

	.comple {
		text-align: center;
		margin: 20px;
	}

	.comple h2 {
		color: black;
		font-size: 30px;
		text-transform: uppercase;
		margin: 35px;
	}

	.comple img{
	    width: 160px;
		height: 150px;
		border-radius: 40%;
		position: relative;
		font-size: 25px;
	}	
	.comple .fotoComp img{
		width: 155px;
		height: 160px;
		border-radius: 30%;
		position: relative;
		font-size: 20px;
	}
	.comple p {
		display: flex;
		flex-wrap: wrap;
		min-width: 250px;
		padding: 25px;
		margin: 10px;
		flex: 1;
		min-width: 300px;
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
