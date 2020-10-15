export default function(app) {
  // Обработка ошибок.
  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res) => {
    res.status(error.status || 500);
    res.render('partials/error', {
      title: 'Обработка выбранного Вами адреса не предусмотрена данным сервером',
      message: error.message,
    });
  });
};
