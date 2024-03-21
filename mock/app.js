import express from 'express';
import cors from 'cors'
const app = express();
const port = 3000;
import index from './routers/index.js'

app.use(cors())
app.use('/', index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));