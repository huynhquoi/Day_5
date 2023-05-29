<template>
  <div class="transactions-details" v-if="transaction">
    Transaction Details of id: {{ $route.params.id }} is here.... Name:
    {{ transaction.name }} Price: {{ transaction.price }}
  </div>
  <div v-else>Loading Transaction</div>
</template>
<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
};
</script>
