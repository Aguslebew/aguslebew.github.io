// ================================
// PORTFOLIO JAVASCRIPT
// ================================


// ================================
// 1. NAVBAR MOBILE
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


// ================================
// 2. TUTUP MENU SETELAH KLIK
// ================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


// ================================
// 3. NAVBAR SAAT SCROLL
// ================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


// ================================
// 4. ANIMASI SECTION
// ================================

const sections = document.querySelectorAll("section");

if (sections.length > 0) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    sections.forEach(function (section) {

        observer.observe(section);

    });

}


// ================================
// 5. DOWNLOAD CV