var mongoose = require('mongoose');
var base58 = require('./cipher.js');
var Url = mongoose.model('Url');

module.exports.getShortAddress = function(req, res) {
  var base58Id = req.params.shorturl;

  var id = base58.decode(base58Id);

  // check if url already exists in database
  Url.findOne({_id: id}, function (err, doc){
    if (doc) {
      res.redirect(doc.long_url);
     } else {
       res.redirect('http://localhost:3000/');
   }
  });

}

module.exports.addOneAddress = function(req, res) {
  var longUrl = req.params.url;
  var shortUrl = '';

  // check if url already exists in database
  Url.findOne({long_url: longUrl}, function (err, doc){
    if (doc){
      shortUrl = 'http://localhost:3000/' + base58.encode(doc._id);

      // the document exists, so we return it without creating a new entry
      res.send({'shortUrl': shortUrl});
    } else {
      // since it doesn't exist, let's go ahead and create it:
      var newUrl = Url({
        long_url: longUrl
      });

      // save the new link
      newUrl.save(function(err) {
        if (err){
          console.log(err);
        }

        shortUrl = 'http://localhost:3000/' + base58.encode(newUrl._id);

        res.send({'shortUrl': shortUrl});
      });
    }

  });

}