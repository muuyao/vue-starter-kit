<template>
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Hello, Vue, refresh2'
    }
  },

  computed: mapState({
    count: state => state.count
  }),

  methods: {
    increment() {
      this.$store.state.count ++;
    },

    decrement() {
      this.$store.state.count --;
    }
  }
}
</script>

<style>

</style>
