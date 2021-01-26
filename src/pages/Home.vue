<template>
  <div class="home-container">
    <h1>Vue3 Projects</h1>
    <p class="intro">
      A practice from
      <a href="https://youtube.com/bitfumes">Youtube</a>
      .
    </p>
    <section class="project-section">
      <div class="link-box" v-for="item in projectsList" :key="item.link">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <router-link :to="item.link">Link</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import "../components/styles/homeStyle.scss";
export default {
  data() {
    return {
      projectsList: [
        {
          name: "Note List",
          description: "A mini list with add and remove function.",
          link: "/notelist",
        },
        {
          name: "Calendar",
          description: "Simple calendar to know nowaday and months.",
          link: "/calendar",
        },
        {
          name: "Markdown",
          description: "Practice to call mixins function.",
          link: "/markdown",
        },
        {
          name: "Slider carousel",
          description: "Use transition.",
          link: "/slider",
        },
        {
          name: "Calculator",
          description: "Simple calculator.",
          link: "/calculator",
        },
      ],
    };
  },
};
</script>
