const defaultRouter = absoluteRequire('routes/default');
const instagramRouter = absoluteRequire('routes/instagram');

module.exports = (app) => {
  app.use('/', defaultRouter);
  app.use('/instagram', instagramRouter);
};
