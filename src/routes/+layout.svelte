<script lang="ts">
    import { page } from '$app/stores';
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <!-- Tu logo aquí -->
            Mi App
        </a>
    </div>

    <div class="navbar-menu">
        <div class="navbar-end">
            {#if $page.data.user}
                <div class="navbar-item">
                    Bienvenido, {$page.data.user.nombre}
                </div>
                <div class="navbar-item">
                    <form action="/logout" method="POST">
                        <button class="button is-light" type="submit">
                            Cerrar Sesión
                        </button>
                    </form>
                </div>
            {:else}
                <div class="navbar-item">
                    <a class="button is-primary" href="/login">
                        Iniciar Sesión
                    </a>
                </div>
            {/if}
        </div>
    </div>
</nav>

<main>
    <slot />
</main>