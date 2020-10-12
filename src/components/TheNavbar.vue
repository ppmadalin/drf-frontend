<template>
  <div id="navbar" class="navbar">
    <nav class="navbar__content">
      <h1 class="navbar__logo"><a href="#">PopUp</a></h1>
      <ul class="navbar__menu">
        <li class="navbar__menu-item">
          <router-link :to="{ name: 'Home' }">Posts</router-link>
        </li>
        <li class="navbar__menu-item">
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
        <li class="navbar__menu-item">
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
#navbar {
  /* Colors */
  background-color: #f3f3f3;
  color: var(--dark-color);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}

.navbar__content {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
}

.navbar__logo {
  font-size: 2em;
}
.navbar__logo > a {
  text-decoration: none;
  color: var(--dark-color);
}
.navbar__menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
}

.navbar__menu-item {
  margin-left: 2rem;
}

.navbar__menu-item > a {
  color: var(--dark-color);
  text-decoration: none;
}

.navbar__menu-item > a:hover {
  color: lightblue;
}
</style>
