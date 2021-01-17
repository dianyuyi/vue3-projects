<template>
  <div class="home-container">
    <h1>Projects-list</h1>
    <section class="project-section">
      <div class="link-box">
        <h2>Note List</h2>
        <p>A mini list with add and remove function.</p>
        <router-link to="/notelist">Link</router-link>
      </div>
      <div class="link-box">
        <h2>Calendar</h2>
        <p>Simple calendar to know nowaday and months.</p>
        <router-link to="/calendar">Link</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import "../components/styles/homeStyle.scss";
export default {};
</script>
