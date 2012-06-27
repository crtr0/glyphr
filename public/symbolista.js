(function(exports){

   var map = {
     'heart': "♥",
     'cloud': '☁',
     'poop': '💩',
     'snowman': '☃',
     'copyright': '©',
     'registered': '®',
     'pencil': '✎',
     'eject': '⏏',
     'star' : '★',
     'phone': '☎',
     'shamrock': '☘'
   };

   exports.transcode = function(str) {
     var out = str;
     Object.keys(map).forEach(function(key) {
       out = out.replace(key, map[key]);
     });
     console.log(out);
     return out;
   };

})(typeof exports === 'undefined'? this['symbolista']={}: exports);

