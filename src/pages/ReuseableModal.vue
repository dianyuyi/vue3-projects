<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5 text-center">Re-useable Modal</h1>

      <Modal v-if="isRedModalOpen" @close="isRedModalOpen = false">
        <template #title>red</template>
        <template #body>
          <p class="text-red-400 text-center">red modal content.</p>
        </template>
      </Modal>
      <button
        @click="isRedModalOpen = true"
        class="rounded px-2 py-1 mx-4 bg-blue-300 text-white"
      >
        open red
      </button>

      <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen = false">
        <template #title>blue</template>
        <template #body>
          <p class="text-blue-400 text-center">blue modal content.</p>
        </template>
      </Modal>
      <button
        @click="isBlueModalOpen = true"
        class="rounded px-2 py-1 mx-4 bg-blue-300 text-white"
      >
        open blue
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);

    return { isRedModalOpen, isBlueModalOpen };
  },
};
</script>

