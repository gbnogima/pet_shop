import React from 'react';

function LoginView() {
  return (
    <div>
      <section class="page-section bg-white">
        <div class="login-container">
          <form>
            <h2 class="login-title">LOGIN</h2>
            <input class="input-text" id="email" name="email" placeholder="E-mail"/>
            <input class="input-text" id="password" type="password" name="password" placeholder="Senha"/>
            <input class="btn-submit" value="Entrar"/>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginView;
