import React from 'react';

function LoginView() {
  return (
    <div>
      <section class="page-section bg-white">
        <div class="login-container">
          <form action="/action_page.php">
            <h2 class="login-title">LOGIN</h2>
            <input class="input-text" id="fname" name="firstname" placeholder="Username"/>
            <input class="input-text" id="lname" name="lastname" placeholder="Password"/>
            <input class="btn-submit" value="Submit"/>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginView;
