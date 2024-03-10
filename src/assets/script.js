const typingText = document.getElementById("typingText");
const roleText = document.getElementById("roleText");
const roles = ["Web Developer", "Front-end Developer", "Developer", "Software Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function updateText() {
    const currentRole = roles[roleIndex];
    const displayText = currentRole.substring(0, charIndex);
    typingText.textContent = displayText;


    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    if (charIndex === -1) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        roleText.textContent = roles[roleIndex];
    }

    if (charIndex === currentRole.length + 1) {
        isDeleting = true;
    }
}

setInterval(updateText, 100);

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});