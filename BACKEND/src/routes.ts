import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

export const routes = async (fastify:FastifyInstance, options: FastifyPluginOptions) => {
    fastify.get('/home', (request: FastifyRequest, reply: FastifyReply) => {
        return 'Rota acessada!';
    });
}