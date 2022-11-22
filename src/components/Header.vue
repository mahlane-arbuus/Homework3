<template>
  <div>
    <router-link to="/">Main</router-link>
    <router-link to="/signupView">SignUp</router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
div {
  top: 0;
  margin: 0;
  height: 70px;
  width: 100%;
  background-color: #BEECFF;
  overflow: auto;
  justify-content: space-between;
  position: fixed;
}

div a {
  margin: 2% 4% 2% 4%;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  align-self: center;
}

div a:hover{
  color: #8360c3;
  background-color: #8fd5f8;
  border-radius: 10px;
}

div a:visited{
  text-decoration: none;
}

div a.router-link-exact-active {
  color: #42b983;
}
</style>