import Vue from 'vue'
import App from './App'
import router from './router'


import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import HelloWorld from './components/HelloWorld'

Vue.component("Header", Header)
Vue.component("Footer", Footer)
Vue.component("HelloWorld", HelloWorld)
Vue.component("Button", Button)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  el: "#app",
  data: {
    btn: {
      width: "200px",
      height: "50px",
      fontSize: "19px",
      textAlign: "center",
      background: "tomato",
      color: "#ffffff",
      borderRadius: "5px",
      borderColor: "black"
    }
  }
});