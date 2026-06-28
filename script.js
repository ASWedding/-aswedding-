
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").classList.add("hide");
    }, 1200);
});

const content = document.getElementById("content");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

function openInvitation() {

    content.classList.add("show");

    content.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {});

    startCountdown();

}

musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();
        musicBtn.innerHTML = "🔇";

    }

});

const targetDate = new Date("July 26, 2026 20:00:00").getTime();

let started = false;

function startCountdown() {

    if (started) return;

    started = true;

    setInterval(function () {

        const now = new Date().getTime();

        const distance = targetDate - now;

        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");

    }, 1000);

}

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const gallery = document.querySelectorAll(".gallery img");

gallery.forEach(function (img) {

    img.addEventListener("click", function () {

        window.open(img.src, "_blank");

    });

});
