(function () {
//here i create mechanism which open and close popup
var buttonClose = mapPins.querySelectorAll('.popup');
for (var i = 0; i < buttonClose.length;i++) {
    buttonClose[i].style = "display:none;";
};

window.mapPins.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__avatarTwo')) {
    evt.target.parentNode.parentNode.children[0].style = ""
    }
    else if(evt.target.classList.contains('popup__close')) {
        evt.target.parentNode.style = "display:none"
    }
});
//here i create mechanism which open and close popup
    })();
