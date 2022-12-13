<template>
  <Header></Header>
  <div class="signUpBody">
    <div class="box">
      <h1>Edit Post</h1>
      <input required id="body" v-model="post.body" type="text" />
      <button @click="updatePost" class="updatePost">Update Post</button>
      <button @click="deletePost" class="deletePost">Delete Post</button>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "APost",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
        urllink: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
      // using Fetch - put method - updates a specific post based on the passed id and the specified body
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            //this.$router.push("/apost/" + this.post.id);
            // We are using the router instance of this element to navigate to a different URL location
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            // We are using the router instance of this element to navigate to a different URL location
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
    // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their
    // position in the URL. The captured values are populated in the req.params object, with the name
    // of the route parameter specified in the path as their respective keys
    this.fetchAPost(this.$route.params.id);
  },
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