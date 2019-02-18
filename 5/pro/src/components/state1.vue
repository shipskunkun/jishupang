<template>
  <div>
        <p>我是测试 store.state 用的</p>
        <p>{{ $store.state.count }}</p>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  name: 'HelloWorld',
  data () {
  },
  store,
  methods: {
  }
}
</script>


