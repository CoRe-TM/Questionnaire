import App from './components/App.vue'
import './styles/styles.scss'
import Vue from 'vue'

global.showBack = dizmo.showBack.bind(dizmo)
global.showFront = dizmo.showFront.bind(dizmo)

function onDizmoReady () {
  global.vue = new Vue({
    el: '#front',
    render: h => h(App)
  })
}
document.addEventListener('dizmoready', onDizmoReady, { once: true })
