<template>
  <Header></Header>
  <div class="main">
    <div class="contact_info">
      <h1>Team AP</h1>
      <h2>Team members: Mihhail Mihhailov, Sten Marcus Malva, Eduard Žurin</h2>
      <h2>E-mail: example@gmail.com</h2>
      <h2>Phone: +372 51323213</h2>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'contactView',
  components: {Footer, Header},
}
</script>

<style scoped>
.main{
  height: 600px;
  padding: 10%;
}
h3 {
  margin: 40px 0 0;
}
h2{
  margin: 40px;
}
a {
  color: #42b983;
}
</style>
