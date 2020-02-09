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
var newUsersByDay = [];


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
                    photos: newUsersByDay[notImportant]
                       },
            "location" : {
                x: minMaxValue(1,1200),
                y: minMaxValue(1,620)
            }
            };
            objects.push(testObject);
        }
console.log();
//here i generate a new array of objects
})();