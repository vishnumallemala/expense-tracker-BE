const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 2000;
const userRoutes = require('./routes/userRoute');
const expenseRoutes = require('./routes/expenseRoutes');
const categoryRoutes = require('./routes/refcode/categoryRoutes');
const currencyRoutes = require('./routes/refcode/currencyRoutes');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);
app.use('/categories', categoryRoutes);
app.use('/currencies', currencyRoutes);

const server = app.listen(port, ()=>{
	console.log("App running on", port);
});

module.exports = server;