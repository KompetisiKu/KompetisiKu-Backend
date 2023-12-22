const Hapi = require('@hapi/hapi')

const init = () => {
    const server = Hapi.server({
        port: 9000,
        routes :{
            cors: {
                origin: ['*']
            }
        }
    })
    server.route(
        {
            method: 'GET',
            path: '/',
            handler: () => {
                return `Hello`
            }
        }
    )
    server.start()
    console.log('server berjalan')
}

init()
