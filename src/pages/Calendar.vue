<template>
  <div class="calendar-container">
    <h1 class="">Vue3 calendar</h1>
    {{ daysInMonth() }} {{ currentMonth }}
    <section class="calendar-box date-block">
      <h2 class="">{{ currentMonthName }}</h2>
      <h2 class="">{{ currentYear }}</h2>
    </section>
    <section class="calendar-box day-block">
      <p class="days-en" v-for="day in days" :key="day">
        {{ day }}
      </p>
    </section>
    <section class="calendar-box day-block paper-days">
      <div class="days" v-for="num in startDay()" :key="num"></div>
      <div
        class="days"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        <p>
          {{ num }}
        </p>
      </div>
    </section>
    <section class="calendar-box btn-block">
      <button @click="prev">Prev</button>
      <button @click="next">Next</button>
    </section>
  </div>
  <BackHomeBtn />
</template>

<script>
import "../components/styles/calendarStyle.scss";
import BackHomeBtn from "../components/BackHomeBtn";
export default {
  components: {
    BackHomeBtn,
  },
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      // if month==1 will return 0
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth == 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth == 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate == currentFullDate ? "nowaday" : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

