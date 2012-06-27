var map = {
  'heart': '♥',
  'cloud': '☁'
};

module.exports = function(str) {
  var symbol = map[str];
  console.log(symbol);
  return symbol;
};

