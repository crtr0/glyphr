(function(exports){

   var map = {
     'baseball': '⚾',
     'castle': '♜',
     'copyright': '©',
     'cloud': '☁',
     'cut': '✂',
     'coffee': '☕',
     'diamond': '♦',
     'dice': '⚄',
     'eject': '⏏',
     'flag': '⚑',
     'happy': '☻',
     'justice': '⚖',
     'king': '♚',
     'knight': '♞',
     'larr': '←',
     'lod': "ಠ_ಠ",
     'love': "♥",
     'luck': '☘',
     'luvhotel': '🏩', 
     'music': '♪',
     'peace': '☮',
     'pencil': '✎',
     'plane': '✈',
     'poison': '☠',
     'poop': '💩',
     'phone': '✆',
     'queen': '♛',
     'rain': '☔',
     'rarr': '→',
     'recycle': '♻',
     'registered': '®',
     'sad': '☹',
     'snowman': '☃',
     'star' : '★',
     'sun': '☀',
     'warning': '⚠',
     'zen': '☯'
   };

   exports.transcode = function(str) {
     var out = str;
     Object.keys(map).forEach(function(key) {
       var regexp = new RegExp(' ' + key, "ig");
       out = out.replace(regexp, ' ' + map[key]);
     });
     //console.log(out);
     return out;
   };

})(typeof exports === 'undefined'? this['glyphr']={}: exports);

