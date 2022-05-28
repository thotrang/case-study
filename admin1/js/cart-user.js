function showCart() {
    document.getElementById("carts").style.display = 'block';
}
function noneCart() {
    document.getElementById("carts").style.display = 'none';
}
let arrCart = [];
function addInCart(index) {
    let arrProduct = localStorage.getItem('cart-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy

    arrCart.push(arrProduct[index]);
    renderCart();
}
// let amountBuy=0;
function renderCart() {
    let tableP = ``;
    for (let i = 0; i < arrCart.length; i++) {
        tableP += `<tr class="aProductCart">
        <td>${arrCart[i].id}</td>
        <td>${arrCart[i].name}</td>
        <td><img src="${arrCart[i].image}"></img></td>
        <td>${arrCart[i].price}</td>
        <td>${1}</td>
        <td><button id="del" onclick="delProduct(${i})">Delete</button></td>`
    } document.getElementById("cartProduct").innerHTML = tableP;

}
function delProduct(index) {

    let x = confirm("bạn đồng ý xóa ");
    if (x == true) {
        arrCart.splice(index, 1);
    }
    renderCart();
}
function pay(){
    let total=0;
    for(let i=0;i<arrCart.length;i++){
        total+=parseInt( arrCart[i].price)
    }document.getElementById("pay").innerHTML=total
}