(function () {
//here i disable form 
window.mainPin = document.querySelector('.map__pin--main');
window.form = document.querySelector('.notice__form--disabled');
var inputs = form.querySelectorAll("fieldset");

var renderFieldsetsOff = function() {
for (var i = 0; i < inputs.length; i++) {
inputs[i].disabled = true;

}
}();
})();
//here i disable form 