const UserController = require('../controllers/UserController.js')

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function routes(fastify, options) {
    fastify.get('/', UserController.index)
    fastify.post('/', UserController.store)
    fastify.put('/', UserController.update)
    fastify.delete('/', UserController.destroy)
}

module.exports = routes