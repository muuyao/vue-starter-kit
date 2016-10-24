<template lang="html">
  <div class="navigator">
    <router-link to="/" class="item" exact>Home</router-link>
    <router-link to="/about" class="item">About</router-link>
    <router-link to="/account" class="item">Account</router-link>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {}
  }
}
</script>

<style scoped>
.navigator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  background: #fff;
  border-top: 1px solid #999;
}

.item{
  line-height: 80px;
  color: #333;
}
</style>
