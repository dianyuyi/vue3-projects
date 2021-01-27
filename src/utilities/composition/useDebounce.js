import { ref } from "vue";

export default function useDebounce() {
  const timeout = ref("");
  const debounce = (func, wait) => {
    clearTimeout(timeout.value);
    timeout.value = setTimeout(func, wait);
  };

  return debounce;
}
