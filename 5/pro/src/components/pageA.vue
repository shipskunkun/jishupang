<template>
  <div>
    <router-link to="/pageB/30">我是A页面，我要跳到B页面</router-link>
    <br>
    <button @click="goto()">点击跳转到B页面</button>
    <br>
    <router-link to="/state1">我是A页面，我要跳到state1页面</router-link>
    <br>
    <router-link to="/state2">我是A页面，我要跳到state2页面</router-link>
    <br>
	<router-view></router-view>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  name: 'HelloWorld',
  data () {
    return {
    	num: 30,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  	goto: function() {

  		//name 的要加 params, path的 加query

  		this.$router.push({ path: '/pageB/30', query: {name: 'zkh'}});
  		// this.$router.push({ name: 'pageB' , params: {id: 30}});
  	}
  }
}
</script>

