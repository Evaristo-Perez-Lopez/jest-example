<template>
  <div class="home">
    <AppHeader />
    <AppCart />

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import AppCart from "@/components/AppCart.vue";
import AppHeader from "@/components/AppHeader.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    AppHeader,
    AppCart,
  },
};
</script>
