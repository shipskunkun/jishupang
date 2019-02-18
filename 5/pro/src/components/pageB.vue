<template>
  <div>
    <router-link to="/pageB/30/pageC">我是b页面，我要跳到C页面</router-link>
    {{ $route.params.id }}
    <router-view></router-view>

    <button @click="goback()">返回到之前页面</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      id: '20'
    }
  },
  methods: {
  	goback: function() {
  		window.history.go(-1);
  	}
  },
  beforeRouteEnter: function(to, from, next) {
  	console.log(to);
  	console.log(from);
  	next();
  },
  beforeRouteLeave: function(to, from, next) {
  	console.log(to);
  	console.log(from);
  	next();
  }
}
</script>

