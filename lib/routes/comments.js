module.exports = function(app, db) {
  var commentsCollection = db.collection('comments');

  app.get('/comments', function(req, res) {
    res.send('These are the comments');
  });
};
