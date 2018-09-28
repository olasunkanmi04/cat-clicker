// const cat = document.querySelectorAll('.cat-image');
// let count = 0;

// cat.forEach((e) => {
//     e.addEventListener('click', () => {
//         count += 1;
//         document.querySelector('.count').innerHTML = count;
//     });
// })


// document.addEventListener('DOMContentLoaded', function () {
//     var imageOneWrapper = document.querySelector('.image-one-wrapper');
//     var imageTwoWrapper = document.querySelector('.image-two-wrapper');
//     var catNameOne = document.createElement('p');
//     var catNameTwo = document.createElement('p');

//     catNameOne.innerHTML = 'Cat One';
//     catNameTwo.innerHTML = 'Cat two';

//     imageOneWrapper.prepend(catNameOne);
//     imageTwoWrapper.prepend(catNameTwo);

// });

let catNamesWrapper = document.querySelector('.cat-names');
let properties = [{
    name: 'Tony',
    images: 'images/tony.jpeg',
    count: 0
}, {
    name: 'Kitty',
    images: 'images/kitty.jpg',
    count: 0
}, {
    name: 'James',
    images: 'images/james.jpg',
    count: 0
}, {
    name: 'Nelly',
    images: 'images/nelly.jpg',
    count: 0
}, {
    name: 'Lilly',
    images: 'images/lilly.jpg',
    count: 0
}];

properties.forEach((property) => {
    let para = document.createElement('p');
    para.innerHTML = property.name;
    catNamesWrapper.appendChild(para);

    para.addEventListener('click', ((propertyCopy) => {
        return () => {
            let catName = document.querySelector('.individual-cat-name');
            let catImage = document.querySelector('.individual-cat-images');
            let catClickCount = document.querySelector('.individual-cat-count');

            catName.textContent = propertyCopy.name;
            catImage.src = propertyCopy.images;
            catClickCount.textContent = propertyCopy.count;

            catImage.addEventListener('click', () => {

                propertyCopy.count++;
                catClickCount.textContent = propertyCopy.count;
            })
        }
    })(property));
})
// names.forEach(() => {

//     let catNames = document.querySelector('.cat-names');

// })