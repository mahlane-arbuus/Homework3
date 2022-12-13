<template>
  <Header></Header>
  <div class="signUpBody">
    <div class="box">
      <h1>Add Post</h1>
      <form @submit.prevent = "AddPost">
        <input id="body" v-model="body" type="text" />
        <input type="submit" class="button" id="submitPost" value="Add Post" />
      </form>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "addPostView",
  components: {
    Header,
    Footer
  },
  data: function(){
    return{
      title: '',
      body: '',
      urllink: ''
    }
  },
  methods: {
    AddPost() {
      console.log(this.body)
      let data = {
        title: String(new Date().toISOString().slice(0, 10)),
        body: this.body,
        urllink: String(new Date().toISOString()),
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => {
            console.log(response.data);
            // redirect to /allposts view
            //this.$router.push("/");
            location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    }
  }
}
</script>

<style scoped>
.signUpBody {
  margin: 0;
  padding: 5% 0 5% 0;
  background-color: white;
  font-family: "Basier circle", -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-image: linear-gradient(90deg, #8360c3, #2ebf91);
  background-size: 400%;
  animation: anim 10s infinite alternate;
}

@keyframes anim {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

.box {
  background-color: #F4F5FD;
  text-align: center;
  padding: 5%;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 20px;
}

@media screen and (max-width: 800px) {
  .box {width: 80%; height: 90%; margin: 25% auto 10% auto; padding: 25% 0 10% 0;}

}

@media screen and (min-width: 800px) {
  .box {width: 40%; height: 70%; margin: 10% auto 10% auto; padding: 10% 0 10% 0;}
}
</style>