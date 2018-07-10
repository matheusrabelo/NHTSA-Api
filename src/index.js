import Koa from 'koa';
import dotenv from 'dotenv';
import bodyParser from 'koa-bodyparser';

import router from './router';
import logger from './libs/logger';
import exceptionHandler from './utils/exceptionHandler';
import bodyParserConfig from './utils/bodyParserConfig';

dotenv.config();

const app = new Koa();
const port = process.env.API_PORT;

app.use(exceptionHandler);
app.use(bodyParser(bodyParserConfig));
app.use(router.routes());

app.listen(port);
logger.log('App listening', { port });
