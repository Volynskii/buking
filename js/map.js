(function () {
//here i generate a new array of objects
window.objects = [];
        var accommodationDescription = [
            "Большая уютная квартира", 
            "Маленькая неуютная квартира", 
            "Огромный прекрасный дв орец", 
            "Маленький ужасный дворец", 
            "Красивый гостевой домик", 
            "Некрасивый него степриимный домик", 
            "Уютное бунгало далеко от моря", 
            "Неуютное бунгало по коле но в воде"
        ];
        var accomodationFeatures = [
            "wifi", 
            "dishwasher",
            "parking",
            "washer",
            "elevator",
            "conditioner"
        ];
        var accomodationTypes = [
            "palace","flat","house","bungalo"
        ];
        var featuresData = []; 
        var minMaxValue = function(min,max) {
                min = Math.ceil(min);
             max = Math.floor(max);
             return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            var timeValue = ['12:00','13:00','14:00'];
        var magicFunction = function() { 
        var acTypesArray = [];
                for (var i = 0; i <= minMaxValue(0,5); i++) {
        acTypesArray.push(accomodationFeatures[i]); // populate array with elements from corresponding array
                }
            return acTypesArray;
        }
        
        var usersByDay = [ "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
"http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
window.newUsersByDay = [];


for (var i = 0; i <= minMaxValue(2,2) ; i++) {
    var lastNumber = usersByDay.length - 1;
    var notImportant = minMaxValue(0,2-i);
newUsersByDay.push(usersByDay[notImportant]);
    usersByDay[notImportant] = usersByDay[lastNumber];
    usersByDay.pop(); 
   };

for (var i = 0; i < 8; i++) {
            testObject = {
                "author" : {
                    avatar: "img/avatars/user0" +  (i+1)  + ".png"
                         },
                "offer" : {
                    title: accommodationDescription[i],
                    address: minMaxValue(1,1200) + ',' + minMaxValue(1,1200),
                    price: minMaxValue(1000,1000000),
                    type: accomodationTypes[minMaxValue(0,3)],
                    rooms: minMaxValue(1,5),
                    guests: minMaxValue(1,10),
                    checkin:timeValue[minMaxValue(0,2)],
                    checkout:timeValue[minMaxValue(0,2)],
                    features: magicFunction(),
                    description: "",
                    photos: newUsersByDay[0]
                       },
            "location" : {
                x: minMaxValue(1,1200),
                y: minMaxValue(1,620)
            }
            };
            objects.push(testObject);
        }

//here i generate a new array of objects
})();
//here i create new cards using data from generated objects

(function () {
//here i disable form 
window.mainPin = document.querySelector('.map__pin--main');
window.form = document.querySelector('.notice__form--disabled');
window.inputs = form.querySelectorAll("fieldset");

var renderFieldsetsOff = function() {
for (var i = 0; i < inputs.length; i++) {
inputs[i].disabled = true;

}
}();
})();
//here i disable form 


(function () {
//here i create mechanism which open and close popup
    window.mapPins = document.querySelector('.map__pins');
var ESC_KEYCODE = 27;
window.mapPins.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__avatarTwo')) {
    evt.target.parentNode.parentNode.children[0].style = ""
    }
    else if(evt.target.classList.contains('popup__close')) {
        evt.target.parentNode.style = "display:none"
    }
});
    window.mapPins.addEventListener('keydown', function(evt) {
        if (evt.keyCode === ESC_KEYCODE) {
            evt.target.parentNode.children[0].style = "display:none";
        }
    });

    })();
//here i create mechanism which open and close popup
(function () {
//here i set a custom validity for input  
var inputCapacity = window.form.querySelector('#capacity');
var inputRooms = window.form.querySelector('#room_number');

inputCapacity.addEventListener('change', function(evt) {
    if (inputRooms.children[0].selected === true) {
        inputCapacity.children[1].disabled = true;
        inputCapacity.children[2].disabled = true;
    }
});
    console.log('changes')
//here i set a custom validity for input  
 })();
    
//here i create mechanism whice move pin
 (function () {
  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
      
      var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = false;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
      mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
      };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
        
        var renderFieldsetsOn = function() {
for (var i = 0; i < inputs.length; i++) {
inputs[i].disabled = false;
}
};
renderFieldsetsOn();
    
var closemap = document.querySelector('.map');
closemap.classList.remove('map--faded');
    
var inputAddress = form.querySelector('#address');
    inputAddress.value = (mainPin.offsetLeft) + ";" + (mainPin.offsetTop + 19) 
    
      mainPin.removeEventListener('mousemove', onMouseMove);
      mainPin.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          mainPin.removeEventListener('click', onClickPreventDefault)
        };
        mainPin.addEventListener('click', onClickPreventDefault);
      }

    };

    mainPin.addEventListener('mousemove', onMouseMove);
    mainPin.addEventListener('mouseup', onMouseUp);
  });
//here i create mechanism whice move pin
      })();

