import { insertCustomers } from './endpoints/insertCustomer';
import { selectCustomer } from './endpoints/selectCustomer';
import { selectCustomers } from './endpoints/selectCustomers';
import { SelectMaterialsInventory } from './endpoints/selectMaterialsInventory';
import { selectMissingMaterialsAllOrders } from './endpoints/selectMissingMaterialsAllOrders';
import { selectOrders } from './endpoints/selectOrders';
import { selectPendingOrdersByWeek } from './endpoints/selectPendingOrdersByWeek';

var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();

app.use(insertCustomers);


app.use(SelectMaterialsInventory);
app.use(selectMissingMaterialsAllOrders);
app.use(selectCustomer);
app.use(selectCustomers);
app.use(selectPendingOrdersByWeek);
app.use(selectOrders);

app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});