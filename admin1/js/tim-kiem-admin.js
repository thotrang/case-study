let x = 0;
function showSearch() {
    if (x % 2 == 0) {
        document.getElementById("showSearch").style.display = 'block'
        document.getElementById("tableSearch").style.display = 'block'
    }
    else {
        document.getElementById("showSearch").style.display = 'none'
        document.getElementById("tableSearch").style.display = 'none'

    } x++;
}
function priceSearch() {
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy

    let a = document.getElementById("showSearch").value;
    let tableP = ``;
    for (let i = 0; i < arrProduct.length; i++) {
        let b = arrProduct[i].price;
        if (a == b) {
            tableP += `<tr class="aProduct">
                <td>${arrProduct[i].id}</td>
                <td>${arrProduct[i].name}</td>
                <td><img src="${arrProduct[i].image}"></img></td>
                <td>${arrProduct[i].price}</td>
                <td>${arrProduct[i].amount}</td>
                <td class="nut"><button id="edit" onclick="showEdit(${i})">Edit Product</button></td>
                <td><button id="del" onclick="delProduct(${i})">Delete</button></td>
            </tr>`
        }
    } document.getElementById("tableProduct").innerHTML = tableP;

    document.getElementById("showSearch").style.display = 'none'
    document.getElementById("tableSearch").style.display = 'none'
}
function idSearch() {
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy

    let a = document.getElementById("showSearch").value;
    let tableP = ``;
    for (let i = 0; i < arrProduct.length; i++) {
        let b = arrProduct[i].id;
        if (a == b) {
            tableP += `<tr class="aProduct">
                <td>${arrProduct[i].id}</td>
                <td>${arrProduct[i].name}</td>
                <td><img src="${arrProduct[i].image}"></img></td>
                <td>${arrProduct[i].price}</td>
                <td>${arrProduct[i].amount}</td>
                <td class="nut"><button id="edit" onclick="showEdit(${i})">Edit Product</button></td>
                <td><button id="del" onclick="delProduct(${i})">Delete</button></td>
            </tr>`
        }
    } document.getElementById("tableProduct").innerHTML = tableP;

    document.getElementById("showSearch").style.display = 'none'
    document.getElementById("tableSearch").style.display = 'none'
}
function nameSearch() {
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy

    let a = document.getElementById("showSearch").value;
    let a1=a.toUpperCase();
    let tableP = ``;
    for (let i = 0; i < arrProduct.length; i++) {
        let b = arrProduct[i].name;
        let b1=b.toUpperCase();
        let result=b1.includes(a1);
        if (result) {
            tableP += `<tr class="aProduct">
                <td>${arrProduct[i].id}</td>
                <td>${arrProduct[i].name}</td>
                <td><img src="${arrProduct[i].image}"></img></td>
                <td>${arrProduct[i].price}</td>
                <td>${arrProduct[i].amount}</td>
                <td class="nut"><button id="edit" onclick="showEdit(${i})">Edit Product</button></td>
                <td><button id="del" onclick="delProduct(${i})">Delete</button></td>
            </tr>`
        }
    } document.getElementById("tableProduct").innerHTML = tableP;

    document.getElementById("showSearch").style.display = 'none'
    document.getElementById("tableSearch").style.display = 'none'
}
