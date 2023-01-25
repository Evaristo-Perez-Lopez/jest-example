<template>
  <p>
    Total: $ <span id="total"> {{ getTotal() }} </span>
  </p>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const items = computed(() => store.state.items);

function getTotal() {
  return items.value.reduce((total, item) => {
    return total + item.cost * item.quantity;
  }, 0);
}
</script>
