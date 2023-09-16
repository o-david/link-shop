<script setup lang="ts">
import Store from "./components/Store.vue";
import Footer from "./components/Footer.vue";
import { ig, coffee, git, linkedIn, folio, script } from "./assets/index";
let portfolio = {
  name: "Portfolio",
  disc: "Welcome to my creative universe! Explore my portfolio to witness the visual stories and projects that define my passion and dedication. Let's turn visions into realities. 🎨📂",
  link: "https://portfolio-david-alpha.vercel.app/",
  logo: folio,
};
let resume = {
  name: "Resume",
  disc: "Curious about my professional journey? Dive into my resume to explore my career milestones, skills, and experiences. Let's connect the dots and create something amazing together. 🚀🌟",
  link: "https://drive.google.com/file/d/1lVDyPOTXxwtghQj9qBmWjTp0RDVn5bEl/view?usp=sharing",
  logo: script,
};
let buyCoffee = {
  name: "Buy Me a Coffee",
  disc: "Enjoying my vibe? Feel free to buy me a coffee! Your support keeps the creativity flowing and the caffeine levels up. Thanks a latte! ☕️😊",
  link: "https://www.buymeacoffee.com/okekedavid",
  logo: coffee,
};
let github = {
  name: "GitHub",
  disc: "Crack open the code vault! My GitHub is a digital realm where my projects come to life. Dive into the lines of code that shape my tech world. Let's build the future, one commit at a time. 💻✨",
  link: "https://github.com/o-david",
  logo: git,
};
let instagram = {
  name: "Instagram",
  disc: "Hey there! Instagram is where I spill the beans on all things me. From ping-pong showdowns to life's ups and downs, it's all here. Let's connect and share some laughs, wins, and maybe even a few epic fails! 🏓📸 #LifeUnfiltered",
  link: "https://www.instagram.com/mrdavid_o/",
  logo: ig,
};
let linkedin = {
  name: "LinkedIn",
  disc: "Greetings! This is my LinkedIn lair—where professionalism meets playful pizzazz. 🎉 Let's link up and sprinkle some fun into the serious side of careers! 🚀🎈",
  link: "https://www.linkedin.com/in/obinna-okeke-0a7445173/",
  logo: linkedIn,
};
</script>

<template>
  <div class="bg-black text-white">
    <h1 class="py-6 text-2xl containr">My Links</h1>
    <hr />
    <div class="my-4 flex flex-col p-2 rounded-xl text-white gap-6">
      <Store
        :title="resume.name"
        :description="resume.disc"
        :url="resume.link"
        :logo="resume.logo"
      />
      <Store
        :title="portfolio.name"
        :description="portfolio.disc"
        :url="portfolio.link"
        :logo="portfolio.logo"
      />
      <Store
        :title="github.name"
        :description="github.disc"
        :url="github.link"
        :logo="github.logo"
      />
      <Store
        :title="linkedin.name"
        :description="linkedin.disc"
        :url="linkedin.link"
        :logo="linkedin.logo"
      />
      <Store
        :title="instagram.name"
        :description="instagram.disc"
        :url="instagram.link"
        :logo="instagram.logo"
      />
      <Store
        :title="buyCoffee.name"
        :description="buyCoffee.disc"
        :url="buyCoffee.link"
        :logo="buyCoffee.logo"
      />
    </div>
    <Footer title="Any questions or remarks?" />
  </div>
</template>
