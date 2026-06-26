// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


// ===============================
// MOBILE MENU
// ===============================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("open");
    });
}


// ===============================
// CLOSE MOBILE MENU WHEN LINK IS CLICKED
// ===============================

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuIcon?.classList.remove("bx-x");
        navbar?.classList.remove("open");
    });
});


// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTopBtn = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".home-content, .img-box, .about-img, .about-content, .project-card, .service-card, .timeline-item, .education-card, .learning-box"
);

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show-reveal");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// CONTACT FORM MESSAGE
// ===============================

const contactForm = document.querySelector(".contact-form form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", () => {
        formMessage.textContent = "Thanks! Your message has been sent.";
        formMessage.classList.add("show-message");
    });
}