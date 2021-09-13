const completeCarouselWidth = document.querySelectorAll(".carouselDiv")[0].scrollWidth
const rightButton = document.querySelectorAll(".right-button")
const leftButton = document.querySelectorAll(".left-button")
const firstCarouselProduct = document.querySelectorAll(".firstCarouselProduct")
const secondCarouselProduct = document.querySelectorAll(".secondCarouselProduct")
const carouselFadeLeft = document.querySelectorAll(".carouselFade-Left")
const carouselFadeRight = document.querySelectorAll(".carouselFade-Right")
const thirdSectionButton = document.querySelectorAll(".thirdSection__button")[0]
const buttonSpan = document.querySelectorAll(".thirdSection-button-span")[0]

let clickTimesFirst = 0
let clickTimesSecond = 0
carouselFadeLeft[0].style.display = "none"
carouselFadeRight[1].style.display = "none"

const moveItemsLeftFirst = () => {
    clickTimesFirst++
    if(clickTimesFirst > 0) {
        leftButton[0].disabled = false;
        carouselFadeLeft[0].style.display = "block"
    } 

    if(window.matchMedia("(max-width: 959px)").matches) {
        if(clickTimesFirst >= 6) {
            carouselFadeRight[0].style.display = "none";
            rightButton[0].disabled = true;
        }
    }

    if(window.matchMedia("(min-width: 960px)").matches && window.matchMedia("(max-width: 1439px)").matches) {
        if(clickTimesFirst >= 5) {
            carouselFadeRight[0].style.display = "none";
            rightButton[0].disabled = true;
        }
    }

    if(window.matchMedia("(min-width: 1440px)").matches) {
        if(clickTimesFirst >= 4) {
            carouselFadeRight[0].style.display = "none";
            rightButton[0].disabled = true;
        }
    }

    firstCarouselProduct.forEach(el => {
        return el.style.transform = `translate(${-clickTimesFirst * (firstCarouselProduct[0].offsetWidth)}px)`
    })
}

const moveItemsRightFirst = () => {
    clickTimesFirst--
    if(clickTimesFirst === 0) {
        leftButton[0].disabled = true
        carouselFadeLeft[0].style.display = "none"
    }

    if(window.matchMedia("(max-width: 959px)").matches) {
        if(clickTimesFirst < 6) {
            carouselFadeRight[0].style.display = "block";
            rightButton[0].disabled = false;
        }
    }

    if(window.matchMedia("(min-width: 960px)").matches && window.matchMedia("(max-width: 1439px)").matches) {
        if(clickTimesFirst < 5) {
            carouselFadeRight[0].style.display = "block";
            rightButton[0].disabled = false;
        }
    }

    if(window.matchMedia("(min-width: 1440px)").matches) {
        if(clickTimesFirst < 4) {
            carouselFadeRight[0].style.display = "block";
            rightButton[0].disabled = false;
        }
    }

    firstCarouselProduct.forEach(el => {
        return el.style.transform = `translate(${-clickTimesFirst * (firstCarouselProduct[0].offsetWidth)}px)`
    })
}

const moveItemsLeftSecond = () => {
    clickTimesSecond++
    if(clickTimesSecond > 0) {
        rightButton[1].disabled = false;
        carouselFadeRight[1].style.display = "block"
    } 

    if(window.matchMedia("(max-width: 959px)").matches) {
        if(clickTimesSecond >= 6) {
            carouselFadeLeft[1].style.display = "none";
            leftButton[1].disabled = true;
        }
    }

    if(window.matchMedia("(min-width: 960px)").matches && window.matchMedia("(max-width: 1439px)").matches) {
        if(clickTimesSecond >= 5) {
            carouselFadeLeft[1].style.display = "none";
            leftButton[1].disabled = true;
        }
    }

    if(window.matchMedia("(min-width: 1440px)").matches) {
        if(clickTimesSecond >= 4) {
            carouselFadeLeft[1].style.display = "none";
            leftButton[1].disabled = true;
        }
    }

    secondCarouselProduct.forEach(el => {
        return el.style.transform = `translate(${clickTimesSecond * (firstCarouselProduct[0].offsetWidth)}px)`
    })
}

const moveItemsRightSecond = () => {
    clickTimesSecond--
    if(clickTimesSecond === 0) {
        rightButton[1].disabled = true
        carouselFadeRight[1].style.display = "none"
    }

    if(window.matchMedia("(max-width: 959px)").matches) {
        if(clickTimesSecond < 6) {
            carouselFadeLeft[1].style.display = "block";
            leftButton[1].disabled = false;
        }
    }

    if(window.matchMedia("(min-width: 960px)").matches && window.matchMedia("(max-width: 1439px)").matches) {
        if(clickTimesSecond < 5) {
            carouselFadeLeft[1].style.display = "block";
            leftButton[1].disabled = false;
        }
    }

    if(window.matchMedia("(min-width: 1440px)").matches) {
        if(clickTimesSecond < 4) {
            carouselFadeLeft[1].style.display = "block";
            leftButton[1].disabled = false;
        }
    }

    secondCarouselProduct.forEach(el => {
        return el.style.transform = `translate(${clickTimesSecond * (firstCarouselProduct[0].offsetWidth)}px)`
    })
}

rightButton[0].addEventListener("click", moveItemsLeftFirst)
leftButton[0].addEventListener("click", moveItemsRightFirst)
leftButton[1].addEventListener("click", moveItemsLeftSecond)
rightButton[1].addEventListener("click", moveItemsRightSecond)
thirdSectionButton.addEventListener("click", () => {
    buttonSpan.classList.add("loader")
})
