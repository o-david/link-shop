<script setup lang="ts">
import Store from "./components/Store.vue";
import Footer from "./components/Footer.vue";
import { ig, coffee, git, linkedIn, folio, script } from "./assets/index";
let portfolio = {
  name: "Portfolio",
  disc: "Explore my portfolio website to discover a curated collection of my creative work, showcasing my skills in design, development, and more.",
  link: "https://kundankr.online/",
  logo: folio,
};
let resume = {
  name: "Resume",
  disc: "Join our web developer community server on Discord, where you can ask any questions related to web development and help others with their queries. Let's come together to share knowledge and support each other in our web development journey.",
  link: "https://discord.gg/KYfPpKbZmE",
  logo: script,
};
let buyCoffee = {
  name: "Buy Me a Coffee",
  disc: "If you appreciate my work, and you're feeling generous feel free to buy me a cup of coffee. Thank you!",
  link: "https://www.buymeacoffee.com/kundnkr",
  logo: coffee,
};
let github = {
  name: "GitHub",
  disc: "Don't feel like manually copying the code? Grab the code straight from GitHub.",
  link: "https://github.com/Kundnkr?tab=repositories",
  logo: git,
};
let instagram = {
  name: "Instagram",
  disc: "Stay in the loop with my life's adventures by connecting with me on Instagram.",
  link: "https://www.instagram.com/kundnkr/",
  logo: ig,
};
let linkedin = {
  name: "YouTube",
  disc: "Do you want longer & details step-by-step toturial? Subscribe to my Channel.",
  link: "https://youtube.com/@kundnkr",
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
