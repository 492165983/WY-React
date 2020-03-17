// 路由配置

// 主页  按需加载   绝对路径
import Home from '$cont/home';
// 分类
import Category from '$cont/category';
// 值得买
import Topic from '$cont/topic';
// 购物车
import Shopping from '$cont/shopping';
// 个人
import Person from '$cont/person';

export default [
  {
    title: '首页',
    icon: 'icon iconfont iconshouye',
    path: '/home',
    component: Home,
    exact: true
  },
  {
    title: '分类',
    icon: 'icon iconfont iconfenlei',
    path : '/category',
    component: Category,
    exact: true
  },
  {
    title: '值得买',
    icon: 'icon iconfont iconzhidemai1',
    path : '/topic',
    component: Topic,
    exact: true
  },
  {
    title: '购物车',
    icon: 'icon iconfont icongouwuche',
    // path : '/myshopshoppong',
    path : '/shoppong',
    component:  Shopping,
    exact: true
  },
  {
    title: '个人',
    icon:'icon iconfont icongeren',
    path : '/person',
    component:  Person,
    exact: true
  }
];

