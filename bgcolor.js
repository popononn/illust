
/*クッキー*/
cb_name = "bgcolor";
function  changebgcolor(obj){
document.cookie = cb_name+"="+obj+"; expires=Fri, 31-Dec-2030 23:59:59 GMT; path=/;";
window.location.reload(true);
}
Cookie = document.cookie+";";
cb_set1 = Cookie.indexOf(cb_name);
if(cb_set1 != -1){
cb_set2 = Cookie.indexOf("=",cb_set1);
cb_set3 = Cookie.indexOf(";",cb_set2);
cb_value = Cookie.substring(cb_set2+1, cb_set3);
}else{
cb_value = 0;
}
/*CSS*/
document.write('<style>');
document.write('.sample-bgcolor {overflow: hidden;}');
document.write('.sample-bgcolor p {float: left;margin: 0 10px 0 0;}');
if(cb_value == 0){
document.write('body {background: #ccc;color: #fcfcfc;}');
document.write('a,a:link,a:visited,a:hover,a:active {color: #3283f2;}');
}else if(cb_value == 1){
document.write('body {background: #fff;color: #333;}');
document.write('a,a:link,a:visited,a:hover,a:active {color: #3283f2;}');
}else{
document.write('body {background: #ccc;color: #fcfcfc;}');
document.write('a,a:link,a:visited,a:hover,a:active {color: #3283f2;}');
}
document.write('</style>');
/*ボタン*/
if(cb_value == 0){
document.write('<span>グレー　</span>');
document.write('<span><a href="javascript:void(0)" onclick="changebgcolor(1); return false;">白</a></span>');
}else if(cb_value == 1){
document.write('<span><a href="javascript:void(0)" onclick="changebgcolor(0); return false;">グレー</a>　</span>');
document.write('<span>白　</span>');
}else{
document.write('<span>グレー　</span>');
document.write('<span><a href="javascript:void(0)" onclick="changebgcolor(1); return false;">白</a></span>');
}