module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Pagina de inicio...')
    })
}