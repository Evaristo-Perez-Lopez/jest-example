<template>
  <div>
    <button v-show="loggedIn">LogOut</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
