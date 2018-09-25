const cat = document.querySelector('.cat-image');
let count = 0;

cat.addEventListener('click', function () {
    count += 1;
    document.querySelector('.count').innerHTML = count;
});