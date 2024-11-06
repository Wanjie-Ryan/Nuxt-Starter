<template>
  <Alert />
  <h1>This is the Index Page</h1>
  <img src="@/assets/pic-1.png" alt="image" style="width: 150px" />
  <p>Counter: {{ counter }}</p>
  <button @click="incrementCounter">+</button>
  <button @click="decrementCounter">-</button>
</template>

<script>
import { useUtils } from "~/composables/useUtils";
import { useCounter } from "~/composables/useCounter";
export default {
  data() {
    return {
      counter: null,
      incrementCounter: null,
      decrementCounter: null,
    };
  },
  methods: {
    show() {
      console.log("Hry there");
    },
  },
  mounted() {
    console.log("nuxt", this.$nuxt);
    const { sayHello } = useUtils();
    // const counter = useState('counter', ()=> Math.round(Math.random() * 100))
    const { counter, increment, decrement } = useCounter();
    this.counter = counter;
    this.incrementCounter = increment;
    this.decrementCounter = decrement;
    this.show();
    sayHello();
  },
};
</script>
