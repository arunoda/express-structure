module.exports = function(app, db) {
  require('./comments')(app, db);
};