const professions = [
  "Doctor",
  "Web Developer",
  "Coffee Lover",
  "Sports Enthusiast",
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
  let pauseTime = 1000; // Time to pause after typing before deleting

  (function typeEffect() {
    if (professionIndex === professions.length) {
      professionIndex = 0; // Reset to start after the last word
    }

    if (!isDeleting && index <= professions[professionIndex].length) {
      // Typing forward
      typeEffectSpan.textContent = professions[professionIndex].substring(
        0,
        index++
      );
    }

    if (isDeleting && index >= 0) {
      // Deleting
      typeEffectSpan.textContent = professions[professionIndex].substring(
        0,
        index--
      );
    }

    if (!isDeleting && index === professions[professionIndex].length) {
      // Word is fully typed - pause before deleting
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        isDeleting = true;
        setTimeout(typeEffect, 200); // Start deleting shortly after pause
      }, pauseTime);
    } else if (isDeleting && index === 0) {
      // Word is fully deleted - move to the next word
      isDeleting = false;
      professionIndex++;
      setTimeout(typeEffect, 500); // Time before typing next word
    }

    if (!isPaused) {
      setTimeout(typeEffect, isDeleting ? 100 : 200); // Typing speed
    }
  })();

  // Blinking cursor effect
  setInterval(() => {
    cursorSpan.style.opacity = cursorSpan.style.opacity === "0" ? "1" : "0";
  }, 500); // Cursor blink speed
}

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(
    ".nav-item:not(.nav-left .nav-item)"
  ); // Select nav-items except the one in nav-left

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all nav items
      navItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to clicked item
      this.classList.add("active");
    });
  });
});

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
      // Adjust translateZ based on your layout

      // Set opacity and scale based on the angle
      const scale = Math.cos((((angle + i * theta) % 360) * Math.PI) / 180);
      const opacity = scale < 0 ? 0.5 : 1;
      snippet.style.opacity = opacity;
      snippet.style.transform += ` scale(${opacity})`;
    });
  }

  // Initialize the first rotation
  rotateCarousel();

  // Rotate the carousel every 3 seconds
  setInterval(rotateCarousel, 10000);
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all the dropdown buttons
  var dropdowns = document.querySelectorAll(".dropdown-btn");

  // Initially set dropdown content display to none
  dropdowns.forEach(function (btn) {
    var content = btn.nextElementSibling;
    content.style.display = "none"; // Explicitly set display to none on page load
  });

  // Add click event to dropdown buttons
  dropdowns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Get the next element, which is the dropdown content
      var content = this.nextElementSibling;
      // Toggle visibility
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
      // Toggle the active class to change the arrow direction
      this.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");

  form.noValidate = true; // Disables browser's default validation

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting for now
    var inputs = form.querySelectorAll("input, textarea");
    var isValid = true;

    // Function to hide error message
    function hideErrorMessage(errorElement) {
      setTimeout(function () {
        errorElement.style.display = "none";
      }, 3000); // Hide after 3 seconds (3000 milliseconds)
    }

    inputs.forEach(function (input) {
      var error = input.nextElementSibling; // Assumes error message is immediately after input
      if (input.validity.valueMissing) {
        error.style.display = "block";
        hideErrorMessage(error); // Call the function to hide the message after 3 seconds
        isValid = false;
      } else {
        error.style.display = "none";
      }
    });

    if (isValid) {
      // If the form is valid, you might want to actually submit the form
      // form.submit();
    }
  });
});

// ######################ABOUT ME###################

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



