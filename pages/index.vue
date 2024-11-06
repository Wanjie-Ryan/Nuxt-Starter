<template>
  <Alert />
  <h1>This is the Index Page</h1>
  <img src="@/assets/pic-1.png" alt="image" style="width:150px;" />
  <p>Counter: {{ counter }}</p>
  <button @click="this.counter++">+</button>
  <button @click="counter--">-</button>
</template>

<script>
import { useUtils } from "~/composables/useUtils";
export default {
  data(){
    return{
      counter: 0
    }
  },
  methods: {
    show() {
      console.log("Hry there");
    },
  },
  mounted() {
    console.log("nuxt", this.$nuxt);
    const { sayHello } = useUtils();
    const counter = useState('counter', ()=> Math.round(Math.random() * 100))
    this.show();
    sayHello();
  },
};
</script>
