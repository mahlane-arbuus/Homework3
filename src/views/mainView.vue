<template>
  <Header></Header>
  <Posts></Posts>
  <button id="logout" v-on:click="Logout">Log Out</button>
  <button id="addpost" v-on:click="this.$router.push({name:'addPostView'})">Add post</button>
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
  /*
  resetLikes: function(){
    this.$store.dispatch("resetLikes")
  },*/
  Logout() {
    fetch("http://localhost:3000/auth/logout", {
      credentials: 'include', //  Don't forget to specify this if you need cookies
    })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          //console.log('jwt removed:' + auth.authenticated());
          //this.$router.push("/login");
          location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
  }
},
}
</script>

<style>
#logout {
  position: fixed;
  top: 70px;
  left: 10px;
  font-family: "Basier circle", -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: #243963;
  border: 0 groove #9FA6CD;
  border-radius: 1.5rem;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  padding: 0.7rem 2rem 1.5rem;
  transition: all .1s cubic-bezier(.4, 0, .2, 1);
  box-shadow: 0 1px 2px rgba(166, 175, 195, 0.25);
  user-select: none;
  margin: 10px;
}

#addpost {
  position: fixed;
  top: 140px;
  left: 10px;
  font-family: "Basier circle", -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: #243963;
  border: 0 groove #9FA6CD;
  border-radius: 1.5rem;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  padding: 0.7rem 2rem 1.5rem;
  transition: all .1s cubic-bezier(.4, 0, .2, 1);
  box-shadow: 0 1px 2px rgba(166, 175, 195, 0.25);
  user-select: none;
  margin: 10px;
}

#resetLikes:hover {
  background-color: #1e293b;
  color: #fff;
}
</style>
