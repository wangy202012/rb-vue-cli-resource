export const calcPublicPath = () => {
    // eslint-disable-next-line
    window.__dynamic_base__ = joinUrl(getEnv().ASSET_ROOT, '/app/pentagon-vite-next-workflow/')
}

export function joinUrl(...segs: string[]) {
    return segs.join('/').replace(/\/+/g, '/');
}


export const getEnv = () => {
    if (window.__AppENV === undefined) {
        // @ts-ignore
        window.__AppENV = {} // 避免本地调试报错
    }
    // taishi-web中直接复制过来
    const DEFAULT_THEME = window.__AppENV.DEFAULT_THEME as ('white' | 'black');

    const env: Env = Object.assign({
        PRODUCTION: false,
        SERVER_ROOT: '/',
        ASSET_ROOT: '/__public/',
        DEFAULT_LANGUAGE: 'zh_cn',
        DEFAULT_THEME: 'light',
        SUPER_ADMIN_USERNAME: 'admin'
    }, window.__AppENV, {
        DEFAULT_THEME: DEFAULT_THEME ? (DEFAULT_THEME === 'white' ? 'light' : 'dark') : 'light'
    });
    return env
}

export const loadCss = (url, id = Date.now() + '-' + Math.random()) => {
    return new Promise(function (resolve, reject) {
        // 避免重复加载
        if (document.getElementById(id)) {
            resolve('success: ' + url);
            return;
        }

        const script = document.createElement('link');


        script.onload = function () {
            resolve('success: ' + url);
        };


        script.onerror = function () {
            reject(Error(url + ' load error!'));
        };

        script.rel = 'stylesheet';
        script.id = id;
        script.href = `${url}?hash=${id}`;
        document.getElementsByTagName('head').item(0).appendChild(script);
    });
}