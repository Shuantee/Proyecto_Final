
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