import express from 'express';
import useMiddleware from './middleware/index.js';
import errorHandlers from './middleware/error-handlers.js';
import indexRouter from './routes/index.js';
import directoryRouter from './routes/directory.js';

const app = express();

useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/api', indexRouter);
app.use('/directory', directoryRouter);

// Обработка несуществующих запросов
errorHandlers(app);

export default app;
