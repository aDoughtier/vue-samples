import express from 'express';
//前端配置了代理，根本不需要跨域
import cors from 'cors'
const app = express();
const port = 3000;
import index from './routers/index.js'
app.use('/', index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));