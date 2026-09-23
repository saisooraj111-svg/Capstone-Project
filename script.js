const images= ["pic1.jpg", "pic2.jpg", "pic3.jpg"];
let current = 0;

const sliderimg = document.getElementById("slider-img");

function showSlide(index)
{
    sliderimg.src = images[index];
}
function nextSlide()
{
    current = (current+1) % images.length;
    showSlide(current);
}
function prevSlide()
{
    current = (current-1 + images.length) % images.length;
    showSlide(current);
}
setInterval(nextSlide, 3000);