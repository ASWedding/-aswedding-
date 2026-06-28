window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1200);
});

const mainContent = document.getElementById("mainContent");
const openBtn = document.getElementById("openBtn");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let countdownStarted = false;

openBtn.addEventListener("click", () => {

    mainContent.classList.add("show");

    mainContent.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {});

    if (!countdownStarted) {
        countdownStarted = true;
        startCountdown();
    }

});

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵";

    }

});

function startCountdown() {

    const weddingDate = new Date("2026-07-26T20:00:00").getTime();

    setInterval(() => {

        const now = new Date().getTime();

        const distance = weddingDate - now;

        if (distance <= 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;

        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

    }, 1000);

}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});
alert("Script çalıştı");
