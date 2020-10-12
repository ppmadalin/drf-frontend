<template>
  <div id="login" class="login">
    <div class="login__content">
      <form class="login__form">
        <div class="login__form-group">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div class="login__form-group">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>
<style scoped>
.login {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login__content {
  width: 380px;
  padding: 2rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}

.login__form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.login__form-group {
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
}
.login__form-group > label {
  margin-bottom: 1rem;
  font-size: 1.2em;
}

.login__form-group > input {
  font-size: 1.2em;
  border: 0.5px solid lightblue;
  border-radius: 5px;
  padding: 0.5rem;
}

input[type="submit"] {
  padding: 0.5rem;
  font-size: 1.2rem;
  margin: 0.75rem 0.75rem;
}
</style>
