window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1200);

});

const site = document.getElementById("site");
const openInvitation = document.getElementById("openInvitation");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();
        musicButton.innerHTML = "🎵";
        musicPlaying = false;

    } else {

        music.play().catch(() => {});
        musicButton.innerHTML = "⏸";
        musicPlaying = true;

    }

});

openInvitation.addEventListener("click", () => {

    site.classList.add("show");

    site.scrollIntoView({
        behavior: "smooth"
    });

    if (!musicPlaying) {

        music.play().catch(() => {});
        musicButton.innerHTML = "⏸";
        musicPlaying = true;

    }

});

const weddingDate = new Date("2026-07-26T20:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) return;

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

document.getElementById("rsvpForm").addEventListener("submit", e => {

    e.preventDefault();

    alert("Katılım bilgileriniz kaydedildi. Teşekkür ederiz. ❤️");

});

document.getElementById("messageForm").addEventListener("submit", e => {

    e.preventDefault();

    alert("Güzel dilekleriniz için teşekkür ederiz. ❤️");

});

document.getElementById("uploadButton").addEventListener("click", e => {

    e.preventDefault();

    alert("Fotoğraf yükleme alanı, Google Form bağlantısı eklendiğinde aktif olacaktır.");

});
