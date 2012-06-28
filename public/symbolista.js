(function(exports){

   var map = {
     // 2-word phrases must go first
     'love hotel': '🏩', 
     // single words
     'love': "♥",
     'cloud': '☁',
     'poop': '💩',
     'snowman': '☃',
     'copyright': '©',
     'registered': '®',
     'pencil': '✎',
     'eject': '⏏',
     'star' : '★',
     'phone': '☎',
     'luck': '☘',
     'sun': '☀',
     'rain': '☔',
     'coffee': '☕',
     'poison': '☠',
     'sad': '☹',
     'happy': '☻',
     'king': '♚',
     'queen': '♛',
     'diamond': '♦',
     'music': '♪',
     'recycle': '♻',
     'dice': '⚄',
     'flag': '⚑',
     'justice': '⚖',
     'warning': '⚠',
     'baseball': '⚾'

   };

   exports.transcode = function(str) {
     var out = str;
     Object.keys(map).forEach(function(key) {
       out = out.replace(key, map[key]);
     });
     //console.log(out);
     return out;
   };

})(typeof exports === 'undefined'? this['symbolista']={}: exports);

