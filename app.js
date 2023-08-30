const express = require('express');
const app = express();
const connectDb = require('./app/config/config.db');
require('dotenv').config();
const errorHandler = require('./app/middleware/middleware.error');
const success = require('./app/middleware/middleware.success');
connectDb();

app.use(express.json());
// app.use('/user', require('./app/routers/router.user.js'));
app.use('/category', require('./app/routes/route.category.js'));
// app.use('/book', require('./app/routers/router.book.js'));

//always use on the last after routes
app.use(errorHandler);
app.use(success);

app.listen(process.env.PORT, () => {
    console.log(`app listening at http://127.0.0.1:${process.env.PORT}`);
});
