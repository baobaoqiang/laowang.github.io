// 路由配置文件
// 路由组件在这里引入
import Vue from '../../pages/vue/index'
import ReactD from '../../pages/react/index'

const menuList = [
  {
    title: '框架',
    url: '',

    subMenu: [
      {
        title: 'Vue',
        url: '/vue',

      },
      {
        title: 'React',
        url: '/react',

      }
    ]
  },
  {
    title: 'Html',
    url: '',

    subMenu: []
  },
  {
    title: 'Css',
    url: '',
    subMenu: []
  },
  {
    title: 'JavaScript',
    url: '',
    subMenu: []
  }
];

const routeList = [
  {
    path: '/vue',
    component: Vue
  },
  {
    path: '/react',
    component: ReactD
  }
]

export default {menuList, routeList}