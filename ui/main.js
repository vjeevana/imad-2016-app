console.log('Loaded!');

//chane text
var element = document.getElementById(`main-text`);
element.innerHTML = `new value`;
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = margnLeft + 'px';
}
img.onclick = function() {
   var interval = setInterval(moveRight, 50);
};
