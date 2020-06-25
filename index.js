window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    const colors = [
        "#303130",
        "#ee2929",
        "#c620e7",
        "#d3cf06",
        "#02094b",
        "#024e5c"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });

    const createBubble = index => {

        //Create bubbles

        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    };
});
