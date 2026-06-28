 window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").classList.add("hide");
    }, 1200);
});

function openInvite() {
    document.getElementById("invitation").classList.add("show");

    document.getElementById("invitation").scrollIntoView({
        behavior: "smooth"
    });

    startCountdown();
}

let countdownStarted = false;

function startCountdown() {

    if (countdownStarted) return;
    countdownStarted = true;

    const weddingDate = new Date("August 8, 2026 19:00:00").getTime();

    setInterval(() => {

        const now = new Date().getTime();

        const distance = weddingDate - now;

        if (distance <= 0) {

            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";

            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        document.getElementById("days").innerHTML = String(days).padStart(2, "0");
        document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");

    }, 1000);
}
