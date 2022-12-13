/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  import Vue from 'vue';
  const component: DefineComponent<{}, {}, any> | Vue;
  export default component;
}
  

// 开发时编辑器不会提示错误
declare module 'pentagon';



// declare module '@antd'
// declare module '@antd-style'

// 从taishi-web中直接复制过来的，按需取用
type Env = {
    /**
     * 是否是 production 模式
     */
    PRODUCTION: boolean;
    SERVER_ROOT: string;
    ASSET_ROOT: string;
    API_ROOT: string;
    DEFAULT_LANGUAGE: any;
    DEFAULT_THEME: any;
    SUPER_ADMIN_USERNAME: string;
    /**
     * 默认入口路由
     */
    DEFAULT_ROUTE_STATE: string;
    /* 
     * MODULES 参数用于指定加载哪些模块。
     * 该数组的元素为模块的 id，数组顺序决定了模块加载顺序，
     *   也就是决定了菜单项的顺序。
     * 如果为 null 代表按文件目录顺序加载所有模块。
     */
    MODULES: string[];
    [k: string]: unknown;
};

interface Window {
    __dynamic_base__: string;
    __AppENV: Env;
}

