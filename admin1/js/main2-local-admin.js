let product1 = new Product('01','../img/ruou-bia/bia.png', '15000', 'Bia', '50');
let product2 = new Product('02', '../img/ruou-bia/ruou.png', '50000', 'Rượu', '50');
let arrProduct = [product1, product2]

showTable();
// add product
function addProduct() {
    
    let id = document.getElementById("addId").value;
    let name = document.getElementById("addName").value;
    let image = document.getElementById("addImage").value;
    let price = document.getElementById("addPrice").value;
    let amount = document.getElementById("addAmount").value;
    let product = new Product(id, image, price, name, amount);
    if (id == '' || name == '' || image == '' || price == '' || amount == '') {
        alert("nhập thiếu dữ liệu")
    }
    else {
        arrProduct.push(product);
    localStorage.setItem('list-product', JSON.stringify(arrProduct));    //đưa mảng sản phẩm lên local storage
    showTable();
    }
    document.getElementById("tableAdd").style.display = 'none';
}
function blockAdd() {
    document.getElementById("tableAdd").style.display = 'block';
}
// show table
function showTable() {
    let tableP = ``;
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : [];        //lấy dữ liệu về máy

    for (let i = 0; i < arrProduct.length; i++) {
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
    document.getElementById("tableProduct").innerHTML = tableP;
}


//edit product
function showEdit(index) {//tạo ra thanh edit
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy

    let text = `<button onclick="editProduct(${index})">Edit</button>`
    document.getElementById("showEditProduct").innerHTML = text;
    //xuất hiện giá trị cũ trong ô input
    document.getElementById("editId").value = arrProduct[index].id;
    document.getElementById("editName").value = arrProduct[index].name;
    document.getElementById("editPrice").value = arrProduct[index].price;
    document.getElementById("editAmount").value = arrProduct[index].amount;
    document.getElementById("editImage").value = arrProduct[index].image;

    document.getElementById("tableEdit").style.display = 'block';//hiện lên thanh edit

}
function editProduct(index) {
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy

    arrProduct[index].id = document.getElementById("editId").value
    arrProduct[index].name = document.getElementById("editName").value
    arrProduct[index].price = document.getElementById("editPrice").value
    arrProduct[index].amount = document.getElementById("editAmount").value
    arrProduct[index].image = document.getElementById("editImage").value

    localStorage.setItem('list-product', JSON.stringify(arrProduct));    //đưa mảng sản phẩm lên local storage
    showTable();
    document.getElementById("tableEdit").style.display = 'none';
}
// xóa product
function delProduct(index) {
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy
    let x = confirm("bạn đồng ý xóa ");
    if (x == true) {
        arrProduct.splice(index, 1);
    }
    localStorage.setItem('list-product', JSON.stringify(arrProduct));
    showTable();
}
function home(){
    showTable()
}

