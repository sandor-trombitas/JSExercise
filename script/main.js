document.addEventListener("DOMContentLoaded", function(event) {
    console.log('Hello Diana');
});
var mainimg = document.getElementsByClassName('main')[0];
var imglist = document.getElementsByClassName('img-list');
for (var i=0; i<imglist.length; i++) {
  var clickedimg = imglist[i];
  clickedimg.addEventListener('click', function(event) {
    mainimg.src = event.target.src;
  });
}
