import fastify from 'fastify';
import cors from '@fastify/cors';
import {routes} from './routes';

const app = fastify({logger: true});

const start = async () => {
    app.register(cors);
    app.register(routes);

    try {
       await app.listen({port: 8081});
    } catch (error) {
        process.exit(1);
    }
}

start();