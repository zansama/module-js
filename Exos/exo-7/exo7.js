console.log("exo-7");
var type = {

    'car': 'voiture',
    'house': 'maison',
    'game': 'jeu',
    'videoGame': 'jeu video',
    'show': 'spectacle'
}
console.log(type);
console.log(jsonDatas);

function trad() {
        for (let i = 0; i < jsonDatas.length; i++){
            for (var property in type){
                if (property === jsonDatas[i].type){
                    jsonDatas[i].type = type[property];
                }
            }
        }

    console.log(jsonDatas);
}

function search(){
    console.clear();
    var check = document.getElementById('myCheck');
    var message = document.test.message.value;
    var response = [];
    for (let i = 0; i < jsonDatas.length; i++) {
        if (message === jsonDatas[i].type && check.checked === true){
            if (jsonDatas[i].quantity > 0){
                response.push(jsonDatas[i]);
            }
        }else if(message === jsonDatas[i].type){
            response.push(jsonDatas[i]);
        }

    }
        document.getElementById('message').innerHTML = message;
    console.log(response);
}

function sortItems() {
    console.clear();
    var sort = document.getElementById("sort")
    var choiceUser = sort.options[sort.selectedIndex].value;
       for (let i = 0; i < jsonDatas.length; i++) {
        if (choiceUser === '1'){
           jsonDatas.sort(function (a, b) {
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            });
        }else  if (choiceUser === '2'){
            jsonDatas.sort(function (a, b) {
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA > nameB) //sort string ascending
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            });
        }else if (choiceUser === '3'){
               jsonDatas.sort(function (a, b) {
                   var nameA=a.price, nameB=b.price
                   if (nameA < nameB) //sort string ascending
                       return -1
                   if (nameA > nameB)
                       return 1
                   return 0
               });
           } else if (choiceUser === '4'){
               jsonDatas.sort(function (a, b) {
                   var nameA=a.price, nameB=b.price
                   if (nameA > nameB) //sort string ascending
                       return -1
                   if (nameA < nameB)
                       return 1
                   return 0
               });
           }
    }
    console.log(jsonDatas);
}

function addItem() {

    var name = document.Item.name.value;
    var type = document.Item.type.value;
    var description = document.Item.description.value;
    var price = document.Item.price.value;
    var quantity = document.Item.quantity.value;
    var newItem = {};

    newItem.name = name;
    newItem.type = type;
    newItem.description = description;
    newItem.price = price;
    newItem.quantity = quantity;
    jsonDatas.push(newItem);

    console.log(newItem);
    console.log(jsonDatas);

}
trad();
