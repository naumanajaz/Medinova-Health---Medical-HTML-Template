function show(){
    let box = document.getElementById('box');
    if (box.style.transform == 'translateX(-350px)') {
        box.style.transform = 'translateX(0)';
    } else {
        box.style.transform = 'translateX(-350px)';
    }
}
function myfunction(){
    let x = document.querySelector('.elms');
    console.log(elms.style.display = 'block')
    elms.style.display = 'block';
}
function myhide(){
    let y = document.querySelector('.elms');
    elms.style.display = 'none';
}