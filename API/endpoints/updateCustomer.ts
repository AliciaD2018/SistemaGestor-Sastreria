import express from 'express';
import { uspUpdateCustomer } from '../controllers/updateCustomerController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.put('/api/updatecustomer', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    try { // Los nombres de las variables de req.query['variable'],
          // se definen en el api.service.ts del front end
          // cuando se indican los parámetros en el string del URL
        uspUpdateCustomer(<string>(req.query['id']), <string>(req.query['nombreCompleto']),
            <string>(req.query['email']), <string>(req.query['direccion']), <string>(req.query['observaciones']),
            <string>(req.query['telefono1']), <string>(req.query['tipoTelefono1']), <string>(req.query['notasTelefono1']),
            <string>(req.query['telefono2']), <string>(req.query['tipoTelefono2']), <string>(req.query['notasTelefono2']))
            .then(response => {
                // console.log(response);
                res.sendStatus(200)
            });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as updateCustomer }