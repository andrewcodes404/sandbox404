

const posterWrapper = document.createElement('div');
posterWrapper.classList = 'poster-wrapper'

for (let index = 0; index < 8; index++) {
    const myKey = index + 1
    const poster = document.createElement('div');
    poster.classList = (`poster hide-poster`)
    const posterImage = document.createElement('img');
    posterImage.src = `https://picsum.photos/500?random=${index + 1}`;
    posterImage.alt = 'Nice photo';
    poster.appendChild(posterImage)
    posterWrapper.appendChild(poster)
}

const section = document.querySelector('.section-poster')
section.appendChild(posterWrapper)

const firstPoster = document.querySelector('.poster-wrapper').firstElementChild
firstPoster.classList.add('show-poster');

//grab all the posters
const posters = document.querySelectorAll('.poster')

// set initial poster
let currentPoster = 0;
const posterLength = (posters.length - 1)


function nextPoster() {
    // current poster becomes hidden
    posters[currentPoster].classList.remove('show-poster')
    posters[currentPoster].classList.add('hide-poster')

    // next poster becomes currentPoster
    currentPoster = (currentPoster + 1)

    // show updated current poster
    posters[currentPoster].classList.add('show-poster')
}


function prevPoster() {
    // current poster becomes hidden
    posters[currentPoster].classList.remove('show-poster')
    posters[currentPoster].classList.add('hide-poster')
    // prev poster becomes currentPoster
    currentPoster = (currentPoster - 1)
    // show updated current poster
    posters[currentPoster].classList.add('show-poster')
}



const btnPrev = document.querySelector('.button-prev')
const btnNext = document.querySelector('.button-next')

if (currentPoster === 0) {
    btnPrev.classList.add('button-hide')
}


function checkPoster() {

    console.log('currentPoster:', currentPoster);
    if (currentPoster === 0) {

        btnPrev.classList.add('button-hide')
    } else if (currentPoster === posterLength) {
        btnNext.classList.add('button-hide')
    } else {

        btnPrev.classList.remove('button-hide')
        btnNext.classList.remove('button-hide')
    }

}




btnPrev.addEventListener('click', function () {
    prevPoster()
    checkPoster()


})

btnNext.addEventListener('click', function () {
    nextPoster()
    checkPoster()

})








