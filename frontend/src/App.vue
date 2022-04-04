
<template>
  <div id="app">
    <nav>
      <a href="/"><img src="./images/hwLogo.png" alt="logo" /></a>
      <div class="nav-icons">
        <router-link to="/"><i class="fa-solid fa-house-chimney"></i></router-link>
        <router-link to="/add"><i class="fa-solid fa-plus"></i></router-link>
        <router-link to="/work"><i class="fa-solid fa-briefcase"></i></router-link>
        <router-link to="/user"><i class="fa-solid fa-user"></i></router-link>
      </div>
    </nav>
    <router-view />
    <footer id="fixed" class="footer-styles">
      <a href="https://github.com/Mercer-Alex/heyWow" rel="noopener" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/mercer-alex/" rel="noopener" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="https://alexmercer.net/" rel="noopener" target="_blank"><i class="fa-solid fa-user-astronaut"></i></a>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style>
html {
  background: #121212;
}

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: rgb(255, 255, 255);
  background: #121212;
}

nav {
  background: #1c241d;
  display: grid;
  grid-template-columns: 11em 1fr; 
  padding: 10px;
}

.nav-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
}

nav a {
  font-weight: bold;
  color: white;
}
nav a.router-link-exact-active {
  color: #7f6085;
}
nav a:hover {
  color: #af8eb5;
}
nav img {
  width: 10em;
  margin-left: 5px;
}

footer {
  background-color: #1c241d;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding: 15px;
}
footer i {
  font-size: 25px;
}
footer i:hover {
  color: #af8eb5;
}
footer a {
  color: white;
}
#fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>
