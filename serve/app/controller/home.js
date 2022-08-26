'use strict';

const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.response.type = 'html';
        ctx.body = fs.readFileSync(path.resolve(__dirname, '../public/index.html'));
    }
}

module.exports = HomeController;