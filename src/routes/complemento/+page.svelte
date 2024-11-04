<script> 	
import { onDestroy } from 'svelte';	
	
	let ver = false;
	let currentIndex = 0;
  const images = [
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721739/miproyecto/dg597fo7dpsqjopm0tqz.jpg" ,
			"https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721713/miproyecto/fbqj6jpem2qqcm9lpd4m.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721687/miproyecto/j9ot6uycxcukys6m0iwe.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721671/miproyecto/tizfliojhmphgsqu1hde.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721597/miproyecto/zpkxtt96ymyqvcq1zwk3.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721584/miproyecto/ykukqyks5ycbv6kym2nx.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721539/miproyecto/dssrpechg2uzfudxysur.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721508/miproyecto/ixphpcpxwi4bgezhup4a.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721497/miproyecto/hyyzx73u39j2fx8u3tsy.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721483/miproyecto/h6jspn3xxkp119bmo6wf.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721443/miproyecto/umptturspkmfowpqqnb2.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721433/miproyecto/p734ertdvrjwsovbtv91.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721411/miproyecto/os3qfgtysxxscpvs4kvs.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721382/miproyecto/jx9q99eh98jpi7tgumnh.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721376/miproyecto/cnyuwqthr8rhakmk0qw3.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721367/miproyecto/reji14jtdun7soggxjhh.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721340/miproyecto/ktulillzaumeeh9adjlb.jpg" ,
	        "https://res.cloudinary.com/dapvpqxhz/image/upload/v1724721327/miproyecto/ullpwk1n9izaqzhl2s0m.jpg" ,
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

<section class="pregunta">
<h1>
    ¿QUÉ ES COMPLEMENTO?
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

    En las anteriores imagenes se puede observar una serie de alimentos preparados que dan la invitación a contenedor
	a profundidad las comidas que van a ingerir y la combinación de alimentos emplatados.

</section>

<section>
<h1><b>ventajas y desventajas.</b></h1>
<p>
	<b>Ventajas:</b>
	<br>
	Este alimento es más completo y puede ayudar 
	mucho más a llenar a los estudiantes que por algún motivo o 
	circunstancia no puedan desayunar en sus casas, además que es esta comida es una ayuda mejor 
	para que los estudiantes puedan alimentarse de una forma más segura y completa.
   <br>
   <br>
	<b>Desventajas:</b>
   <br>
  Que estos alimentos pueden ser en diferentes emplatados y diferentes combinaciones de comida
  que puede resultar que algunos alimentos no sean lo suficientemente agradables a los estudiantes, 
  y también que estos alimentos pueden resultar fríos y de un gusto "malo" a la comida.
</p>
</section>

<section>
<h1>Conclusión</h1>
<p>
	El complemento o también llamado complemento preparado, es un conjunto de alimentos preparados y servidos en platos,
	 estos alimentos están hechos en combinaciones de diferentes conjuntos. 
	 Un ejemplo esto sería arroz con huevo y guineo, con un jugo de tomate.
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

.pregunta h1{
	padding: 20px;
	text-align: center;
	text-transform: uppercase;
	font-size: 25px;
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