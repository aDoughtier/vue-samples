import express from 'express';
const app = express();
const port = 3000;
import index from './routers/index.js'

app.use('/', index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));