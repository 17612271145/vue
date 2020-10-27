// src/core/index.js
Vue.prototype.$isServer
Vue.prototype.$ssrContext
Vue.FunctionalRenderContext
Vue.version
// src/core/global-api/index.js 
Vue.config = {
  optionMergeStrategies: Object.create(null),
  silent: false,
  productionTip: process.env.NODE_ENV !== 'production',
  devtools: process.env.NODE_ENV !== 'production',
  performance: false,
  errorHandler: null,
  warnHandler: null,
  ignoredElements: [],
  keyCodes: Object.create(null),
  isReservedTag: no,
  isReservedAttr: no,
  isUnknownElement: no,
  getTagNamespace: noop,
  parsePlatformTagName: identity,
  mustUseProp: no,
  async: true,
  _lifecycleHooks: LIFECYCLE_HOOKS
}
Vue.util = {
  warn,
  extend,
  mergeOptions,
  defineReactive
}
Vue.set = set
Vue.delete = del
Vue.nextTick = nextTick
Vue.observable = obj => {
  observe(obj)
  return obj
}
Vue.options = {
  components:Object.create(null),
  directives:Object.create(null),
  filters:Object.create(null),
  _base:Vue
}

// src/core/instance/init.js
Vue.prototype._init

// src/core/instance/state.js
Vue.prototype.$data
Vue.prototype.$props
Vue.prototype.$set
Vue.prototype.$delete
Vue.prototype.$watch

// src/core/instance/events.js
Vue.prototype.$on
Vue.prototype.$once
Vue.prototype.$off
Vue.prototype.$emit

// src/core/instance/lifecycle.js
Vue.prototype._update
Vue.prototype.$forceUpdate 
Vue.prototype.$destroy

// src/core/instance/render.js
Vue.prototype.$nextTick
Vue.prototype._render
Vue.prototype._o
Vue.prototype._n
Vue.prototype._s
Vue.prototype._l
Vue.prototype._t
Vue.prototype._q
Vue.prototype._i
Vue.prototype._m
Vue.prototype._f
Vue.prototype._k
Vue.prototype._b
Vue.prototype._v
Vue.prototype._e
Vue.prototype._u
Vue.prototype._g
Vue.prototype._d
Vue.prototype._p


// init   vm = new Vue()
vm._uid = 1
vm._isVue = true
vm._renderProxy = vm
vm._self = vm

// src/core/util/options.js
// 合并策略
Vue.config.optionMergeStrategies =  {
  el,propsData:(parent, child, vm, key),
  data:(parentVal,childVal,vm),
  beforeCreate,created,beforeMount,mounted,beforeUpdate,updated,beforeDestroy,
  destroyed,activated,deactivated,errorCaptured,serverPrefetch:(parentVal,childVal),
  component,directive,filter:(parentVal,childVal,vm,key),
  watch:(parentVal,childVal,vm?,key),
  props,methods,inject,computed:(parentVal,childVal,vm,key),
  provide:(parentVal, childVal, vm),
}

// src/core/instance/lifecycle.js
vm.$parent
vm.$root
vm.$children
vm.$refs
vm._watcher
vm._inactive 
vm._directInactive
vm._isMounted
vm._isDestroyed
vm._isBeingDestroyed

// src/core/instance/render.js
vm._vnode
vm._staticTrees
vm.$vnode
vm.$slots
vm.$scopedSlots
vm._c
vm.$createElement = (a, b, c, d)
vm.$attrs 
vm.$listeners

// src/core/instance/state.js
vm._watchers
vm.$options._propKey



