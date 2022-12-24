const express = require('express');
const app = express();
const config = require('config');
const bodyParser = require('body-parser');
const userRouter = require('./router/UserRoute');
const productRouter = require('./router/ProductRoute');
const {handleError} = require('./exceptions/ExceptionHandler')
require("./config/db");


if(!config.has('jwtPrivateKey')){
    console.error('FATAL ERROR WITH jwtPrivateKey');
    process.exit(1);
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use(handleError);

console.log(`Application name: ${config.get('name')}`);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}..`)
});