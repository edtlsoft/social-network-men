module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    create: (req, res) => {
        res.send(`Create`)
    },
}