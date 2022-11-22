<template>
    <div class="content">
        <div class="posts" v-for="post in postList" :key="post.id">
            <article class="post">
                <div class="post-header">
                    <div class="name-avatar-div">
                        <img :src=post.avatar alt="user-image" class="avatar">
                        <p>{{post.user}}</p>
                    </div>
                    <p>{{post.date_time}}</p>
                </div>
                <div class="post-lower">
                    <img :src=post.img alt="post" class="post">
                    <p>{{post.text}}</p>
                    <div class="like-div">
                        <button class="like" type="button">Like!</button>
                        <p>{{post.likes}}</p>
                    </div>
                </div>
            </article>
        </div>

    </div>
</template>

<script>
export default {
    name: "Posts",
    data: function(){
        return{}
    },
    computed:{
        postList(){
            return this.$store.state.postList
        }
    }
}
</script>

<style scoped>
.postText {
    display: flex;
}

.postFile {
    display: flex;
}

.button{
    background-color: #243963;
    border: 0 groove #9FA6CD;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0 1px 2px rgba(166, 175, 195, 0.25);
    margin: 0.75rem 1rem 1.5rem;
}

.button:hover {
    background-color: #1e293b;
}

label + .button {
    background-color: #47179a;
}

label + .button:hover {
    background-color: #200549;
}

#fileSelect {
    margin: 2rem 1rem 2rem;
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
    color: #8360c3;
    background-color: #8fd5f8;
    text-decoration: underline;
    border-radius: 10px;
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

.content {
    background-color: rgba(255, 220, 195, 0.44);
    margin: 15%;
    width: 75%;

}

.posts > .post {
    display: block;
    width: 95%;
    margin-left: 2%;
    margin-bottom: 10%;
    background-color: white;
    border: 2px solid gray;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.post-header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.post-header p {
    margin: 0;
    color: gray;
}

.post-lower img {
    width: 100%
}

.name-avatar-div {
    display: flex;
}

.avatar {
    height: 3rem;
    width: 3rem;
    border-radius: 45%;
}

.user-name {
    margin: 13px;
    color: black;
}

.like {
    background-color: #243963;
    border: 0 groove #9FA6CD;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    padding: 1.1rem;
    transition: all .1s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0 1px 2px rgba(166, 175, 195, 0.25);
    margin: 10px;
}

.like:hover {
    background-color: #1e293b;
    color: #fff;
}

.post-lower {
    text-align: justify;
    margin: 10px;
}

.like-div {
    display: flex;
    gap: 10px;
}

textarea {
    display: block;
    resize: none;
}

header ~ footer {
    border-radius: 2rem 2rem 0 0;
    padding-left: 2%;
    padding-right: 2%;
    background-color: #F4F5FD;
    display: flex;
    justify-content: space-between;
}


</style>

