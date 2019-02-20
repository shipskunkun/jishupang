# jishupang

Vue全家桶部分
https://jspang.com/archives/


主要包括这么几节内容：
技术胖的Vue-cli 视频教程  2017-04-10
技术胖的Vue-router视频教程  2017-04-13
技术胖的vuex视频教程  2017-05-03

vuex掌握哪些知识：
1，安装 npm n install vuex --save
2，定义 state 和 mutuation
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      matation: {
        add: function() {
        }
      }
    })

store.commit('add')

在页面引入的时候， import store from
$store.state.count
$store.commit('add')

3， 如何简化state的获取和修改、简化 $store.commit( )
{{ $store.state.count }}  =>  {{ count }}
使用computed 属性
mapState, 这是一个函数, 传入值后回有变化
最常用的，数组的方式


mutations 修改状态的时候，传递参数
mapMutations 难道methods 中不能写别的方法了吗

4，为什么要用getters 对state进行过滤
...mapState(['count'])
返回的到底是啥？



5，如何异步修改state
actions是异步的改变state状态
mutations是同步改变状态。


6， mutations 修改状态的时候，传递参数



Vue-router需要掌握的知识：
1，怎么展示链接，点击了怎么跳？
    占位
    <router-view></router-view>

   方式：编程式、导航式
   this.$router.push({path:   query})
   this.$router.push({name:   params})
    <router-link to=""></router-link>

   push 是 识别名字还是，什么？
   to 后面是# 后面的绝对地址，这点要记住
   {{ $route.params.id }}
   this.$router

2，路由，嵌套路由怎么定义
    就是路由表现为，  pageB/pageC
    内容表现为，     用来在同一页面进行内容区域的跳转
    在变量中 children: [{  path: 'pageC',  //注意这里是相对于父路由的路径
                          name: pageC
                          component: pageC
                      }]
3，监听路由变化
    页面进入前 beforeRouterEnter
    页面离开前 beforeRouterLeave
    全局监听 beforeEach

4，路由在导航栏中的展示
    有# 和没有的区别
    默认是hash
    mode
      hash
      history

5，路由中的参数怎么获取
    query、params
    $route.params.id
    $route.query.id




Vue-cli 怎么开始？
    npm install -global vue-cli // 全局安装脚手架, 已经安装后的不用再安装
    sudo vue init webpack test   // 使用Vue初始化一个webpack功能的项目
    cd test    //切换到项目目录下
    npm run dev  //启动项目
    ```


