import express from 'express';
import { uspSelectBalance } from '../controllers/selectBalanceController'; 

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectbalance', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try { // Los nombres de las variables de req.query['variable'],
          // se definen en el api.service.ts del front end
          // cuando se indican los parámetros en el string del URL
          uspSelectBalance(<string>(req.query['idOrden']))
        .then( response => {
            // console.log(response);
            res.status(200).send({
                balance: response // Este es el nombre con el cual se recibe la respuesta en el api.service.ts
            });
        });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as selectBalance }