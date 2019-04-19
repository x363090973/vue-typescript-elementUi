import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'
import {Routes} from './routers'

const HelloWorld: AsyncComponent = (): any => import('@/components/HelloWorld.vue')

Vue.use(Router)

const routes: RouteConfig[] =  [
  //功能页面
  {
    path: Routes.home,
    name: Routes.home,
    component: HelloWorld,
    children:[
      { path: '/pages/scanner/workPage',
        name:'workPage',
        component: HelloWorld
       },

       { 
        
        path: '/pages/scanner/uploadProgress',
        name:'uploadProgress',
        component: HelloWorld

        
        
       },
       { path: '/pages/scanner/historyPage',
        name:'historyPage',
        component: HelloWorld

       },
    ]
  },
  {
    path: '*',
    redirect: Routes.home
  }

]




const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
