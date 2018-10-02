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


var model = {
    currentCat: null,
    properties: [{
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
    }]
};

var octopus = {
    init: function () {
        // sets current cat to the first one on the list
        model.currentCat = model.properties[0];

        // tells the views to initialize
        catListView.init();
        catView.init();
    },
    getCurrentCat: function () {
        return model.currentCat;
    },
    getCats: function () {
        return model.properties;
    },
    // set the currently selected cat to the object passedin
    setCurrentCat: function (property) {
        model.currentCat = property;
    },

    // increments the counter for the currently selected cat
    incrementCounter: function () {
        model.currentCat.count++;
        catView.render();
    }
};

var catView = {
    init: function () {
        this.catName = document.querySelector('.individual-cat-name');
        this.catImage = document.querySelector('.individual-cat-images');
        this.catClickCount = document.querySelector('.individual-cat-count');

        //   on click, increment the current cat's counter
        this.catImage.addEventListener('click', function () {
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function () {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.catClickCount.textContent = currentCat.count;
        this.catName.textContent = currentCat.name;
        this.catImage.src = currentCat.images;
    }
};

var catListView = {
    init: function () {
        // store the DOM element for easy access later
        this.catNamesWrapper = document.querySelector('.cat-names');

        this.render();
    },

    render: function () {
        // gets the cats we would be rendering from the octopus
        var properties = octopus.getCats();

        // empty the cat list
        this.catNamesWrapper.innerHTML = '';

        properties.forEach((property) => {

            // makes a new cat list and set its text
            var para = document.createElement('p');
            para.innerHTML = property.name;


            para.addEventListener('click', ((propertyCopy) => {
                return function () {
                    octopus.setCurrentCat(propertyCopy);
                    catView.render();
                };
            })(property));

            this.catNamesWrapper.appendChild(para);
        });
    }
};

octopus.init();


// properties.forEach((property) => {
//     let para = document.createElement('p');
//     para.innerHTML = property.name;
//     catNamesWrapper.appendChild(para);

//     para.addEventListener('click', ((propertyCopy) => {
//         return () => {
//             let catName = document.querySelector('.individual-cat-name');
//             let catImage = document.querySelector('.individual-cat-images');
//             let catClickCount = document.querySelector('.individual-cat-count');

//             catName.textContent = propertyCopy.name;
//             catImage.src = propertyCopy.images;
//             catClickCount.textContent = propertyCopy.count;

//             catImage.addEventListener('click', () => {

//                 propertyCopy.count++;
//                 catClickCount.textContent = propertyCopy.count;
//             })
//         }
//     })(property));
// })
// names.forEach(() => {

//     let catNames = document.querySelector('.cat-names');

// })