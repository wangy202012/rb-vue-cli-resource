const TestPage = () => import('../views/TestView.vue')
const MainPage = () => import('../views/MainView.vue')

const routes: any = [
  {
    path: '/main',
    name: 'main',
    component: MainPage,
    label: '首页'
  },


  {
    path: '/test',
    name: 'test',
    component: TestPage,
    label: '测试'
  },
  {
    path: '/',
    redirect: '/main'
  }
];
export default routes