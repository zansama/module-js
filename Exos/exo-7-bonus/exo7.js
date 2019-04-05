console.log("exo-7");

console.log(jsonDatas);

function viewData(response) {

    var catalog = document.getElementById('catalog')
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'test')
    for (let i = 0; i < jsonDatas.length; i++) {
        console.log("je suis la");
        var td = [];
        var data = [];
        let tr = document.createElement('tr');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name','article');

        // tr.setAttribute('id', 'test');

        for (let j = 0; j < 6; j++) {
            td.push(document.createElement('td'));

        }

        if (typeof response === 'undefined') {
            data.push(document.createTextNode(jsonDatas[i].name));
            data.push(document.createTextNode(jsonDatas[i].description));
            data.push(document.createTextNode(jsonDatas[i].type));
            data.push(document.createTextNode(jsonDatas[i].price));
            data.push(document.createTextNode(jsonDatas[i].quantity));
            data.push(checkbox)

        } else {
            data.push(document.createTextNode(response[i].name));
            data.push(document.createTextNode(response[i].description));
            data.push(document.createTextNode(response[i].type));
            data.push(document.createTextNode(response[i].price));
            data.push(document.createTextNode(response[i].quantity));
            data.push(checkbox);

        }

        for (let k = 0; k < td.length; k++) {
            td[k].appendChild(data[k]);
            tr.appendChild(td[k]);


        }

        tbody.appendChild(tr);
        catalog.appendChild(tbody);


    }

}

function addItem() {
    console.clear();
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

    search()

}

function removeElement() {
    // Removes an element from the document

    var element = document.getElementById('test');
    console.log(element);
    element.parentNode.removeChild(element);
}

function sortItems() {
    console.clear();
    removeElement();
    var sort = document.getElementById("sort")
    var choiceUser = sort.options[sort.selectedIndex].value;

    if (choiceUser === '0') {

    } else if (choiceUser === '1') {
        jsonDatas.sort(function (a, b) {//dans response je trie avec la fonction sort()
            return (a.name).localeCompare(b.name);//je retourne le resultat du tri par (name) a > b donc croissant
        });
    } else if (choiceUser === '2') {
        jsonDatas.sort(function (a, b) {
            return (b.name).localeCompare(a.name);
        });
    } else if (choiceUser === '3') {
        jsonDatas.sort(function (a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
    } else if (choiceUser === '4') {
        jsonDatas.sort(function (a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
        });
    }
    viewData();
}

function search() {
    console.clear();

    var searchItems = document.getElementById('searchItems');
    var choiceUser = searchItems.options[searchItems.selectedIndex].value;
    var response = [];

    removeElement()

    jsonDatas.forEach(function (type) {
        if (choiceUser === '0') {
            response.push(type);
        } else if (choiceUser === '1' && type.type === 'car') {
            response.push(type);
        } else if (choiceUser === '2' && type.type === 'house') {
            response.push(type);
        } else if (choiceUser === '3' && type.type === 'game') {
            response.push(type);
        } else if (choiceUser === '4' && type.type === 'videoGame') {
            response.push(type);
        } else if (choiceUser === '5' && type.type === 'show') {
            response.push(type);
        }

    });
    viewData(response);
    console.log(response);
}

function cart(response) {
    var cart = document.getElementById('itemCart')
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'cartBody')
    for (let i = 0; i < jsonDatas.length; i++) {
        console.log("je suis la");
        var td = [];
        var data = [];
        let tr = document.createElement('tr');
        var checked = document.querySelectorAll('[name="article"]:checked');

        // tr.setAttribute('id', 'test');

        for (let j = 0; j < 5; j++) {
            td.push(document.createElement('td'));

        }

        //if (typeof response === 'undefined') {
            if (checked) {
                console.log(checked);
                data.push(document.createTextNode(jsonDatas[i].name));
                data.push(document.createTextNode(jsonDatas[i].description));
                data.push(document.createTextNode(jsonDatas[i].type));
                data.push(document.createTextNode(jsonDatas[i].price));
                data.push(document.createTextNode(jsonDatas[i].quantity));

            }


       // }
        // else {
        //     if (checked === true) {
        //         data.push(document.createTextNode(response[i].name));
        //         data.push(document.createTextNode(response[i].description));
        //         data.push(document.createTextNode(response[i].type));
        //         data.push(document.createTextNode(response[i].price));
        //         data.push(document.createTextNode(response[i].quantity));
        //         data.push(checkbox);
        //     }
        // }

        for (let k = 0; k < td.length; k++) {
            td[k].appendChild(data[k]);
            tr.appendChild(td[k]);


        }

        tbody.appendChild(tr);
        cart.appendChild(tbody);


    }
}


viewData();