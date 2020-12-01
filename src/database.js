
const mongoose = require('mongoose')

const { database } = require('./keys')

mongoose.connect(database.URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(response => console.log('DB is connected'))
.catch(error => console.log('Error:', error))

