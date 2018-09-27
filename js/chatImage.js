$(function(){
	$("#unchi").hover(
  		function () {
  		var a = $(this).attr("id");
    	$(this).append($("<span>"+a+"</span>"));
  	},
  		function () {
    	$(this).find("span:last").remove();
  	});
});
function loadEmoji(){
	var imglist = ["ojama","irasshai","4649","arigato","otu","hai","phalanx","dispel","gravity","kyohu","mahi","nicefight","heelall","kapu","tehe","yaru","kiri","hawawa","gomen","ohayou"];
	imglist.forEach(function(a) {
		var size=100
    	var thisHtml = $("ul#messages").html();
   		var regexp = new RegExp("\:"+a+"\:",'g');
    	$("ul#messages").html(thisHtml.replace(regexp,'\<img width="'+size+'" height="'+size+'" id="'+a+'" src=\"image/' + a + '\.png\"\>'));
    });
}