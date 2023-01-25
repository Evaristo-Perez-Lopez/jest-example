<template>
  <div>
    <button v-show="loggedIn">LogOut</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>
