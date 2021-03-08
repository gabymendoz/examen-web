const dbConnection = require('./connection')
module.exports = app => {
    const connection = dbConnection

    app.post('/register', (req, res) => {
        
        const {
            Apellido,
            Nombre,
            Ncedula, 
            Dirección,
            Teléfono
        } = req.body
        
        connection.query('INSERT INTO usuario SET ?', {
            Apellido,
            Nombre,
            Ncedula, 
            Dirección,
            Teléfono
        }, (err, result) => {
            res.redirect('/login')
        })
    })
}