import VueRouter from 'vue-router'

import Entry from './nodes/Entry.vue'

import AssetDefined from './nodes/AssetDefined.vue'
import AssetMethodology from './nodes/AssetMethodology.vue'
import Background from './nodes/Background.vue'
import Configuration from './nodes/Configuration.vue'
import DiscoveryMethodology from './nodes/Discoverymethodology.vue'
import Example from './nodes/Example.vue'
import PreviousMethodology from './nodes/PreviousMethodology.vue'
import TechnicalDomain from'./nodes/TechnicalDomain.vue'


const routes = [
  { path: '/entry', component: Entry },
  { path: '/assetdefined', component: AssetDefined },
  { path: '/assetmethodology', component: AssetMethodology },
  { path: '/background', component: Background },
  { path: '/technicaldomain', component: TechnicalDomain },
  { path: '/discoverymethodology', component: DiscoveryMethodology },
  { path: '/previousmethodology', component: PreviousMethodology },
  { path: '/configuration', component: Configuration },
  {
    path: '*',
    redirect: 'entry'
  }

]

const router = new VueRouter({
  mode: 'history',
  routes 
})

export default router

