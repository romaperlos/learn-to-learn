import express from 'express';
import useMiddleware from './middleware/index';
import errorHandlers from './middleware/error-handlers';
import indexRouter from './routes/index';

const app = express();

useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/api', indexRouter);

// Обработка несуществующих запросов
errorHandlers(app);

export default app;
