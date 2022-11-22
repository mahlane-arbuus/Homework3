<template>
  <Header></Header>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Main',
  components: {
    Footer,
    Header,
  }
}
</script>
