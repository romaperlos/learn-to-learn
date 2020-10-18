import express from 'express';
import cors from 'cors';
import useMiddleware from './middleware/index.js';
import errorHandlers from './middleware/error-handlers.js';
import indexRouter from './routes/index.js';
import directoryRouter from './routes/directory.js';
import contentRouter from './routes/content.js'
const app = express();

app.use(cors());
useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/api', indexRouter);
app.use('/directory', directoryRouter);
app.use('/content', contentRouter);

// Обработка несуществующих запросов
errorHandlers(app);

export default app;
