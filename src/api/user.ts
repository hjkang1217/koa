import Router from 'koa-router';
import validate, { Joi } from 'koa-router-joi-validation';

const router = new Router();
const userValidator = validate({
  body: {
    name: Joi.string().required(),
    email: Joi.string().email().required()
  }
})

router.get('/', (ctx, next) => {
  ctx.body = 'GET ' + ctx.request.path;
});

router.post('/', userValidator, async (ctx, next) => {
  console.log('@@@', ctx.request.body);
  ctx.body = 'TEST';
});

export default router;