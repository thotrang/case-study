let product1 = new Product('01', '..\img\ruou-bia\bia.png', '15000', 'Bia', '50');
let product2 = new Product('02', '..\img\ruou-bia\ruou.png', '50000', 'Rượu', '50');
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
    arrProduct.push(product);
    showTable();
    document.getElementById("tableAdd").style.display = 'none';
}
function blockAdd() {
    document.getElementById("tableAdd").style.display = 'block';
}
// show table
function showTable() {
    let tableP = ``;
    for (let i = 0; i < arrProduct.length; i++) {
        tableP += `<tr>
                <td>${arrProduct[i].id}</td>
                <td>${arrProduct[i].name}</td>
                <td><a href="${arrProduct[i].image}"></a></td>zz
                <td>${arrProduct[i].price}</td>
                <td>${arrProduct[i].amount}</td>
                <td><button id="edit" onclick="showEdit(${i})">Edit Product</button></td>
                <td><button id="del" onclick="delProduct(${i})">Delete</button></td>
            </tr>`
    }
    document.getElementById("tableProduct").innerHTML = tableP;
}
//edit product
function showEdit(index) {//tạo ra thanh edit
    let text = `<button onclick="editProduct(${index})">Edit</button>`
    document.getElementById("showEditProduct").innerHTML = text;
    //xuất hiện giá trị cũ trong ô input
    document.getElementById("editId").value = arrProduct[index].id;
    document.getElementById("editName").value = arrProduct[index].name;
    document.getElementById("editPrice").value = arrProduct[index].price;
    document.getElementById("editAmount").value = arrProduct[index].amount;
    document.getElementById("editImage").value = arrProduct[index].image;


    document.getElementById("tableEdit").style.display = 'block';//hiện lên thanh edit
    //

}
function editProduct(index) {
    arrProduct[index].id = document.getElementById("editId").value
    arrProduct[index].name = document.getElementById("editName").value
    arrProduct[index].price = document.getElementById("editPrice").value
    arrProduct[index].amount = document.getElementById("editAmount").value
    arrProduct[index].image = document.getElementById("editImage").value
    showTable();
    document.getElementById("tableEdit").style.display = 'none';
}
// xóa product
function delProduct(index) {
    let x = confirm("bạn đồng ý xóa ");
    if (x == true) {
        arrProduct.splice(index, 1);
    }
    showTable();
}
// function clear(){
//     document.getElementById("editId").value='';
//     document.getElementById("editName").value='';
//     document.getElementById("editPrice").value='';
//     document.getElementById("editAmount").value='';
//     document.getElementById("editImage").value='';
//     console.log('1')
// }

