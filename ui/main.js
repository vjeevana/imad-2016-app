console.log('Loaded!');

//chane text
var element = document.getElementById(`main-text`);
element.innerHTML = `new value`;
//move the image
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft = '100px';
};
