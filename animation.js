
const cards2 = document.querySelectorAll(".card-2");

// Function to add animation to each card
const card2Animation = () => {
    cards2.forEach((card) => {
        // Add hover effect for the current card
        card.addEventListener("mouseenter", () => {
            gsap.to(card.querySelector(".play_icon"), {
                y: -10,
                duration: 0.3,
                opacity: 1,
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card.querySelector(".play_icon"), {
                y: 0,
                duration: 0.3,
                opacity: 0,
            });
        });
    });
};

// Initialize the animation
card2Animation();

 // Select all cards
 const cards = document.querySelectorAll(".card");

 // Function to add animation to each card
 const cardAnimation = () => {
     cards.forEach((card) => {
         // Add hover effect for the current card
         card.addEventListener("mouseenter", () => {
             gsap.to(card.querySelector(".play_icon"), {
                 y: -10,
                 duration: 0.3,
                 opacity: 1,
             });
         });

         card.addEventListener("mouseleave", () => {
             gsap.to(card.querySelector(".play_icon"), {
                 y: 0,
                 duration: 0.3,
                 opacity: 0,
             });
         });
     });
 };

 // Initialize the animation
 cardAnimation();