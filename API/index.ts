import { selectMissingMaterialsAllOrders } from './endpoints/selectMissingMaterialsAllOrders';
import { selectOrdersDetailsForCalendar } from './endpoints/selectOrdersDetailsForCalendar';
import { selectPendingOrdersByWeek } from './endpoints/selectPendingOrdersByWeek';
import { selectMaterialsCategories } from './endpoints/selectMaterialsCategories';
import { selectMaterialsInventory } from './endpoints/selectMaterialsInventory';
import { selectAllCustomers } from './endpoints/selectAllCustomers';
import { insertCustomers } from './endpoints/insertCustomer';
import { selectCustomer } from './endpoints/selectCustomer';
import { selectOrders } from './endpoints/selectOrders';
import { updateCustomer } from './endpoints/updateCustomer';
import { selectPhonesTypes } from './endpoints/selectPhonesTypes';


var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();

app.use(insertCustomers);

app.use(selectMissingMaterialsAllOrders);
app.use(selectOrdersDetailsForCalendar)
app.use(selectMaterialsInventory);
app.use(selectMaterialsCategories);
app.use(selectPendingOrdersByWeek);
app.use(selectAllCustomers);
app.use(selectCustomer);
app.use(updateCustomer);
app.use(selectOrders);
app.use(selectPhonesTypes);

app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});