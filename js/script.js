document.addEventListener("DOMContentLoaded", function () {
  setupPage();
});

function setupPage() {
  setupTypingEffect();
  setupNavigationMenu();
  setupCodeSnippetsCarousel();
  setupDropdowns();
  setupFormValidation();
  setupCardFlipping();
}

function setupTypingEffect() {
  const professions = [
    "Career Switcher",
    "Former Medic",
    "Junior Developer",
    "Sports Enthusiast",
    "Coffee Aficionado",
    "Nature Buff"
  ];
  const typeEffectSpan = document.getElementById("type-effect");
  if (typeEffectSpan) {
    const cursorSpan = document.createElement("span");
    cursorSpan.classList.add("cursor");
    cursorSpan.textContent = "|";
    typeEffectSpan.parentNode.insertBefore(
      cursorSpan,
      typeEffectSpan.nextSibling
    );

    let index = 0;
    let professionIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    let pauseTime = 1000;

    (function typeEffect() {
      if (professionIndex === professions.length) {
        professionIndex = 0;
      }

      if (!isDeleting && index <= professions[professionIndex].length) {
        typeEffectSpan.textContent = professions[professionIndex].substring(
          0,
          index++
        );
      }

      if (isDeleting && index >= 0) {
        typeEffectSpan.textContent = professions[professionIndex].substring(
          0,
          index--
        );
      }

      if (!isDeleting && index === professions[professionIndex].length) {
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          setTimeout(typeEffect, 200);
        }, pauseTime);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        professionIndex++;
        setTimeout(typeEffect, 500);
      }

      if (!isPaused) {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
      }
    })();

    setInterval(() => {
      cursorSpan.style.opacity = cursorSpan.style.opacity === "0" ? "1" : "0";
    }, 500);
  }
}

function setupNavigationMenu() {
  const navItems = document.querySelectorAll(
    ".nav-item:not(.nav-left .nav-item)"
  );

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
}

function setupCodeSnippetsCarousel() {
  const container = document.querySelector(".code-snippets-container");

  if (container) {
    const snippets = container.querySelectorAll(".snippet");
    let angle = 0;
    const n = snippets.length;
    const theta = 360 / n;

    function rotateCarousel() {
      angle = (angle + theta) % 360;
      snippets.forEach((snippet, i) => {
        snippet.style.transform = `rotateX(${
          angle + i * theta
        }deg) translateZ(150px)`;

        const scale = Math.cos((((angle + i * theta) % 360) * Math.PI) / 180);
        const opacity = scale < 0 ? 0.5 : 1;
        snippet.style.opacity = opacity;
        snippet.style.transform += ` scale(${opacity})`;
      });
    }

    rotateCarousel();

    setInterval(rotateCarousel, 7000);
  }
}

function setupDropdowns() {
  var dropdowns = document.querySelectorAll(".dropdown-btn");

  dropdowns.forEach(function (btn) {
    var content = btn.nextElementSibling;
    content.style.display = "none";
  });

  dropdowns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var content = this.nextElementSibling;

      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }

      this.classList.toggle("active");
    });
  });
}

function setupFormValidation() {
  var form = document.getElementById("contactForm");

  form.noValidate = true;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputs = form.querySelectorAll("input, textarea");
    var isValid = true;

    function hideErrorMessage(errorElement) {
      setTimeout(function () {
        errorElement.style.display = "none";
      }, 3000);
    }

    inputs.forEach(function (input) {
      var error = input.nextElementSibling;
      if (input.validity.valueMissing) {
        error.style.display = "block";
        hideErrorMessage(error);
        isValid = false;
      } else {
        error.style.display = "none";
      }
    });

    if (isValid) {
      form.submit();
    }
  });
}

function setupCardFlipping() {
  var cards = document.querySelectorAll(".card");

  function toggleFlip(card) {
    card.classList.toggle("flipped");
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      toggleFlip(card);
    });

    card.addEventListener(
      "touchstart",
      function (e) {
        e.preventDefault();
        toggleFlip(card);
      },
      { passive: false }
    );
  });
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", (event) => {
  const hamburger = document.querySelector(".hamburger");
  const navRight = document.querySelector(".nav-right");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navRight.classList.toggle("is-active");
  });
});

document
  .getElementById("toggleCoursesTable")
  .addEventListener("click", function () {
    var coursesTable = document.getElementById("courses-table");
    if (coursesTable.style.display === "none") {
      coursesTable.style.display = "block";
      this.textContent = "Hide Courses";
    } else {
      coursesTable.style.display = "none";
      this.textContent = "View Courses";
    }
  });
