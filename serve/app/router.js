'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/api/location', controller.location.index);
    router.post('/api/pay', controller.pay.index);
    router.post('/api/ksPay', controller.ks.index);
};