export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp)
  return {
    provide: {
      sayHello: (msg: string) => console.log(`jui, ${msg}`),
    },
  };
});

// plugins initialize 3rd party libraries while composables are reusable logic for composition API
// plugins are global, composables are component level specific
// plugins are accessed via $ injection while composables can be called directly in components
// plugins atre loaded once the app starts while composables are called each time a component uses it.
