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
				    <li><a href="/login">Inicia sesión</a></li>
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
					<h1>Refrigerios Lola</h1>
		        </div>
		    </div>
	    </div>
    </main>
</header>

<style>
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
    
        @media screen and (max-width:1200px){
        .encabezado{
            padding:40px;
        }
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

	} /* hasta acá*/
	.cover .text h1 {
		font-size: 34px;
		color:white;
		width: 60%;
		text-transform: uppercase;
	}

	@media screen and (max-width:1200px){

		.encabezado{
			padding:40px;
		}
	}
</style>