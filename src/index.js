const Fastify = require('fastify')

const PORT = 3000

const app = Fastify({ logger: true })

//Routes
app.get('/', () => ({ message: 'SUCCESS' }))

async function start() {
    try {
        await app.listen({ port: 3000 })
        console.log(`Server started at port ${PORT}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

start()