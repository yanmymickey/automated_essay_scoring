// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

// const RouteView = {
//   name: 'RouteView',
//   render: h => h('router-view')
// }

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard/workplace',
        name: 'Workplace',
        // redirect: '/dashboard/workplace',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: '词句积累', icon: bxAnaalyse, permission: ['dashboard'] }
      },
      // write
      {
        path: '/write',
        name: 'write',
        // redirect: '/form/base-form',
        // component: RouteView,
        component: () => import('@/views/write/upload'),
        meta: { title: '作文评分', icon: 'form', permission: ['form'] }
      },
      // dictionary
      {
        path: '/dictionary',
        name: 'fdictionary',
        // redirect: '/form/base-form',
        // component: RouteView,
        component: () => import('@/views/dictionary'),
        meta: { title: '词典大全', icon: 'read', permission: ['form'] }
      },
      // skill
      {
        path: '/skill',
        name: 'list',
        // component: RouteView,
        component: () => import('@/views/skill'),
        // redirect: '/list/table-list',
        meta: { title: '写作技巧', icon: 'rise', permission: ['table'] }
        // children: [
        //   {
        //     path: '/list/table-list/:pageNo([1-9]\\d*)?',
        //     name: 'TableListWrapper',
        //     hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        //     component: () => import('@/views/list/TableList'),
        //     meta: { title: 'menu.list.table-list', keepAlive: true, permission: ['table'] }
        //   },
        //       {
        //         path: '/list/search/application',
        //         name: 'SearchApplications',
        //         component: () => import('../views/list/search/Applications'),
        //         meta: { title: 'menu.list.search-list.applications', permission: ['table'] }
        //       }
        //     ]
        //   }
        // ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
