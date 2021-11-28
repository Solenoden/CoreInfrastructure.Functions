const axios = require('axios')
const { FunctionsConfig } = require('../config/functions.config')

async function KeepAlive(context, req) {
    context.log('Function: KeepAlive started')

    const appsToKeepAlive = FunctionsConfig.appsToKeepAlive ? JSON.parse(FunctionsConfig.appsToKeepAlive) : []
    if (appsToKeepAlive.length > 0) {
        appsToKeepAlive.forEach(app => {
            context.log(`Function: KeepAlive pinged ${app}`)
            axios.get(app + '/keepAlive')
        })
    }

    context.log(`Function: KeepAlive completed pinging ${appsToKeepAlive.length} apps`)
    context.done()
}
module.exports.KeepAlive = KeepAlive
