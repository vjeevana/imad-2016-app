var nameInput = document.getElementByID('name');
var name = nameInput.value;
var submit= document.getElementByID('submit_btn');
submit.onclick = function(){
    

    var names = ['name1','name2','name3','name4'];
    var list='';
    for(var i=0; i< names.length; i++){
        list == '<li>' +names[i] + '</li>';
        
    }
    var ul= document.getElementByID('namelist');
    ul.innerHTML = list;
};