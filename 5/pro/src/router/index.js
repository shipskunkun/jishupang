import Vue from 'vue'
import Router from 'vue-router'
import pageA from '@/components/pageA'
import pageB from '@/components/pageB'
import pageC from '@/components/pageC'
import state1 from '@/components/state1'
import state2 from '@/components/state2'


Vue.use(Router)
// 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
// 所以在配子路径的时候，不需要在path 里面添加 /  ,当 /pageB/PageC 匹配成功，

export default  new Router({
  routes: [
    {
      path: '/',
      name: 'pageA',
      component: pageA
    },
    {
      path: '/pageB/:id',
      name: 'pageB',
      component: pageB,
      children: [{
      	path: 'pageC',
      	name: pageC,
      	component: pageC
      }]
    },
    {
      path: '/state1',
      name: 'state1',
      component: state1
    },
    {
      path: '/state2',
      name: 'state2',
      component: state2
    }
  ]
})

