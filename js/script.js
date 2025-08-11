// hero name animation 
const phrases = ["Samira Hussein", "UX/UI Designer", "Web Developer"];
const typedText = document.getElementById("typed-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetweenPhrases = 1500;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting && charIndex <= currentPhrase.length) {
    typedText.textContent = currentPhrase.substring(0, charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex >= 0) {
    typedText.textContent = currentPhrase.substring(0, charIndex);
    charIndex--;
    setTimeout(type, erasingSpeed);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, delayBetweenPhrases);
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
// end of hero name animation

//navigation bar
function loadHTML(id, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("navbar", "partials/navbar.html");
});
// end of navigation bar

//footer
function loadHTML(id, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("footer", "partials/footer.html");
});
// end of footer

// project 1 

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.process-card');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.classList.add('visible');
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});
// end of project 1
