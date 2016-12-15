module.exports.addOneAddress = function(req, res) {
  res
    .send("Added an address");
}

module.exports.getShortAddress = function(req, res) {
  res
    .send("Return shortened address");
}