// let scrollPosition = 0;

// const cardsPerSlide = 2;
// const singleslideWidth = 500;
// const slideWidth = singleslideWidth * cardsPerSlide;

// const sliderCard = document.getElementById('sliderCard');

// function slide(direction){
//     const maxScroll = sliderCard.scrollWidth - sliderCard.clientWidth;
//     scrollPosition += direction * slideWidth;
//     if (scrollPosition < 0) scrollPosition = 0;
//     if (scrollPosition > maxScroll) scrollPosition = maxScroll;
//     sliderCard.style.transform = `translateX(-${scrollPosition}px)`;

// }

let scrollPosition = 0;

const sliderCard = document.getElementById('sliderCard');
const cardsContainer = document.querySelector('.main_cards_container');
const card = document.querySelector('.card1'); // Select one card to calculate width

// Dynamically calculate the width of one card
const singleCardWidth = card.offsetWidth + 40; 

// Number of cards per slide for smoother scrolling
const cardsPerSlide = 1; // Scroll one card at a time for slower movement

// Total width to slide (single card width)
const slideWidth = singleCardWidth * cardsPerSlide;

function slide(direction) {
    // Maximum scroll width considering the container and total card width
    const maxScroll = singleCardWidth * sliderCard.children.length - cardsContainer.offsetWidth;

    // Update scroll position
    scrollPosition += direction * slideWidth;

    // Ensure the last card is fully visible
    if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }

    // Clamp scrollPosition within valid range
    scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));

    // Apply translation
    sliderCard.style.transform = `translateX(-${scrollPosition}px)`;
}

window.addEventListener('resize', () => {
    const singleCardWidth = card.offsetWidth;
    const cardsPerSlide = Math.floor(cardsContainer.offsetWidth / singleCardWidth);
});
const card1 = document.getElementById("card1");
const popup = document.getElementById("card1_popup");
card1.addEventListener("click", ()=>{
    popup.style.display = "flex";
    popup.style.transition = "0.3s ease-in-out"
})
const close = document.getElementById("close");
close.addEventListener("click", ()=>{
    popup.style.display = "none";
})