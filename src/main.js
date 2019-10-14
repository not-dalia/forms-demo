import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const eventHub = new Vue() 

Vue.mixin({
  data: function () {
    return {
        eventHub: eventHub
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
