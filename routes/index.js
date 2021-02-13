const defaultRouter = absoluteRequire('routes/default');
const distanceRouter = absoluteRequire('routes/distance');

module.exports = (app) => {
  app.use('/', defaultRouter);
  app.use('/distance', distanceRouter);
};
