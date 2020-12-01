
const express = require('express')

const config = require('./Server/config')

// Connection to database
require('./database')

// Starting the server
const app = config(express())

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})

