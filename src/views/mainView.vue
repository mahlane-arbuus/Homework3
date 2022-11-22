<template>
  <Header></Header>
  <Posts></Posts>
  <button v-on:click="resetLikes">Reset likes</button>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Posts from "@/components/Posts.vue";

export default {
  name: 'Main',
  components: {
    Footer,
    Header,
    Posts
},
methods: {
  resetLikes: function(){
    this.$store.dispatch("resetLikes")
  }
}

}
</script>
