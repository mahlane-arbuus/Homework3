<template>
    <header class="header">
      <div class="home-add-div">
        <router-link to="/mainView">Home</router-link>
        <router-link to="/contactView">Contacts</router-link>
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
  width: 100%;
  background-color: #BEECFF;
  padding: 1.2rem;
  display: flex;
  overflow: auto;
  justify-content: space-between;
  position: fixed;
}

header a {
  margin: 0 2% 0 2%;
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