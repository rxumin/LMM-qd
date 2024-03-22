import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // 访问根路径重定向到/home
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: () => import('../views/main/welcome.vue'),
  },{
  path: '/',
  component: () => import('../views/main.vue'),
  children: [

    {
      path: 'all',
      component: () => import('../views/main/all.vue'),
    },
    {
      path: 'syyz',
      component:() => import('../views/main/syyz/test.vue')
    },
    {
      path: 'base/',
      children: [
        {
          path: 'acc',
          component: () => import('../views/main/base/acc.vue'),
        },
        {
          path: 'blca',
          component: () => import('../views/main/base/blca.vue'),
        },
        {
          path: 'cesc',
          component: () => import('../views/main/base/cesc.vue'),
        },
        {
          path: 'chol',
          component: () => import('../views/main/base/chol.vue'),
        },
        {
          path: 'dlbc',
          component: () => import('../views/main/base/dlbc.vue'),
        },
        {
          path: 'hnsc',
          component: () => import('../views/main/base/hnsc.vue'),
        },
        {
          path: 'kich',
          component: () => import('../views/main/base/kich.vue'),
        },
        {
          path: 'kirc',
          component: () => import('../views/main/base/kirc.vue'),
        },
        {
          path: 'kirp',
          component: () => import('../views/main/base/kirp.vue'),
        },
        {
          path: 'laml',
          component: () => import('../views/main/base/laml.vue'),
        },
        {
          path: 'uvm',
          component: () => import('../views/main/base/uvm.vue'),
        },{
          path: 'skcm',
          component:() => import('../views/main/base/skcm.vue')
        },{
          path: 'brca',
          component:() => import('../views/main/base/brca.vue')
        },{
          path: 'coad',
          component:() => import('../views/main/base/coad.vue')
        },{
          path: 'esca',
          component:() => import('../views/main/base/esca.vue')
        },{
          path: 'gbm',
          component:() => import('../views/main/base/gbm.vue')
        },{
          path: 'lihc',
          component:() => import('../views/main/base/lihc.vue')
        },{
          path: 'luad',
          component:() => import('../views/main/base/luad.vue')
        },{
          path: 'lusc',
          component:() => import('../views/main/base/lusc.vue')
        },
        {
          path: 'meso',
          component:() => import('../views/main/base/meso.vue')
        },{
          path: 'ov',
          component:() => import('../views/main/base/ov.vue')
        },{
          path: 'paad',
          component:() => import('../views/main/base/paad.vue')
        },{
          path: 'prad',
          component:() => import('../views/main/base/prad.vue')
        },{
          path: 'read',
          component:() => import('../views/main/base/read.vue')
        },{
          path: 'stad',
          component:() => import('../views/main/base/stad.vue')
        }
      ]
    }
      ]
  }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
