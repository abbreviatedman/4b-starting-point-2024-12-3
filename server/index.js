const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const logger = require('morgan');

const debutsRouter = require('./routes/debutsRouter')
const connectToMongoDb = require('./db/mongodb');

dotenv.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors({ optionsSuccessStatus: 200, origin: '*' }));
app.use(logger('dev'))

app.use('/api/debuts', debutsRouter);

const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log(`Server is listening on port: ${PORT}`);
    connectToMongoDb();
});