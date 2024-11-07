<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav>
  {#if $page.data.user}
      <span>Bienvenido, {$page.data.user.nombre}</span>
      <form action="/logout" method="POST">
          <button type="submit">Cerrar sesión</button>
      </form>
  {:else}
      <a href="/login">Iniciar sesión</a>
  {/if}
</nav>

<slot />