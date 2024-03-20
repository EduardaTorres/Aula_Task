const {Router} = require('express')
const { list, create } = require('../controllers/taskController')
const taskRoute = Router()

taskRoute.get('/', list)
taskRoute.post('/', create)

module.exports = taskRoute;