function showSort() {
    document.getElementById("tableSort").style.display = 'block'
}
function sortId() {
    let arrProduct =JSON.parse(localStorage.getItem('list-product'));//lấy dữ liệu về máy

    let x = document.getElementById("sortId").value;
    if (x == 'big') {
        arrProduct.sort(function (a, b) {
            return b.id - a.id
        })
    } else {
        arrProduct.sort(function (a, b) {
            return a.id - b.id
        })
    }localStorage.setItem('list-product', JSON.stringify(arrProduct));//đưa mảng sản phẩm lên local storage
    showTable();
    document.getElementById("tableSort").style.display = 'none'
}
function sortPrice() {
    let arrProduct =JSON.parse(localStorage.getItem('list-product'));//lấy dữ liệu về máy

    let x = document.getElementById("sortPrice").value;
    if (x == 'big') {
        arrProduct.sort(function (a, b) {
            return b.price - a.price
        })
    } else {
        arrProduct.sort(function (a, b) {
            return a.price - b.price
        })
    }localStorage.setItem('list-product', JSON.stringify(arrProduct));    //đưa mảng sản phẩm lên local storage
    showTable();
    document.getElementById("tableSort").style.display = 'none'
}
function sortAmount() {
    let arrProduct =JSON.parse(localStorage.getItem('list-product'));//lấy dữ liệu về máy

    let x = document.getElementById("sortAmount").value;
    if (x == 'big') {
        arrProduct.sort(function (a, b) {
            return b.amount - a.amount
        })
    } else {
        arrProduct.sort(function (a, b) {
            return a.amount - b.amount
        })
    }localStorage.setItem('list-product', JSON.stringify(arrProduct));    //đưa mảng sản phẩm lên local storage
    showTable();
    document.getElementById("tableSort").style.display = 'none'
}
