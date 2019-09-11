import Routerview from 'components/Routerview'

import Layout from 'views/layout/Layout'

export const routerConfig = [
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/index'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '',
    redirect: '/index',
    component: Layout,
    name: 'Layout',
    meta: {
      title: '首页',
      auth: ['indexview', 'campusInfo']
    },
    children: [
      {
        path: '/index',
        component: Routerview,
        meta: {
          title: '首页',
          index: true,
          icon: 'icon-shouyex',
          auth: ['indexview', 'campusInfo']
        },
        children: [
          {
            path: '',
            name: 'indexview',
            component: () => import('views/index/index'),
            meta: {
              title: '首页',
              index: true,
              auth: ['indexview']
            }
          },
          {
            path: 'edit',
            name: 'indexedit',
            component: () => import('views/index/edit'),
            meta: {
              title: '编辑',
              auth: ['campusInfo']
            }
          }
        ]
      },
      {
        path: '/notice',
        name: 'notice',
        redirect: '/notice/list',
        component: {
          render: h => (
            <keep-alive include="noticeTabIndex">
              <router-view />
            </keep-alive>
          )
        },
        meta: {
          title: '整校通知',
          icon: 'icon-xiaoyuantongzhix',
          auth: ['notice']
        },
        children: [
          {
            path: 'list',
            name: 'noticeList',
            component: () => import('views/notice/tabIndex'),
            meta: { title: '整校通知', index: true, auth: ['notice'] }
          }
        ]
      }
    ]
  }
]
