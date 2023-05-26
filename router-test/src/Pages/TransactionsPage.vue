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
      transactions: [
        {
          id: 1,
          name: "Shopping 17/05",
          price: 200,
        },
        {
          id: 2,
          name: "House money",
          price: 800,
        },
        {
          id: 3,
          name: "For meal",
          price: 20,
        },
        {
          id: 4,
          name: "For work",
          price: 150,
        },
      ],
    };
  },
};
</script>
