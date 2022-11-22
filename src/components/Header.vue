<template>
    <header class="header">
      <div class="home-add-div">
        <router-link to="/">Main</router-link>
        <router-link to="/signupView">SignUp</router-link>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  top: 0;
  margin: 0;
  height: 70px;
  width: 100%;
  background-color: #BEECFF;
  overflow: auto;
  justify-content: space-between;
  position: fixed;
}

header a {
  margin: 2% 4% 2% 4%;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  align-self: center;
}

header a:hover{
  color: #8360c3;
  background-color: #8fd5f8;
  border-radius: 10px;
}

header a:visited{
  text-decoration: none;
}

header a.router-link-exact-active {
  color: #42b983;
}
</style>