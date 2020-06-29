// import msg from './msg/msg.vue'

// let plugin = {}

// plugin.install = function (Vue) {
//   Vue.prototype.$msg = '全局的属性'

//   // 全局自定义的方法
//   // 一般挂载到原型上的方法，一定要是有重要意义的，不然会污染原型
//   Vue.prototype.$myMethods = function () {
//     console.log('全局自定义的方法')
//   }

//   // 全局自定义指令(菜单权限)
//   Vue.directive('focus', {
//     bind: function () {},
//     // 当节点插入的时候
//     // 自动获取焦点
//     inserted: function (el) {
//       el.focus()
//     }
//   })

//   // 全局的混入
//   Vue.mixin({})

//   Vue.component(msg.name, msg)
// }

// export default plugin

// 同级，是否查找子集， 匹配
const requireComponent = require.context('./', true, /\.vue$/)

const install = (Vue) => {
  // 是否注册过
  if (install.installed) return
  install.installed
  Vue.prototype.$msg = '全局的属性'
  Vue.prototype.$myMethods = function () {
    console.log('全局自定义的方法')
  }
  // 拿到文件进行循环
  requireComponent.keys().forEach(fileName => {
    // 第i个
    const config = requireComponent(fileName)
    // 组件名
    const componentName = config.default.name

    Vue.component(componentName, config.default || config)
  })
}

// 判断是否在浏览器环境中
// 确保是正常环境
if (typeof Window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
