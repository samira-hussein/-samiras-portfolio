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


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".research-section");
  if (container) {
    container.style.border = "none";
    container.style.boxShadow = "none";
  }
});

// for project 3 - back to the top arrow icon 
document.getElementById('back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//icon button toggle the back to the top arrow icon 
const backToTop = document.getElementById('back-to-top');
const footer = document.getElementById('footer');

function checkOverlap() {
  const footerRect = footer.getBoundingClientRect();
  const buttonRect = backToTop.getBoundingClientRect();

  // If button's bottom edge is lower than footer's top edge (meaning overlap or touching)
  if (buttonRect.bottom > footerRect.top) {
    backToTop.classList.add('footer-visible');
  } else {
    backToTop.classList.remove('footer-visible');
  }
}

// Check overlap on scroll and resize
window.addEventListener('scroll', checkOverlap);
window.addEventListener('resize', checkOverlap);

// Initial check
checkOverlap();

