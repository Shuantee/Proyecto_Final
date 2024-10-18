<script>
    import Header from '$lib/header.svelte';
    import Footer from '$lib/footer.svelte';
  </script>

<Header />

<!-- Aquí es donde el contenido de cada página irá -->
<main>
  <slot></slot> <!-- Esto representa el contenido de cada página individual -->
</main>

<Footer />

<style>
    main {
      padding: 2rem;
      min-height: calc(100vh - 4rem); /* Ajuste para evitar que el footer se superponga */
      padding-bottom: 4rem; /* Espacio para el footer */
    }
  </style>