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
        adminView.init();
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
        catView.render();
        adminView.render();
    },

    // increments the counter for the currently selected cat
    incrementCounter: function () {
        model.currentCat.count++;
        catView.render();
        adminView.render();
    },
    updateModel: function (newName, newImage, newCount) {
        model.currentCat.name = newName;
        model.currentCat.images = newImage;
        model.currentCat.count = newCount;
        adminView.render();
        catView.render();
        catListView.render();
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

                };
            })(property));

            this.catNamesWrapper.appendChild(para);
        });
    }
};

// Admin view
let adminView = {
    init: function () {
        this.newName = document.querySelector('.new-name');
        this.newImage = document.querySelector('.new-image');
        this.newCount = document.querySelector('.new-count');
        this.adminBtn = document.querySelector('.admin-btn');
        this.cancelUpdate = document.querySelector('.cancel-update');
        this.saveUpdate = document.querySelector('.save-update');
        this.adminForm = document.querySelector('.admin-form');

        this.render();
    },
    render: function () {
        var currentCat = octopus.getCurrentCat();
        this.newName.value = currentCat.name;
        this.newImage.value = currentCat.images;
        this.newCount.value = currentCat.count;

        var newImage = this.newImage;
        var newName = this.newName;
        var newCount = this.newCount;

        this.saveUpdate.addEventListener('click', function () {
            octopus.updateModel(newName.value, newImage.value, newCount.value);
        });
    }
}

octopus.init();