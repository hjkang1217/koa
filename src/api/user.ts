import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx, next) => {
  console.log('@@@', ctx.query.name);
  ctx.body = 'GET ' + ctx.request.path;
});

router.post('/', (ctx, next) => {
  console.log('@@@', ctx.request.body);
  ctx.body = 'TEST';
});

export default router;