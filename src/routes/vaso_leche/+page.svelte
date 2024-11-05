
<script> 	
import { onDestroy } from 'svelte';	
	
	let ver = false;
	let currentIndex = 0;
  const images = [
    
             "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721751/miproyecto/ubqfxcpu6c2wetz3jamw.jpg",
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721727/miproyecto/wbssonvbrggvrsw3gzk9.jpg" ,
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721697/miproyecto/zhdua4j8lcwley6dtoyq.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721653/miproyecto/udausemzca968caqnhtd.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721633/miproyecto/ccqpzhjj8jcdjpvdqqrd.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721615/miproyecto/sgyn1mlmj2jxbc2ot9bm.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721568/miproyecto/ykswvqg5cffn1dzzafu8.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721529/miproyecto/srv0b76stqoh06c7h6xo.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721468/miproyecto/uv2jh7baitoz8lvao6qy.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721421/miproyecto/fr5jab4ekgliwahacyla.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721400/miproyecto/abtcp3qpsh1p8ky6ktz7.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721358/miproyecto/gsudfb2rjm5fdqk2lucn.jpg", 
			 "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721348/miproyecto/ywqribekmk286n9pccqo.jpg",
  ];
  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  // Avance automático cada 3 segundos
  const interval = setInterval(next, 5000);

  // Limpia el intervalo al desmontar el componente
  onDestroy(() => {
    clearInterval(interval);
  });
</script>



<br>
<section class="pregunta">
	<h1>
		¿Qué es vaso de leche?
	</h1>
</section>
<section class="contener">
	<div class="slider-wrapper">
	  <button class="arrow prev" on:click={prev}>❮</button>
	  <img src={images[currentIndex]} alt="Carousel image" />
	  <button class="arrow next" on:click={next}>❯</button>
	</div>
  </section>
<section>
	<p>
		En las imágenes anteriores se puede observar el alimento que completa el vaso de leche, 
		siendo muchos ejemplos de diferentes conjuntos de alimentos distintos
	</p>
  </section>
  <br>
  <section>
	<h1>ventajas y desventajas:</h1>
	<br>
	<p>
		<b>Vetanjas:</b>
		<br>
		Que esto es un alimento suave que puede ayudar a los estudiantes a 
		alimentarse sin tener que sobrecargar sus cuerpos con alimentos fuertes como en el complemento preparado.
		<br>
		<br>
		<b>Desventajas:</b>
		<br>
		Que algunas personas con alguna intoleancia ya sea al glúten de los panes y/o a los lacteos que son una parte de el alimento pero 
		estas personas tampoco pueden cargare tanto con el complemento preparado lo cual puede provocarles un 
		hambre fuerte por no poder comer alguno de los dos complementos.
	</p>
  </section>

  <section>
	<h1> <b>Conclusión</b> </h1>
	<p>
		El vaso de leche es una comida diferente de lácteos,frutas y alguna harina como panes,
		 estas comidas son traidas cada dia yson en diferentes combinaciones.
	</p>
  </section>



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
		.menu-horizontal {
			
		}
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


	.pregunta h1{
		padding: 20px;
		text-align: center;
		text-transform: uppercase;
		font-size: 25px;
	}

	.contener{
	padding: 2rem;

}

.slider-wrapper{
	position: relative;
	max-width: 48rem;
	margin: 0 auto;
}

.slider{
	display: flex;
	aspect-ratio: 16/9;
	overflow: auto;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	box-shadow: 0 1.5rem 3rem -0.75rem ssla (0%,0%,0%,0.25);
}
.slider-wrapper {
    position: relative;
    max-width: 48rem;
    margin: 0 auto;
    text-align: center;
  }
  
  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 2em;
    cursor: pointer;
    z-index: 10;
  }
  
  .prev {
    left: -30px;
  }
  
  .next {
    right: -30px;
  }
</style>