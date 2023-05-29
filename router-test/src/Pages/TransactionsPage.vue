<template>
  <div class="transactions">Transactions is here</div>
  <div class="items" v-for="transaction in transactions" :key="transaction.id">
    <router-link
      :to="{ name: 'transaction-detail-route', params: { id: transaction.id } }"
      >{{ transaction.name }}</router-link
    >
    <div class="price">Price: {{ transaction.price }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        this.transactions = data;
      });
  },
};
</script>
