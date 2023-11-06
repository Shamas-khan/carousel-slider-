const images = document.querySelectorAll('.content');

var counter = 0;
images.forEach((ele, index) => {
    ele.style.left = `${index * 100}%`;
})
const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');

prevbtn.addEventListener('click', function () {
    counter--;
    slideimages();
   


});
if (counter == 0) {
    prevbtn.style.visibility = 'hidden';
}
nextbtn.addEventListener('click', function () {
    counter++;
    slideimages();
});
const slideimages = () => {
    images.forEach(
        (ele, index) => {

            if (counter == images.length || counter == images.length - 1) {

                counter = images.length - 1;
                nextbtn.style.visibility = 'hidden';

            }

            else {
                nextbtn.style.visibility = 'visible';
            }
            if (counter < 0 || counter == 0) {
                counter = 0;
                prevbtn.style.visibility = 'hidden';
            }
            else {
                prevbtn.style.visibility = 'visible';
            }
            ele.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
}









