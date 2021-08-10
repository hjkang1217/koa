import Koa from 'koa';
import Router from 'koa-router';
import api from './api'
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();
const port: number = 8769;
app.use(bodyParser());

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello World!';
});

router.use('/api', api.routes());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, ()=> {
	console.log(`Koa server is listening on port ${port}`);
});