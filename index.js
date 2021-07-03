/** Declaraciones e instancias */
const express = require('express');
var cors = require('cors');
var router = express.Router();
const app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
/** FIN Declaraciones e instancias */

const port = process.env.PUERTO;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Routas Servicios  */
router.get('/', (req, res) => {
  res.send('Hello World!')
})
/** FIN Routas Servicios  */

/**Conexion DB Mongoose */
mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado a la DB")
});
/**Conexion DB Mongoose */


//Prefijo para diferenciar nuestro backend
app.use('/backend-doscampos', router)

app.listen(port, () => {
  console.log(`El servidor correo en el siguiente link http://localhost:${port}`)
})