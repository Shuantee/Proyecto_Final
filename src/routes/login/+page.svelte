<script lang="ts">
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import type { ActionResult } from '@sveltejs/kit';

  let error: string | null = null;

  const handleSubmit = () => {
      return async ({ result }: { result: ActionResult }) => {
          if (result.type === 'failure') {
              error = result.data?.error as string;
          } else if (result.type === 'redirect') {
              goto(result.location);
          }
      };
  };
</script>

<div class="container">
  <div class="login-form">
      <h1 class="title">Iniciar Sesión</h1>

      {#if error}
          <div class="notification is-danger">
              {error}
          </div>
      {/if}

      <form 
          method="POST" 
          action="?/handleLogin" 
          use:enhance={handleSubmit}
      >
          <div class="field">
              <label class="label" for="email">Email:</label>
              <div class="control">
                  <input 
                      class="input" 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                  >
              </div>
          </div>

          <div class="field">
              <label class="label" for="pin">PIN:</label>
              <div class="control">
                  <input 
                      class="input" 
                      type="password" 
                      id="pin" 
                      name="pin" 
                      required
                  >
              </div>
          </div>

          <div class="field">
              <div class="control">
                  <button class="button is-primary" type="submit">
                      Iniciar Sesión
                  </button>
              </div>
          </div>
      </form>
  </div>
</div>

<style>
  .container {
      max-width: 400px;
      margin: 2rem auto;
      padding: 0 1rem;
  }

  .login-form {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .title {
      text-align: center;
      margin-bottom: 2rem;
  }

  .field {
      margin-bottom: 1rem;
  }
</style>