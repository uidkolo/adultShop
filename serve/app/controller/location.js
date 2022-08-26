'use strict';

const Controller = require('egg').Controller;
const IP2Region = require('ip2region').default

class LocationController extends Controller {
    async index() {
        const { ctx } = this;
        const ip = ctx.request.ip
        const query = new IP2Region();
        const res = query.search(ip);
        ctx.body = {
            code: 200,
            data: {
                ...res,
                ip
            }
        }
    }
}

module.exports = LocationController;