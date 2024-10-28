<script>
  let name = '';
  let email = '';
  let pin = '';
  let errorMessage = '';

  // Función para manejar el login
  function handleLogin() {
    if (!name || !email || !pin) {
      errorMessage = 'Todos los campos son obligatorios!';
    } else {
      errorMessage = '';
      console.log('Iniciando sesión con:', { name, email, pin });
      // Aquí puedes añadir la lógica de autenticación
    }
  }
</script>

<style>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
</style>

<section class="section">
  <div class="login-container">
    <h1 class="title has-text-centered">Iniciar Sesión</h1>

    <div class="box">
      {#if errorMessage}
        <article class="message is-danger">
          <div class="message-body">{errorMessage}</div>
        </article>
      {/if}

      <!-- Campo Nombre -->
      <div class="field">
        <label class="label"> Nombre</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Ingresa tu nombre"
            bind:value={name}
          />
        </div>
      </div>

      <!-- Campo Correo -->
      <div class="field">
        <label class="label">Correo</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Ingresa tu correo"
            bind:value={email}
          />
        </div>
      </div>

      <!-- Campo PIN -->
      <div class="field">
        <label class="label">PIN</label>
        <div class="control">
          <input
            class="input"
            type="password"
            placeholder="Ingresa tu PIN"
            bind:value={pin}
          />
        </div>
      </div>

      <!-- Botón de Iniciar Sesión en Verde -->
      <div class="field">
        <div class="control">
          <button class="button is-success is-fullwidth" on:click={handleLogin}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
