function search() {
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : []; //lấy dữ liệu về máy
    let a = document.getElementById("textSearch").value;
    let a1=a.toUpperCase();

    let tableP = ``;
    for (let i = 0; i < arrProduct.length; i++) {
        let b = arrProduct[i].name;
        let b1=b.toUpperCase();
        let result=b1.includes(a1);
        if (result) {
            tableP += `<div class="aProduct">
            <img src="${arrProduct[i].image}" class="image" ></img>
            <div class="text">
            <h3 class="name">${arrProduct[i].name}</h3>
            <p class="amount">Số Lượng ${arrProduct[i].amount}</p>
            <p class="price">Giá : ${arrProduct[i].price} đồng</p>
            <button class="buy" onclick="addInCart(${i})">Thêm Vào Giỏ</button>
            </div>    
        </div>`
        }
    } document.getElementById("tableProduct").innerHTML = tableP;
}