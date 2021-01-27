<template>
  <div class="login-modal-container">
    <section @click="close" class="overlay"></section>
    <div class="panel">
      <div class="wrapper">
        <div class="white-board">
          <div class="p-2 border">
            <h1>
              <slot name="title"> </slot>
            </h1>
            <main>
              <slot name="body"></slot>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
import "../components/styles/loginModal.scss";
export default {
  setup(_, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>
