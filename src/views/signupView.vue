<template>
  <Header></Header>

  <form @submit.prevent = "validateForm">
      <div class="login-div">
        <label for="login">Email</label><br>
        <input type="text" id="login" required v-model="login"><br>
      </div>
      <div class="password-div">
        <label for="password">Password</label><br />
        <input type="password" id="password" required v-model="password"><br />
        <button class="button" id="forgotPassword">Forgot your password?</button>
      </div>
      <div v-if="validatePassword" class="error">{{validatePassword}}</div>
      <input type="submit" class="button" id="loginButton" value="Login" />
      <label for="registerButton">Or make a new account:</label>
      <input type="submit" class="button" id="registerButton" value="Register"/>
  </form>

  <Footer></Footer>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "signupView",
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
        this.validatePassword = "password must contain at least one _"
      }else if(!upper.test(this.password.charAt(0))){
        this.validatePassword = "password should start with an uppercase alphabet"
      }else{this.validatePassword = ""}

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

body {
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: "Basier circle", -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-image: var(--gradient);
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

@media screen and (max-width: 699px) {
    .box {width: 80%; height: 90%; margin: 25% auto 10% auto;}

}

@media screen and (min-width: 700px) {
    .box {width: 25%; height: 70%; margin: 10% auto 10% auto;}
}

.header {
    top: 0;
    margin: 0;
    height: 70px;
    width: 100%;
    background-color: #BEECFF;
    display: flex;
    overflow: auto;
    justify-content: space-between;
    position: fixed;
}

.home-add-div {
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
}

.home-add-div a {
    margin: 2% 4% 2% 4% ;
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    align-self: center;
}

.home-add-div a:hover{
    color: hotpink;
    background-color: #bdbdbd;
    text-decoration: underline;
}

.home-add-div a:visited{
    text-decoration: none;
}

.user {
    display: flex;
}

.user img {
    height: 3rem;
    width: 3rem;
    border-radius: 45%;
    align-self: center;
}

:root {
    --gradient: linear-gradient(90deg, #8360c3, #2ebf91);
}

.box {
    background-color: #F4F5FD;
    text-align: center;
    padding: 5%;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 20px;
}

.logo {
    background-color: #243963;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    font-family: sans-serif;
    padding: 1rem;
    color: white;
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

</style>