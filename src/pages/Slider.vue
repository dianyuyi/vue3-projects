<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slider-box" v-for="(slider, index) in sliders" :key="slider">
        <transition name="fade">
          <div
            v-if="currentSlide == index"
            :class="slider"
            class="slider-fade"
          ></div>
        </transition>
      </div>
    </div>

    <div class="slider-bullet">
      <div
        class="bullet-btn"
        v-for="(slider, index) in sliders"
        :key="slider"
        @click="selectActive"
        :class="currentSlide == index ? 'bg-gray-500' : 'bg-white'"
      ></div>
    </div>
    <h1>Slider Carousel</h1>
  </div>
  <BackHomeBtn />
</template>

<script>
import "../components/styles/sliderStyle.scss";
import BackHomeBtn from "../components/BackHomeBtn";

export default {
  components: {
    BackHomeBtn,
  },
  data() {
    return {
      currentSlide: 0,
      sliders: ["first", "second", "third"],
      interval: "",
    };
  },
  methods: {
    selectActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
