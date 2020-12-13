module.exports = {
    randomNameImage: (name='') => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
        name = name.substring(0, 100)

        for (let i = 0; i < 10; i++) {
            name += alphabet.charAt(Math.floor((Math.random() * alphabet.length)))
        }

        return name
    }
}