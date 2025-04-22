const images = [
    { src: 'EasyImages/gorilla.jpg'},
    { src: 'EasyImages/sunrise.jpeg'},
    { src: 'EasyImages/cloudless_sunset.jpg'}
];

function loadRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    document.getElementById('question-image').src = selectedImage.src;
    document.getElementById('image-context').textContent = selectedImage.context;
}
