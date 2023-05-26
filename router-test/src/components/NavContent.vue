<template>
  <nav class="nav">
    <router-link class="overview" :to="{ name: 'overview-route' }">
      Overview</router-link
    >
    <router-link class="transactions" :to="{ name: 'transactions-route' }">
      Transactions
    </router-link>
  </nav>
</template>

<style lang="css" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2rem;
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}
.overview {
  display: flex;
  flex-direction: row;
  width: 8rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
}

.overview:hover {
  cursor: pointer;
  background: #000;
  color: #fff;
}
.transactions {
  display: flex;
  flex-direction: row;
  width: 8rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
}
</style>
