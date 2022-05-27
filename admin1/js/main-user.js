
function showTable() {
    let arrProduct = localStorage.getItem('list-product') ? JSON.parse(localStorage.getItem('list-product')) : [];        //lấy dữ liệu về máy
    let tableP = ``;
    for (let i = 0; i < arrProduct.length; i++) {
        tableP += `<div class="aProduct">
                <img src="${arrProduct[i].image}" class="image"></img>
                <div class="text">
                <h3 class="name">${arrProduct[i].name}</h3>
                <p class="amount">Số Lượng ${arrProduct[i].amount}</p>
                <p class="price">Giá : ${arrProduct[i].price} đồng</p>
                <button class="buy">Mua hàng</button>
                </div>    
            </div>`
    }   
    document.getElementById("tableProduct").innerHTML = tableP;
}
showTable();
