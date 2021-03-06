import express from 'express';
import { uspDeleteMaterial } from '../controllers/deleteMaterialController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.delete('/api/deletematerial', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');
    console.log("END: ", req.query['id']);
    try { // Los nombres de las variables de req.query['variable'],
          // se definen en el api.service.ts del front end
          // cuando se indican los parámetros en el string del URL
        uspDeleteMaterial(parseInt(<string>(req.query['id'])))
        .then( response => {
            // console.log(response);
            res.sendStatus(200)
        });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as deleteMaterial }
