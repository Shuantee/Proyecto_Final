<script>
	import { onMount } from 'svelte';
  
	let isActive = false;
  
	onMount(() => {
	  // Add Bulma CSS via CDN
	  const link = document.createElement('link');
	  link.rel = 'stylesheet';
	  link.href = 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css';
	  document.head.appendChild(link);
	});
  
	function toggleNavbar() {
	  isActive = !isActive;
	}
  </script>
  
  <header class="hero is-medium">
	<div class="hero-head">
	  <nav class="navbar is-transparent"  aria-label="main navigation">
		<div class="navbar-brand">
		  <a class="navbar-item" href="/">
			<img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724702751/miproyecto/boc1vxlyzijxtnr2foel.png" alt="JRL Logo" class="logo">
		  </a>
  
		  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" on:click={toggleNavbar}>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		  </a>
		</div>
  
		<div class="navbar-menu" class:is-active={isActive}>
		  <div class="navbar-end">
			<a class="navbar-item" href="/">INICIO</a>
			<a class="navbar-item" href="/login">INICIA SESION</a>
			<a class="navbar-item" href="/quejas">QUEJAS</a>
		  </div>
		</div>
	  </nav>
	</div>
<<<<<<< HEAD

	<br />
	<br />
	<main>
		<div class="contenedor-cover">
			<div class="cover">
				<div class="text">
					<h1>hola</h1>
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
=======
  </header>
  
  <style>
	.hero {
	  background-image: url('https://res.cloudinary.com/dapvpqxhz/image/upload/v1724703252/miproyecto/ecswdprmp2m68dgjvzsx.jpg');
	  background-size: cover;
	  background-position: center;
>>>>>>> 48f531353f885fa3e3837a9ed348b363f39e9bce
	}
  
	.navbar {
	  background-color: transparent;
	}
  
	.navbar-menu {
	  background-color: transparent; /* Update 1 */
	}
  
	.navbar-item {
	  color: white !important; /* Update 2 */
	  font-weight: bold;
	  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Update 2 */
	}
  
	.logo {
	  max-height: 80px;
	  border-radius: 50%;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Update 3 */
	}
  
	@media screen and (max-width: 1023px) {
	  .navbar-menu {
		background-color: rgba(0, 0, 0, 0.7); /* Update 4 */
	  }
	  
	  .navbar-burger span {
		background-color: white;
	  }
	}
  </style>