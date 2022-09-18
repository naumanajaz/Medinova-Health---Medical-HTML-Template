function show() {
    let box = document.getElementById('box');
    if (box.style.transform == 'translateX(-350px)') {
        box.style.transform = 'translateX(0)';
    } else {
        box.style.transform = 'translateX(-350px)';
    }
}
function myfunction() {
    let elms = document.getElementById('elms');
    elms.style.display = 'block';
}
function hide() {
    let elms = document.getElementById('elms');
    elms.style.display = 'none';
}
function yfunction() {
    let elms2 = document.getElementById('elms2');
    elms2.style.display = 'block';
}
function yhide() {
    let elms2 = document.getElementById('elms2');
    elms2.style.display = 'none';
}
function xfunction() {
    let x = document.getElementById('elms3');
    elms3.style.display = 'block';
}
function xhide() {
    let x = document.getElementById('elms3');
    elms3.style.display = 'none';
}
function wfunction() {
    let w = document.getElementById('elms4');
    elms4.style.display = 'block';
}
function whide() {
    let w = document.getElementById('elms4');
    elms4.style.display = 'none';
}
function showdiv() {
    let w = document.getElementById('cartdiv');
    cartdiv.style.display = 'block';
}
function hidediv() {
    let w = document.getElementById('cartdiv');
    cartdiv.style.display = 'none';
}
function increament() {
    let num = parseInt(document.querySelector('#num').value);
    num++;
    document.querySelector('#num').value = num;
}
function decreament() {
    let num = parseInt(document.querySelector('#num').value);
    num--;
    if (num < 0) {
        return 0;
    }
    document.querySelector('#num').value = num;
}
function replace1() {
    let img = document.querySelector('#img1')
    img.setAttribute('src', './assets/tabs-img/img-cart-3.jpg')
}
function place1() {
    let img = document.querySelector('#img1')
    img.setAttribute('src', './assets/tabs-img/img-cart-2.jpg')
}
function replace2() {
    let img = document.querySelector('#img2')
    img.setAttribute('src', './assets/tabs-img/img-cart-3.jpg')
}
function place2() {
    let img = document.querySelector('#img2')
    img.setAttribute('src', './assets/tabs-img/img-cart-2.jpg')
}
function replace3() {
    let img = document.querySelector('#img3')
    img.setAttribute('src', './assets/tabs-img/img-cart-3.jpg')
}
function place3() {
    let img = document.querySelector('#img3')
    img.setAttribute('src', './assets/tabs-img/img-cart-2.jpg')
}
function replace4() {
    let img = document.querySelector('#img4')
    img.setAttribute('src', './assets/tabs-img/img-cart-3.jpg')
}
function place4() {
    let img = document.querySelector('#img4')
    img.setAttribute('src', './assets/tabs-img/img-cart-2.jpg')
}