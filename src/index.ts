import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();
const port: number = 8769;

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(port, ()=> {
	console.log(`Koa server is listening on port ${port}`);
});