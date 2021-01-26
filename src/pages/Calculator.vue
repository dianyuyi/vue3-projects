<template>
  <section class="calculate-container">
    <h1>Calculator</h1>
    <div class="wrapper">
      <p class="result">
        {{ currentNum ? currentNum : defaultNum }}
      </p>
      <div class="h-8">
        <small class="" v-if="selectedOperation">
          {{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>
      <div class="flex flex-wrap">
        <div class="grid-table col-3">
          <button
            class="grid-btn"
            v-for="num in 9"
            :key="num"
            @click="pressed(num.toString())"
          >
            {{ num }}
          </button>
          <button class="grid-btn" @click="pressed('C')">C</button>
          <button class="grid-btn" @click="pressed('0')">0</button>
          <button class="grid-btn" @click="pressed('=')">=</button>
        </div>
        <div class="grid-table col-1">
          <button class="grid-btn" @click="pressed('+')">+</button>
          <button class="grid-btn" @click="pressed('-')">-</button>
          <button class="grid-btn" @click="pressed('*')">*</button
          ><button class="grid-btn" @click="pressed('/')">/</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../components/styles/calculateStyle.scss";
import { ref } from "vue";
export default {
  setup() {
    const defaultNum = ref("0");
    const operations = ["+", "-", "*", "/"];
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperation = ref("");

    const pressed = (value) => {
      if (value === "=" || value === "Enter") {
        calculateNum();
      } else if (operations.includes(value)) {
        applyOperation(value);
      } else if (value === "C") {
        clearNum();
      } else {
        apprendNumber(value);
      }
    };
    const calculateNum = () => {
      if (selectedOperation.value == "*") {
        multiply();
      }
      if (selectedOperation.value == "/") {
        divide();
      }
      if (selectedOperation.value == "+") {
        sum();
      }
      if (selectedOperation.value == "-") {
        subtract();
      }

      defaultNum.value = currentNum.value;

      prevNum.value = "";
      // currentNum.value = "";
      selectedOperation.value = "";
    };
    const multiply = () => {
      currentNum.value = prevNum.value * currentNum.value;
    };
    const divide = () => {
      currentNum.value = prevNum.value / currentNum.value;
    };
    const sum = () => {
      currentNum.value = Number(prevNum.value) + Number(currentNum.value);
      // another method:
      // +prevNum.value + +currentNum.value
    };
    const subtract = () => {
      currentNum.value = prevNum.value - currentNum.value;
    };

    const applyOperation = (value) => {
      calculateNum();

      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    };
    const clearNum = () => {
      currentNum.value = "";
      defaultNum.value = "0";
    };

    const apprendNumber = (value) => {
      if (
        currentNum.value == "" ||
        currentNum.value == "0" ||
        currentNum.value == defaultNum.value
      ) {
        if (!operations.includes(value)) {
          currentNum.value = value;
        }
      } else {
        currentNum.value = currentNum.value + value;
      }
    };

    return {
      defaultNum,
      currentNum,
      prevNum,
      selectedOperation,
      pressed,
      calculateNum,
      applyOperation,
      apprendNumber,
    };
  },
};
</script>

