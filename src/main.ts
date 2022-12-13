import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerApp } from 'pentagon'
import { registerPentagon } from 'rb-vue-plugins'


import App from './App.vue';
import router from './router';
import routes from './router/config'
import { calcPublicPath } from './utils'

import './assets/main.css';

import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';
import { MICRO_APP_LINKS } from './utils/const';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(registerPentagon, {
    routes, registerApp, plugins: [Antd], links: MICRO_APP_LINKS
})
app.mount('#app');

calcPublicPath()

