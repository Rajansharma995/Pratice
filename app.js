const express = require('express');
const app = express();
const connectDb = require('./app/config/config.db');
require('dotenv').config();
const errorHandler = require('./app/middleware/middleware.error');
const success = require('./app/middleware/middleware.success');
connectDb();

app.use(express.json());
app.use('/user', require('./app/routes/route.user.js'));
app.use('/category', require('./app/routes/route.category.js'));
app.use('/book', require('./app/routes/route.book.js'));

app.use(errorHandler);
app.use(success);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});
