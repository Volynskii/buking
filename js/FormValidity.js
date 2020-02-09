(function () {
//here i set a custom validity for input  
var inputCapacity = window.form.querySelector('#capacity');
var inputRooms = window.form.querySelector('#room_number');

inputCapacity.addEventListener('invalid', function(evt) {
    if (inputRooms.children[0].selected === true && inputCapacity.children[0].selected === !true) {
        inputCapacity.setCustomValidity('Количество гостей должно соотвествовать количеству комнат');
    }
});
//here i set a custom validity for input  
 })();