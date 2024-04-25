const carousel = document.getElementById("carouselControl");
const items = carousel.querySelectorAll(".carousel-item");
let currentItem = 0;
let isActive = true;

let interval = setIntervalFromCarousel();

function setIntervalFromCarousel() {
    return setInterval(() => {
        if (isActive) {
            hideItem("to-left");
            setCurrentItem(currentItem + 1);
            showItem("from-right");
        }
    }, 5000);
}

function setCurrentItem(index) {
    currentItem = (index + items.length) % items.length;
}

function hideItem(direction) {
    isActive = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener("animationend", function () {
        this.classList.remove("active", direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add("next", direction);
    items[currentItem].addEventListener("animationend", function () {
        this.classList.remove("next", direction);
        this.classList.add("active");
        isActive = true;
    });
}

document.getElementById("carouselPrev").addEventListener("click", function (e) {
    e.preventDefault();
    if (isActive) {
        hideItem("to-right");
        setCurrentItem(currentItem - 1);
        showItem("from-left");
        clearInterval(interval);
        interval = setIntervalFromCarousel();
    }
});

document.getElementById("carouselNext").addEventListener("click", function (e) {
    e.preventDefault();
    if (isActive) {
        hideItem("to-left");
        setCurrentItem(currentItem + 1);
        showItem("from-right");
        clearInterval(interval);
        interval = setIntervalFromCarousel();
    }
});
