<template>
  <div class="notelist-container">
    <div class="wrapper">
      <h1>Note List : {{ notesCount }}</h1>
      <p v-show="notesCount == 0">There's no note. Add now?</p>
      <ul>
        <li v-for="(note, index) in noteList" :key="note.title">
          <p>
            {{ note.title }}
          </p>
          <button @click="removeNote(index)">x</button>
        </li>
      </ul>
      <hr />
      <form @submit.prevent="addNote">
        <input
          placeholder="Type the note title"
          v-model="newNote"
          ref="newNoteRef"
        />
        <button type="submit">Add new note</button>
      </form>
    </div>
  </div>
  <BackHomeBtn />
</template>

<script>
import "../components/styles/noteListStyle.scss";
import BackHomeBtn from "../components/BackHomeBtn";
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
  components: {
    BackHomeBtn,
  },
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
