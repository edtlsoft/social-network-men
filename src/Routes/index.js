const express = require('express')

const router = express.Router()

const home = require('./../Controllers/home')

const image = require('../Controllers/image')

module.exports = app => {
    router.get('/', home.index)
    router.get('/images/:image_id', image.index)
    router.post('/images', image.create)
    router.post('/images/:image_id/like', image.like)
    router.post('/images/:image_id/comment', image.comment)
    router.delete('/images/:image_id', image.destroy)

    app.use(router)
}