// backend.js,
var onSuccess = function (data) {
    var animals = data; 
    console.log(animals)
      
window.mapPins = document.querySelector('.map__pins');
var similarListElement = document.querySelector('.map__pin');
var similarWrapperTemplate = document.querySelector('.pin-template')
.content
document.querySelector('.map__card');
console.log()
for(var i = 0; i < 10; i++) {
var pinItem = similarWrapperTemplate.cloneNode(true);
pinItem.querySelector('.map__pin').style = "left:" + animals[i].location.x + "px" + ";" + "top:" + animals[i].location.y + "px" + ";";
var changeAvatar = pinItem.querySelector('.popup__avatar');
var changeAvatarTwo = pinItem.querySelector('.popup__avatarTwo');
changeAvatarTwo.src = animals[i].author.avatar;
changeAvatar.src = animals[i].author.avatar;
var changeHeadline = pinItem.querySelector('h3');
    changeHeadline.classList.add('popup__title');
changeHeadline.textContent = animals[i].offer.title
var changeOffer = pinItem.querySelector('small');
    changeOffer.classList.add('popup__text--address');
    changeOffer.textContent = animals[i].offer.address;
var changePrice = pinItem.querySelector('.popup__price');
    changePrice.classList.add('popup__text--address')
changePrice.textContent = animals[i].offer.price + "₽/ночь.";
    var changeAcType = pinItem.querySelector('h4');
    changeAcType.classList.add('popup__type');
    changeAcType.textContent = animals[i].offer.type;
var changeCapacity = changeAcType.nextElementSibling;
    changeCapacity.classList.add('popup__text--capacity')
    changeCapacity.textContent = animals[i].offer.rooms + "комнаты для" + animals[i].offer.guests + "гостей.";
var changeTime = changeCapacity.nextElementSibling;
    changeTime.classList.add('popup__text--time');
    changeTime.textContent = "Заезд после" +animals[i].offer.checkin + "," +"выезд до" +animals[i].offer.checkout;
    var changeFeatures = pinItem.querySelector('.popup__features');
    changeFeatures.textContent = animals[i].offer.features;
    var changeDescription = changeFeatures.nextElementSibling;
    changeDescription.textContent = animals[i].offer.description;
    var changePhotos = pinItem.querySelector('.popup__pictures');
   
    
 var fragmentOne = document.createDocumentFragment();
    mapPins.appendChild(pinItem);
 var containers = mapPins.querySelectorAll('.map__card-content');
 
 
};
var fragmentTwo = [].slice.call(animals);
var fragmentThree = fragmentTwo.filter(function (it) {
   return it.offer.price >= 10000 && it.offer.price <= 50000
}). 
map(function (it, index, Array) {
    return it;
})


//here i create new cards using data from generated objects

var housePrice = document.querySelector('#housing-price');
housePrice.addEventListener('change', function(evt) {
    
      switch (evt.target.value) {
       case 'any':
 var newAnimals = animals
               console.log(newAnimals)
        break;
          case 'middle':
              var newAnimals = animals.filter(function (it) {
          
   return it.offer.price >= 10000 && it.offer.price <= 50000
}). 
map(function (it, index, Array) {
    return it;        
});
console.log(newAnimals)
              break;
          case 'low':
              var newAnimals = animals.filter(function (it) {
          
   return it.offer.price >= 10000
}). 
map(function (it, index, Array) {
    return it;
});
 console.log(newAnimals)               
              break;
          case 'high':
             var newAnimals = animals.filter(function (it) {
          
                 return it.offer.price >= 50000
}). 
map(function (it, index, Array) {
    return it;
});
 console.log(newAnimals) 
}
})

    
    
    var houseRooms = document.querySelector('#housing-rooms');
    houseRooms.addEventListener('change', function(evt) {
    
      switch (evt.target.value) {
       case 'any':
 var newAnimals = animals
               console.log(newAnimals)
        break;
          case '1':
              var newAnimals = animals.filter(function (it) {
          
   return it.offer.rooms === 1
}). 
map(function (it, index, Array) {
    return it;        
});
console.log(newAnimals)
              break;
          case '2':
              var newAnimals = animals.filter(function (it) {
          
   return it.offer.rooms === 2
}). 
map(function (it, index, Array) {
    return it;
});
 console.log(newAnimals)               
              break;
          case '3':
             var newAnimals = animals.filter(function (it) {
          
                 return it.offer.rooms === 3
}). 
map(function (it, index, Array) {
    return it;
});
 console.log(newAnimals) 
}
})
    
    var houseCapacity = document.querySelector('#housing-guests');
    houseCapacity.addEventListener('change', function(evt) {
    
      switch (evt.target.value) {
       case 'any':
 var newAnimals = animals
               console.log(newAnimals)
        break;
          case '1':
              var newAnimals = animals.filter(function (it) {
          
   return it.offer.guests === 1
}). 
map(function (it, index, Array) {
    return it;        
});
console.log(newAnimals)
              break;
          case '2':
              var newAnimals = animals.filter(function (it) {
          
   return it.offer.guests === 2
}). 
map(function (it, index, Array) {
    return it;
});
 console.log(newAnimals)               
              break;
}
});

    
    var houseFeatures = document.querySelector('#housing-features');
    houseFeatures.addEventListener('change', function(evt) {
        if (evt.target.value === 'wifi' && evt.target.checked === true) {
            
    var newAnimals = animals.filter(function (it, index, Array) {
    return it.offer.features.includes('wifi'); 
 })
console.log(newAnimals)
    }
    else if (evt.target.value === 'dishwasher' && evt.target.checked === true) {
            
    var newAnimals = animals.filter(function (it, index, Array) {
    return it.offer.features.includes('dishwasher'); 
 })
console.log(newAnimals)
    }
        else if (evt.target.value === 'parking' && evt.target.checked === true) {
            
    var newAnimals = animals.filter(function (it, index, Array) {
    return it.offer.features.includes('parking'); 
 })
console.log(newAnimals)
    }
          else if (evt.target.value === 'washer' && evt.target.checked === true) {
            
    var newAnimals = animals.filter(function (it, index, Array) {
    return it.offer.features.includes('washer'); 
 })
console.log(newAnimals)
    }
         else if (evt.target.value === 'elevator' && evt.target.checked === true) {
            
    var newAnimals = animals.filter(function (it, index, Array) {
    return it.offer.features.includes('elevator'); 
 })
console.log(newAnimals)
    }
         else if (evt.target.value === 'conditioner' && evt.target.checked === true) {
            
    var newAnimals = animals.filter(function (it, index, Array) {
    return it.offer.features.includes('conditioner'); 
 })
console.log(newAnimals)
    };
    
    
    });
    
    
          
    
    
    
    
    
    
    
    
    
    

    
    
    
var buttonClose = mapPins.querySelectorAll('.popup');
for (var i = 0; i < buttonClose.length;i++) {
    buttonClose[i].style = "display:none;";
};
}

