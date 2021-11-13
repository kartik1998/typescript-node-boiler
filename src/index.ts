import express from 'express';
import morgan from 'morgan';
import out from '@lib/apiout';
import { routes } from '@routes/index';

const app: express.Application = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.get('/ping', (_, res) => out.success(res, out.SUCCESS, 'pong'));

export default app;
