module.exports = {
    index: (req, res) => {
        res.send(`Mostrando la imagen con id numero: ${req.params.image_id}`)
    },
    create: (req, res) => {
        res.send(`Mostrando la imagen con id numero: ${req.params.image_id}`)
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