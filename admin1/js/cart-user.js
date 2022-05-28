function showCart(){
    document.getElementById("carts").style.display='block';
}
function noneCart(){
    document.getElementById("carts").style.display='none';
}
let arrCart=[];
function addInCart(index){
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy
    document.getElementById("hungId").value=arrProduct[index].id;
    let x=document.getElementById("hungId").value;
    arrCart.push(arrProduct[x]);
    let tableP=``;
    for(let i=0;i<arrCart.length;i++){
        tableP+=`<tr class="aProduct">
        <td>${arrCart[i].id}</td>
        <td>${arrCart[i].name}</td>
        <td><img src="${arrCart[i].image}"></img></td>
        <td>${arrCart[i].price}</td>
        <td>${arrCart[i].amount}</td>
        <td><button id="del" onclick="delProduct(${i})">Delete</button></td>`
    }document.getElementById("cartProduct").innerHTML=tableP;
    document.getElementById("carts").style.display='block';

}
function delProduct(index) {
    let x = confirm("bạn đồng ý xóa ");
    if (x == true) {
        addInCart.splice(index, 1);
    }
    localStorage.setItem('list-product', JSON.stringify(addInCart));
    showTable();
}