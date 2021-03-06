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
import { selectAllOrders } from './endpoints/selectAllOrders';
import { selectNextOrderId } from './endpoints/selectNextOrderId';
import { sendEmail } from './endpoints/sendEmail';
import { deleteCustomer } from './endpoints/deleteCustomer';
import { selectUnits } from './endpoints/selectUnits';
import { deleteMaterial } from './endpoints/deleteMaterial';
import { updateMaterialInventory } from './endpoints/updateMaterialInventory';
import { insertMaterialToInventory } from './endpoints/insertMaterialToInventory';
import { selectNextMaterialId } from './endpoints/selectNextMaterialId';
import { selectBalance } from './endpoints/selectBalance';
import { insertPayment } from './endpoints/insertPayment';
import { updatePayment } from './endpoints/updatePayment';
import { selectClothingsByOrder } from './endpoints/selectClothingsByOrder';
import { selectNextClothingNumber } from './endpoints/selectNextClothingNumber';
import { selectClothesTypes } from './endpoints/selectClothesTypes';
import { selectNextCustomerId } from './endpoints/selectNextCustomerId';
import { insertClothing } from './endpoints/insertClothing';
import { insertOrder } from './endpoints/insertOrder';

var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();

app.use(deleteCustomer);
app.use(deleteMaterial);
app.use(insertClothing);
app.use(insertCustomers);
app.use(insertMaterialToInventory);
app.use(insertOrder);
app.use(insertPayment);
app.use(selectAllCustomers);
app.use(selectAllOrders);
app.use(selectBalance);
app.use(selectClothesTypes);
app.use(selectClothingsByOrder);
app.use(selectCustomer);
app.use(selectMaterialsCategories);
app.use(selectMaterialsInventory);
app.use(selectMissingMaterialsAllOrders);
app.use(selectNextClothingNumber);
app.use(selectNextCustomerId);
app.use(selectNextMaterialId);
app.use(selectNextOrderId)
app.use(selectOrders);
app.use(selectOrdersDetailsForCalendar);
app.use(selectPendingOrdersByWeek);
app.use(selectPhonesTypes);
app.use(selectUnits);
app.use(sendEmail);
app.use(updateCustomer);
app.use(updateMaterialInventory);
app.use(updatePayment);


app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});