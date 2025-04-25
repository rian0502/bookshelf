const Hapi = require('@hapi/hapi');
const router = require('./books/routes.js');


const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(router);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init().catch(err => {
    console.error(err);
    process.exit(1);
});