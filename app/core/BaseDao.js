const Service = require('egg').Service;
class Dao extends Service {
    async post(options) {
        try {
            let {
                data,
                url
            } = options;
            let result = await this.ctx.curl(`${this.config.serverAddress}${url}`, {
                beforeRequest: config => {
                    let param = {}
                    config.headers['ygw_header_param_web'] = JSON.stringify(param);
                },
                method: 'POST',
                contentType: 'json',
                data: data || {},
                dataType: 'json',
            });
            return result;
        } catch (error) {

        }

    }

    async get() {

    }
}

module.exports = Dao;