const gridPrint = (images, column) => {
    const grid = document.getElementById('image-grid');
    const image = document.createElement('img');
    image.setAttribute('src', images.urls.thumb);

    const contentImage = document.getElementById(`column${column}`);
    contentImage.appendChild(image);
    grid.appendChild(contentImage);
};

fetch('https://api.unsplash.com/photos/?client_id=H0MzUeGnAILZ2FEfWnM4gVROEQJSVPpMAmzTYvCcqGg')
    .then((response) => response.json())
    .then(function(data) {
        let column = 1;
        data.forEach((images, index) => {
            if (index === 9) column = 2;
            gridPrint(images, column);

            (index + 1) % 3 === 0 && column++;
        });
    })
    .catch((err) => console.warn('Something went wrong.', err));