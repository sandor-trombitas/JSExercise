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
var descriptionIndex = 0;
function showDescription() {
  var i;
  var descriptionList = document.getElementsByClassName('description');
  for (i=0; i<descriptionList.length; i++) {
    descriptionList[i].style.display = 'none';
  }
  descriptionIndex++;
  if (descriptionIndex > descriptionList.length) {descriptionIndex=1}
  descriptionList[descriptionIndex-1].style.display = 'block';
  setTimeout(showDescription, 3000);
}
imgCycle();
showDescription();
