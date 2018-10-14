import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue();

// import event bus named server bus

new Vue({
  el: '#app',
  render: h => h(App)
})
