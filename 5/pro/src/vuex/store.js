import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count:0,
		name: 'zhangsan'
	},
	mutations: {
		add: function (state, num) {
			state.count += num;
			console.log('add');
		},
		reduce (state) {
			state.count--;
			console.log('reduce');
		}
	},
	getters: {
		count: function(state) {
			console.log('getters');
			return state.count += 100;
		}
	},
	actions: {
		addAction(context){
			context.commit('add', 10);
			setTimeout(()=>{context.commit('reduce')}, 2000);
			console.log('执行addActions');

		},
		reduceAction({commit}){
			commit('reduce')
		}
	}

})
