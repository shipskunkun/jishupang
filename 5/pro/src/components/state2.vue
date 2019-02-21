<!--
  mutation 如何传参？
  如何简化 mutation 不使用 commit
  getters
-->
<template>
  <div>
        <p>我是测试 store.state 用的</p>
        <p>{{ count }}</p>
        <button @click="$store.commit('add', 10)">+10</button>
        <button @click="$store.commit('reduce')">-1</button>
        <br>
        <button @click="add(10)">+10</button>
        <button @click="reduce()">-1</button>

        <br>
        <button @click="addAction(10)">异步+10</button>
        <button @click="reduceAction()">异步-1</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  store,
  computed: {
    ...mapState(['count'])
    // ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction']),
  }
}
</script>


