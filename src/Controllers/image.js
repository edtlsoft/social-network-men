const path = require('path')

const fs = require('fs-extra')

const { Image } = require('../Models')

const { randomNameImage } = require('../Helpers/lib')

module.exports = {
    index: (req, res) => {
        res.send(`Mostrando la imagen con id numero: ${req.params.image_id}`)
    },
    create: (req, res) => {
        const saveImage = async () => {
            const nameImage = randomNameImage('imagen-post-')
            const images = await Image.find({filename: nameImage})

            if( images.length ) {
                saveImage()
            }

            const ext = req.file.originalname.split('.').pop().toString().toLowerCase()
            const imageTempPath = req.file.path
            const targetPath = path.resolve(`src/Public/upload/${nameImage}.${ext}`)
            const validatedExtensions = ['png', 'jpg', 'jpeg']

            if( validatedExtensions.includes(ext) ) {
                await fs.rename(imageTempPath, targetPath)
                const image = new Image({
                    title: req.params.title,
                    description: req.params.description,
                    filename: `${nameImage}.${ext}`
                })
                const imageSave = await image.save()
                // req.redirect('/images/')
                res.send('Working...')
            }
            else {
                await fs.unlink(imageTempPath)
                res.status(500).json({error: 'The extension of the file is not supported'})
            }
        }

        saveImage()
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