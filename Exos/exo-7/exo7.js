console.log("exo-7");
var type = {

    'car': 'voiture',
    'house': 'maison',
    'game': 'jeu',
    'videoGame': 'jeu video',
    'show': 'spectacle'
}
console.log(type);

function trad() {
    for (let i = 0; i < jsonDatas.length; i++) {
        for (var property in type) {
            if (property === jsonDatas[i].type) {
                jsonDatas[i].type = type[property];
            }
        }
    }

    console.log(jsonDatas);
}

function search() {
    console.clear();
    var check = document.getElementById('myCheck');
    var message = document.test.message.value;
    var response = [];
    jsonDatas.forEach(function (type) {

            if (type.type === message && check.checked === true) {
                type.items.forEach(function (item) {
                    if (item.quantity > 0) {
                        response.push(item);
                        console.log(sortItems(response));
                    }
                });
            } else if (type.type === message) {
                type.items.forEach(function (item) {
                    response.push(item);

                });
            } else if(message === '' && check.checked === true){
                type.items.forEach(function (item) {
                    if (item.quantity > 0) {
                        response.push(item);
                        console.log(sortItems(response));
                    }
                });
            }else if (message === ''){
                type.items.forEach(function (item) {
                    response.push(item);

                });
            }
        }
    );
    sortItems(response);
}

function sortItems(response) {
    console.clear()

    var sort = document.getElementById("sort")
    var choiceUser = sort.options[sort.selectedIndex].value;

    if (choiceUser === '0') {

    } else if (choiceUser === '1') {
        response.sort(function (a, b) {//dans response je trie avec la fonction sort()
            return (a.name).localeCompare(b.name);//je retourne le resultat du tri par (name) a > b donc croissant
        });
    } else if (choiceUser === '2') {
        response = response.sort(function (a, b) {
            return (b.name).localeCompare(a.name);
        });
    } else if (choiceUser === '3') {
        response.sort(function (a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
    } else if (choiceUser === '4') {
        response.sort(function (a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
        });
    }
    console.log(response);
}


function addItem() {
    console.clear();
    var name = document.Item.name.value;
    var type = document.Item.type.value;
    var description = document.Item.description.value;
    var price = document.Item.price.value;
    var quantity = document.Item.quantity.value;
    var firstname = document.Item.firstname.value
    var lastname = document.Item.lastname.value
    var address = document.Item.address.value
    var newItem = {};
    newItem.name = name;
    newItem.description = description;
    newItem.price = price;
    newItem.quantity = quantity;
    newItem.contact = {firstname, lastname, address};

    jsonDatas.forEach(function (add) {
        if (add.type === type) {
            add.items.push(newItem);
        } else {
            return false
        }
    });


    console.log(jsonDatas);
    // console.log(jsonDatas);

}

function showContact() {
    jsonDatas.forEach(function (type) {
            type.items.forEach(function (item) {
                console.log(item.contact);
            })
        }
    );
}


trad();
// showContact();
