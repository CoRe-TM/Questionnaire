import App from './components/App.vue'
import './styles/styles.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routes'

global.showBack = dizmo.showBack.bind(dizmo)
global.showFront = dizmo.showFront.bind(dizmo)

function onDizmoReady () {
  Vue.use(VueRouter)
  global.vue = new Vue({
    el: '#front',
    render: h => h(App),
    router: router
  })
}
document.addEventListener('dizmoready', onDizmoReady, { once: true })
