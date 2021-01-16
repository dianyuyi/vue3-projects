<template>
  <div
    class="w-full h-full p-6 max-w-sm mx-auto my-10 bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="w-full">
      <h1 class="text-center text-2xl font-medium text-black my-1">
        Note List : {{ notesCount }}
      </h1>
      <p
        class="text-sm text-gray-400 text-center pb-2"
        v-show="notesCount == 0"
      >
        There's no note. Add now?
      </p>
      <ul class="pt-3">
        <li
          v-for="(note, index) in noteList"
          :key="note.title"
          class="flex justify-between p-2"
        >
          <p class="text-gray-500">
            {{ note.title }}
          </p>
          <button @click="removeNote(index)">x</button>
        </li>
      </ul>
      <hr class="py-2" />
      <form @submit.prevent="addNote" class="my-2 flex justify-between">
        <input
          class="border rounded px-2 py-1 outline-none"
          placeholder="Type the note title"
          v-model="newNote"
          ref="newNoteRef"
        />
        <button
          class="rounded bg-gradient-to-r from-red-200 to-yellow-200 text-white ml-2 px-2 py-1 hover:shadow-md transition"
          type="submit"
        >
          Add new note
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  // data() {
  //   return {
  //     newNote: "",
  //     noteList: [
  //       { title: "Calligraphy" },
  //       { title: "Water Ink" },
  //       { title: "Coding" },
  //       { title: "Digital Art" },
  //       { title: "Graphic Design" },
  //     ],
  //   };
  // },
  // computed: {
  //   notesCount() {
  //     return this.noteList.length;
  //   },
  // },
  // methods: {
  //   addNote() {
  //     if (this.newNote !== "") {
  //       this.noteList.unshift({ title: this.newNote });
  //       this.newNote = "";
  //     }
  //   },
  //   removeNote(index) {
  //     this.noteList = this.noteList.filter((note, i) => i !== index);
  //   },
  // },
  setup() {
    const newNoteRef = ref("");
    const newNote = ref("");
    const noteList = ref([
      { title: "Calligraphy" },
      { title: "Water Ink" },
      { title: "Coding" },
      { title: "Digital Art" },
      { title: "Graphic Design" },
    ]);
    onMounted(() => {
      newNoteRef.value.focus();
    });
    const notesCount = computed({
      get: () => noteList.value.length,
    });
    function removeNote(index) {
      noteList.value = noteList.value.filter((note, i) => i != index);
    }
    function addNote() {
      if (newNote.value !== "") {
        noteList.value.unshift({ title: newNote.value });
        newNote.value = "";
      }
    }
    return { noteList, newNote, removeNote, addNote, newNoteRef, notesCount };
  },
};
</script>
