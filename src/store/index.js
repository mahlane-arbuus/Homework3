import { createStore } from 'vuex'
import posts from "@/components/Posts";

export default createStore({
  state: {
    postList: [
      {
        id: 1,
        img: "https://i.imgur.com/RV9X7qb.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero nulla, tempus eu tincidunt eget, rhoncus sit amet odio. In hac habitasse platea dictumst.",
        user: "Pablo",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 27, 2022 13:12",
        likes: 1
    },
    {
        id: 2,
        img: "https://i.imgur.com/VEXzqbv.png",
        text: "Ilmad lähiajal nii jahedaks läinud. Õudne! Ei jõua järgmist puhkereisi ära oodata! Jälgige kõik minu Istagrami, et minu tegemistega kursis olla. #hispaaniapäike",
        user: "Lucas",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 25, 2022 19:32",
        likes: 13
    },
    {
        id: 3,
        img: "https://i.imgur.com/a2rVy7x.jpg",
        text: "Equipment: TD04 turbo, Bosch 044 fuel pump, Tial wastegate, Innovate fuel map, 440cc injectors, 4bar MAP, oil temp gauge, custom manifold with 3 catch can, custom wire harness, Hondata S300 V3 on P28.",
        user: "Robert",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 19, 2022 09:12",
        likes: 2
    },
    {
        id: 4,
        img: "https://i.imgur.com/AuvGwE4.png",
        text: "Our fast food chain is hiring! We are looking for people with high stress tolerance and fast hands. If you think you can manage this, then please send your CV to my email adress mark@hmail.com",
        user: "Mark",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 13, 2022 03:12",
        likes: 155
    },
    {
        id: 5,
        img: "https://i.imgur.com/yFdPgDf.jpg",
        text: "Join my Discord channel",
        user: "Martin",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 11, 2022 16:12",
        likes: 633
    },
    {
        id: 6,
        img: "https://i.imgur.com/AELJ1tW.png",
        text: "How to cut a tree in Minecraft???.",
        user: "Steve",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 9, 2022 11:00",
        likes: 1313
    },
    {
        id: 7,
        img: "https://i.imgur.com/jmZ5c29.png",
        text: "The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.",
        user: "Gustavo",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 9, 2022 13:30",
        likes: 55
    },
    {
        id: 8,
        img: "https://i.imgur.com/SoTU9rS.jpg",
        text: "Happy Birthday, Mark!!!",
        user: "Eric",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 8, 2022 19:18",
        likes: 323
    },
    {
        id: 9,
        img: "https://i.imgur.com/PvSi7T9.png",
        text: "Nothing happened today.",
        user: "Sandra",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 7, 2022 06:46",
        likes: 655
    },
    {
        id: 10,
        img: "https://i.imgur.com/BK0peXZ.jpg",
        text: "Let's go viral",
        user: "Edgar",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        date_time: "Sep 1, 2022 00:00",
        likes: 2211
    }
    ]
  },
  getters: {
  },
  mutations: {
    resetLikes: state => {
      state.postList.forEach(post =>{
        post.likes = 0;
      })
    },
    increaseLikes(state, id) {
        const post = state.postList.find(i => i.id === id);
        post.likes++;
    }
  },
  actions: {
    resetLikes: act => {
      setTimeout(function(){
        act.commit("resetLikes")
      }, 1000)
    },
      increaseLikes: act => {
          setTimeout(function () {
              act.commit("increaseLikes")
          }, 100)
      }
  }
})
