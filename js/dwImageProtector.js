jQuery.fn.protectImage = function(settings) {
 $("img[name=blank]").remove();
 settings = jQuery.extend({
 image: 'blank.gif',
 zIndex: 10
 }, settings);
return this.each(function() {
 var position = $(this).position();
 var height = $(this).height();
 var width = $(this).width();
 $('<img />').attr({
 width: width,
 height: height,
 src: settings.image,
 name : "blank"
}).css({
 top: position.top,
 left: position.left,
 position: 'absolute',
 zIndex: settings.zIndex
 }).appendTo('body')
 });
};