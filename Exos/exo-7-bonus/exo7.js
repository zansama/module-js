console.log("exo-7");

console.log(jsonDatas);

function viewData() {

    var catalog = document.getElementById('bodyCatalog')
    for (let i = 0; i < jsonDatas.length; i++) {
        var td = [];
        var data = [];
        let tr = document.createElement('tr');

        for (let j = 0; j < 5; j++) {
            td.push(document.createElement('td'));
            console.log('im here');

        }
        data.push(document.createTextNode(jsonDatas[i].name));
        data.push(document.createTextNode(jsonDatas[i].description));
        data.push(document.createTextNode(jsonDatas[i].type));
        data.push(document.createTextNode(jsonDatas[i].price));
        data.push(document.createTextNode(jsonDatas[i].quantity));

        for (let k = 0; k < td.length; k++) {
            td[k].appendChild(data[k]);
            tr.appendChild(td[k]);

            console.log('je suis la');
        }
        catalog.appendChild(tr);
        console.log(data);
    }


}


viewData();