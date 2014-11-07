;(function($, undefined){
  $.fn.mappable = function(options){
    this.each(function() {
      options = options || {};
      var map = $(options.map);
      if(!map.is("map")){
        map = $("map[name='" + $(this).attr("usemap").replace("#", "") + "']");
      }
      var n,
      areas = map.find('area'),
      len = areas.length,
      $img = $(this),
      img = this,
      coords = [],
      previousWidth = $img.prop('naturalWidth');

      for (n = 0; n < len; n++) {
        coords[n] = areas[n].coords.split(',');
      }

      this.resize = function () {
        var n, m, clen, x_args, y_args,
        factor = $img.outerWidth() / previousWidth;

        for (n = 0; n < len; n++) {
          clen = coords[n].length;
          for (m = 0; m < clen; m++) {
            coords[n][m] = Math.round(parseInt(coords[n][m], 10) * factor);
          }
          areas[n].coords = coords[n].join(',');

          var i, x = [], y = [];
          for (i=0; i < coords[n].length; i++){
            x.push( coords[n][i++] );
            y.push( coords[n][i] );
          }

          var x_sorted = x.sort(num);
          var y_sorted = y.sort(num);

          // below vars are now relative to image
          var top = y_sorted[0];
          var left = x_sorted[0];

          var bottom = y_sorted[y_sorted.length - 1];
          var right = x_sorted[x_sorted.length - 1];

          // below vars are now relative to body
          top = top + $img.offset().top;
          left = left + $img.offset().left;

          bottom = bottom + $img.offset().top;
          right = right + $img.offset().left;

          var width = right - left;
          var height = bottom - top;

          var $area = $(areas[n]);
          $area.data("offsetTop", top);
          $area.data("offsetLeft", left);

          $area.data("offsetBottom", bottom);
          $area.data("offsetRight", right);
        
          $area.data("width", width);
          $area.data("height", height);
          // console.log("top:" + top + ", left:" + left + ", bottom:" + bottom + ", right:" + right);
        }
        previousWidth = $img.outerWidth();
        return true;
      };
      window.onresize = this.resize;
      $(window).trigger("resize");

      function num(a, b){ return (a-b); }
    })
  }
})(jQuery);