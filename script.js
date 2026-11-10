

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function() {

    const message = document.getElementById("welcomeMessage");

    message.textContent =
        "Welcome! Thank you for exploring our website.";

});

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function() {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});




const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    const darkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = darkMode ? "☀️" : "🌙";

});




const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all the fields.";

        formMessage.style.color = "red";

        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;

    }

    formMessage.textContent =
        "Thank you, " + name + "! Your form was validated successfully.";

    formMessage.style.color = "green";

    contactForm.reset();

});



const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});




document.getElementById("year").textContent =
    new Date().getFullYear();