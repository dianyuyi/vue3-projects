<template>
  <div class="mark-container">
    <h1>Markdown</h1>
    <section class="wrapper">
      <article class="left">
        <textarea :value="text" @input="updateText"></textarea>
      </article>
      <article class="right" v-html="markedText"></article>
    </section>
  </div>
  <BackHomeBtn />
</template>

<script>
import "../components/styles/markdownStyle.scss";
import BackHomeBtn from "../components/BackHomeBtn";
import marked from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
  mixins: [debounce],
  components: {
    BackHomeBtn,
  },
  data() {
    return {
      text: "**Get marked text.**",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    updateText(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
};
</script>

