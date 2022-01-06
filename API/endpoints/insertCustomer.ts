import express from 'express';
import { uspInsertCustomer } from '../controllers/insertCustomerController';

const router = express();

router.post('/api/insertcustomer', (req, res) => {

    try{
        uspInsertCustomer(<string>(req.query['cedula']), <string>(req.query['nombreCompleto']), <string>(req.query['email']),
                        <string>(req.query['direccion']), <string>(req.query['observaciones']), <string>(req.query['telefono1']),
                        <string>(req.query['notasTelefono1']), <string>(req.query['telefono2']), <string>(req.query['notasTelefono2']))
                        .then( response => {
                            res.sendStatus(200);
                        });
    }catch(err){
        res.sendStatus(500).send({
            error: err
        });
    }
});

export {router as insertCustomers}