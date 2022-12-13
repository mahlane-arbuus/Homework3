<template>
  <Header></Header>
  <div class="signUpBody">
    <div class="box">
      <div class="logo">
        <h1>Welcome to PostIt!</h1>
      </div>
      <div class="inputs">
        <form @submit.prevent = "validateForm">
          <div class="login-div">
            <label for="login">Email</label><br>
            <input type="text" id="login" required v-model="login"><br>
          </div>
          <div class="password-div">
            <label for="password">Password</label><br />
            <input type="password" id="password" required v-model="password"><br/>
            <button class="button" id="forgotPassword">Forgot your password?</button>
          </div>
          <div v-if="validatePassword" class="error">{{validatePassword}}</div>
          <input type="submit" class="button" id="loginButton" value="Login" />
        </form>
          <label for="registerButton">Or make a new account:</label>
          <button v-on:click="this.$router.push({name:'signupView'})" class="button" id="registerButton">Sign Up</button>
      </div>
    </div>
  </div>

  <Footer></Footer>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "loginView",
  components: {
    Header,
    Footer
  },
  data: function(){
    return{
      login: '',
      password: '',
      validatePassword: ''
    }
  },

  methods: {
    validateForm(){
      let lower = /[a-z]/
      let upper = /[A-Z]/
      let digits = /[0-9]/
      let special = /_/
      if (this.password.length < 8 || this.password.length > 15){
        this.validatePassword = "password must be between 8-15 chars"
      }else if (!lower.test(this.password)){
        this.validatePassword = "password must contain Lowercase characters (a-z)"
      }else if(!upper.test(this.password)){
        this.validatePassword = "password must contain Uppercase characters (A-Z)"
      }else if(!digits.test(this.password)){
        this.validatePassword = "passwort must contain at least one digit (0-9)"
      }else if(!special.test(this.password)){
        this.validatePassword = "password must contain at least one undersoore (_)"
      }else if(!upper.test(this.password.charAt(0))){
        this.validatePassword = "password should start with an uppercase character"
      }else {
        this.validatePassword = "";
        let data = {
          email: this.login,
          password: this.password
        };
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
        })
            .then((response) => {
              response.json();
              if (response.status === 401) {
                throw new Error("No such user");
              }
            })
            .then((data) => {
              console.log(data);
              //this.$router.push("/");
              location.assign("/");
            })
            .catch((e) => {
              this.validatePassword = "No such account exists."
              console.log(e);
              console.log("error");
            });
      }
    }
  }

}
</script>

<style scoped>
form{
  margin: 20%;
  width: 60%;
}
.error{
  color: red;
  text-align: center;
}

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

@media screen and (max-width: 800px) {
  .box {width: 80%; height: 90%; margin: 25% auto 10% auto; padding: 25% 0 10% 0;}

}

@media screen and (min-width: 800px) {
  .box {width: 40%; height: 70%; margin: 10% auto 10% auto; padding: 10% 0 10% 0;}
}

.user img {
    height: 3rem;
    width: 3rem;
    border-radius: 45%;
    align-self: center;
}

.login-div {
    margin: 30px;
}

label {
    display: block;
}

input {
    width: 75%;
    height: 30px;
    text-align: center;
    border-radius: 0.25rem;
    border-color: #bdbdbd;
    outline: none;
    box-shadow: none;
    transition: 0.75s;
}

input:focus {
    background-color: #ebe8ff;
}

.password-div {
    margin: 30px;
}

.button {
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
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    margin: 10px;
}

.button:hover {
    background-color: #1e293b;
    color: #fff;
}

#forgotPassword {
    font-size: 10px;
    padding: 0.5rem 2rem 1rem;
}

.box {
  background-color: #F4F5FD;
  text-align: center;
  padding: 5%;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 20px;
}

.login-div {
  margin: 30px;
}

.logo {
  background-color: #243963;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  font-family: sans-serif;
  padding: 1rem;
  color: white;
}
</style>