module.exports = {
  index: function(req, res) {
    console.log("Request for collection received");
    res.send({ message: "We heard you needed your collection." });
  }
};
