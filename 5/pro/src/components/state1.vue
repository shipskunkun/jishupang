<!--
  获取state djizhong 方式
  1， $store.state.count
  2， computed: {
        count() {
          return this.$store.state.count
        }
  }
  3， computed: mapState({
        count: state=> state.count
  })
  4,  computed: mapState(["count"])


-->

<template>
  <div>
        <p>我是测试 store.state 用的</p>
        <p>{{ $store.state.count }}</p>
        <p>{{ count }}</p>
        <p>{{ name }}</p>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  store,
  computed: mapState(['count', 'name']),
  methods: {
  }
}
</script>