var onError = function (message) {
    console.error(message);
}
var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.addEventListener('load', function(evt) {
    var error;
    switch (xhr.status) {
        case 200:
    onSuccess(xhr.response);
    break;
        case 400:
            error = 'Неверный запрос';
            break;
        case 401:
            error = 'Пользователь не авторизован';
            break;
        case 404:
            error = 'Ничего не найдено';
            break;
            
        default:
            error = 'Статус ответа: : ' + xhr.status + ' ' + xhr.statusText;
    }
    
    if (error) {
        onError(error);
    }
    });

   xhr.addEventListener('error', function() {
       onError('Произошла ошибка соединения');
   });
xhr.addEventListener('timeout', function() {
    onError('Запрос не успел выполниться за' + xhr.timeout + 'мс');
});
var URL = 'https://js.dump.academy/keksobooking/data';
xhr.open('GET', URL);
 xhr.send();






window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData( form );

    // Define what happens on successful data submission
    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
    } );

    // Define what happens in case of error
    XHR.addEventListener( "error", function( event ) {
      alert( 'Oops! Something went wrong.' );
    } );

    // Set up our request
    XHR.open( "POST", "https://js.dump.academy/keksobooking" );

    // The data sent is what the user provided in the form
    XHR.send( FD );
  }
 
  // Access the form element...
 

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
  } );
} );





var sliderControl = mapPins.querySelector(".slider-control");
var sliderControls = document.querySelectorAll(".slider-control");

// slides informations
var slides = document.querySelectorAll(".slide"),
    slidesLength = slides.length;

// slides array
var slidesArr = [].slice.call(slides);

// reverse array sorting
slidesArr = slidesArr.reverse();

// slide current
var slideCurrent = 0;
for (var i = 0; i < sliderControls.length; i++)
sliderControls[i].addEventListener("click", function(e){
  target = e.target;
  
  // get next button
  if(target.classList.contains("next")){

    next = e.target,
    prev = next.previousElementSibling,
    nextSlide = slidesArr[slideCurrent + 1],
    slide = slidesArr[slideCurrent];
    
    slide.classList.add("slide-on");
    slide.classList.remove("text-on");
    nextSlide.classList.add("text-on");
    
    slideCurrent += 1;
    
    if(slideCurrent > 0) {
      prev.classList.remove("disabled");
    }
    
    if(slideCurrent === slidesLength - 1){
      next.classList.add("disabled");
    }
  }
  
  // get prev button
  if(target.classList.contains("prev")){
    
    slideCurrent -= 1;
    
    prev = e.target,
    next = prev.nextElementSibling,
    prevSlide = slidesArr[slideCurrent + 1],
    slide = slidesArr[slideCurrent];
    
    prevSlide.classList.remove("text-on");
    slide.classList.remove("slide-on");
    slide.classList.add("text-on");
    
    if(slideCurrent === slidesLength - 2){
      next.classList.remove("disabled");
    }

    if(slideCurrent === 0){
      prev.classList.add("disabled");
    }
    
  }

});
