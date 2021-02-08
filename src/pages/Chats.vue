<template>
  <section class="chat-container">
    <div class="wrapper">
      <h1>Realtime Chats</h1>
      <div class="test-notice">
        <h2>Test by account:</h2>
        <small>user@test.com / user2@test.com</small>
      </div>
      <div class="chat-outerbox">
        <div class="chat-innerbox">
          <div
            class="w-full"
            :class="chat.userId == userId ? 'text-right' : ''"
            v-for="chat in state.chats"
            :key="chat.message"
          >
            <p class="chat-line">
              <span
                class="chat-msg"
                :class="chat.userId == userId ? 'right' : 'left'"
              >
                {{ chat.message }}
              </span>
            </p>
          </div>
        </div>
        <div class="chat-submitbox">
          <input
            v-model="state.message"
            placeholder="Start typing..."
            class=""
            @keydown.enter="addMessage"
          />
          <div class="chat-submit-btn">
            <button @click="addMessage">Send</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../components/styles/chatsStyle.scss";
import { chatsRef } from "../utilities/firebase";
import { onMounted, computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    // const state = ref({
    //   chats: {}
    // only render once
    // })
    const state = reactive({
      chats: [],
      message: "",
    });
    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);

    onMounted(() => {
      chatsRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    const addMessage = () => {
      if (state.message != "") {
        const newChat = chatsRef.push();

        newChat.set({ userId: userId.value, message: state.message });
        state.message = "";
      }
    };

    return { state, addMessage, userId };
  },
};
</script>
