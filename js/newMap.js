//here i create new cards using data from generated objects
(function () {
window.mapPins = document.querySelector('.map__pins');
var similarListElement = document.querySelector('.map__pin');
var similarWrapperTemplate = document.querySelector('.pin-template')
.content
document.querySelector('.map__card');
console.log()
for(var i = 0; i < 8; i++) {
var pinItem = similarWrapperTemplate.cloneNode(true);
pinItem.querySelector('.map__pin').style = "left:" + objects[i].location.x + "px" + ";" + "top:" + objects[i].location.y + "px" + ";";
var changeAvatar = pinItem.querySelector('.popup__avatar');
var changeAvatarTwo = pinItem.querySelector('.popup__avatarTwo');
changeAvatarTwo.src = objects[i].author.avatar;
changeAvatar.src = objects[i].author.avatar;
var changeHeadline = pinItem.querySelector('h3');
    changeHeadline.classList.add('popup__title');
changeHeadline.textContent = objects[i].offer.title
var changeOffer = pinItem.querySelector('small');
    changeOffer.classList.add('popup__text--address');
    changeOffer.textContent = objects[i].offer.address;
var changePrice = pinItem.querySelector('.popup__price');
    changePrice.classList.add('popup__text--address')
changePrice.textContent = objects[i].offer.price + "₽/ночь.";
    var changeAcType = pinItem.querySelector('h4');
    changeAcType.classList.add('popup__type');
    changeAcType.textContent = objects[i].offer.type;
var changeCapacity = changeAcType.nextElementSibling;
    changeCapacity.classList.add('popup__text--capacity')
    changeCapacity.textContent = objects[i].offer.rooms + "комнаты для" + objects[i].offer.guests + "гостей.";
var changeTime = changeCapacity.nextElementSibling;
    changeTime.classList.add('popup__text--time');
    changeTime.textContent = "Заезд после" +objects[i].offer.checkin + "," +"выезд до" +objects[i].offer.checkout;
    var changeFeatures = pinItem.querySelector('.popup__features');
    changeFeatures.textContent = objects[i].offer.features;
    var changeDescription = changeFeatures.nextElementSibling;
    changeDescription.textContent = objects[i].offer.description;
    var changePhotos = pinItem.querySelector('.popup__pictures');
    var image = changePhotos.children[0];
    image.children[0].src = objects[i].offer.photos;
    image.children[0].style.width = "33%";
       
window.mapPins.appendChild(pinItem);
};
//here i create new cards using data from generated objects
    })();