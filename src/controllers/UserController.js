
const users = []
let id = 0

function index(req, res) {
    return users
}

function store({ body }, res) {
    const user = {
        id: ++id,
        name: body.name,
        email: body.email
    }

    users.push(user)
    
    return user
}

function update({ body, params }, res) {
    const index = users.findIndex(u => u.id == params.id)

    if (index === -1) {
        return res.code(404).send({ response: 'ERROR' })
    }

    const user = {
        ...users[index],
        name: body.name,
        email: body.email
    }

    users[index] = user

    return user
}

function destroy({ params }, res) {
    const index = users.findIndex(u => u.id == params.id)

    if (index === -1) {
        return res.code(404).send({ response: 'ERROR' })
    }

    users.splice(index, 1)

    return { response: 'SUCCESS' }
}

module.exports = {
    index,
    store,
    update,
    destroy
}