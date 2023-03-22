const images = [
    'images/1.jpg',
    'images/2.jpg', 
    'images/3.jpg',
]

let imgageIndex = 0;
const imgageElement = document.getElementById('carousel-imgage');
setInterval( () => {
    if(imgageIndex === images.length){
        imgageIndex = 0;
    }
    const imgageUrl = images[imgageIndex];
    imgageElement.setAttribute('src', imgageUrl);
    imgageIndex++;
} , 1000)