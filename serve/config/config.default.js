/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['*']
    }
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    }

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1661430115730_9509';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    // 将public下的静态资源重定向到根目录下
    config.static = {
        prefix: '/',
    };

    config.proxy = true;

    return {
        ...config,
        ...userConfig,
    };
};