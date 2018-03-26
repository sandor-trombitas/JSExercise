document.addEventListener("DOMContentLoaded", function(event) {
    console.log('Hello Diana');
});
function imgCycle() {
  var mainimg = document.getElementsByClassName('main')[0];
  var imglist = document.getElementsByTagName('img');
  for (var i=0; i<imglist.length; i++) {
    var currentmain = mainimg.src;
    mainimg.src = imglist[i].src;
    imglist[i].src = currentmain;
  }
  setTimeout(imgCycle, 3000);
}
imgCycle();
