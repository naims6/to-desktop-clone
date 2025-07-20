// For Menubar Code
const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menulist-mobile");
const overLay = document.getElementById("overlay")
    
let isOpen = false;

function openMenu() {
    isOpen = !isOpen;

    if(isOpen) {
        menuList.classList.remove("hidden");
        overLay.classList.remove("hidden");
        overLay.classList.add('backdrop-blur-sm', 'pointer-events-none');
        setTimeout(() => {
            menuList.classList.add("opacity-100");
            menuList.classList.remove("opacity-0");
        }, 10)
    } else {
        menuList.classList.add("hidden");
        overLay.classList.remove('backdrop-blur-sm', 'pointer-events-none');
        menuList.classList.remove("opacity-100");
        menuList.classList.add("opacity-0");
        setTimeout(() => {
            overLay.classList.add("hidden");
        }, 10)
    }
}
menuBtn.addEventListener("click", openMenu)


// Faq Section

const faqQuestion = document.querySelectorAll(".faq-question");
const faqQuestionIcon = document.querySelectorAll(".faq-question i");
const faqAnswer = document.querySelector(".faq-answer");


faqQuestion.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        if(answer.classList.contains("max-h-0")) {
            answer.classList.remove("max-h-0");
            answer.classList.add("max-h-96", "pb-3");

            faqQuestionIcon.forEach((icon) => {
                icon.classList.add("transform", "rotate-180");
            })
        } else {
            answer.classList.add("max-h-0");
            answer.classList.remove("max-h-96", "pb-3");

            faqQuestionIcon.forEach((icon) => {
                icon.classList.remove("transform", "rotate-180");
            })
        }
        
    }) 
})





