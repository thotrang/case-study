function showSort() {
    document.getElementById("tableSort").style.display = 'block'
}
function sortId() {
    let x = document.getElementById("sortId").value;
    if (x == 'big') {
        arrProduct.sort(function (a, b) {
            return b.id - a.id
        })
    } else {
        arrProduct.sort(function (a, b) {
            return a.id - b.id
        })
    }showTable();
    document.getElementById("tableSort").style.display = 'none'
}
function sortPrice() {
    let x = document.getElementById("sortPrice").value;
    if (x == 'big') {
        arrProduct.sort(function (a, b) {
            return b.id - a.id
        })
    } else {
        arrProduct.sort(function (a, b) {
            return a.id - b.id
        })
    }showTable();
    document.getElementById("tableSort").style.display = 'none'
}
function sortAmount() {
    let x = document.getElementById("sortAmount").value;
    if (x == 'big') {
        arrProduct.sort(function (a, b) {
            return b.id - a.id
        })
    } else {
        arrProduct.sort(function (a, b) {
            return a.id - b.id
        })
    }showTable();
    document.getElementById("tableSort").style.display = 'none'
}
