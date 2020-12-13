const path = require('path')

const fs = require('fs-extra')

const { randomNameImage } = require('../Helpers/lib')

module.exports = {
    index: (req, res) => {
        res.send(`Mostrando la imagen con id numero: ${req.params.image_id}`)
    },
    create: async (req, res) => {
        const nameImage = randomNameImage('imagen-post-')
        const ext = req.file.originalname.split('.').pop().toString().toLowerCase()
        const imageTempPath = req.file.path
        const targetPath = path.resolve(`src/Public/upload/${nameImage}.${ext}`)
        const validatedExtensions = ['png', 'jpg', 'jpeg']
        console.log(ext, nameImage, imageTempPath, targetPath)

        if( validatedExtensions.includes(ext) ) {
            await fs.rename(imageTempPath, targetPath)
        }

        res.send('funcionando...')
    },
    like: (req, res) => {
        res.send(`Like a la imagen con id numero: ${req.params.image_id}`)
    },
    comment: (req, res) => {
        res.send(`Comentario a la imagen con id numero: ${req.params.image_id}`)
    },
    destroy: (req, res) => {
        res.send(`Eliminando la imagen con id numero: ${req.params.image_id}`)
    },
}