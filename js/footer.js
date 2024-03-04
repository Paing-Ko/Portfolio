document.addEventListener("DOMContentLoaded", function () {
  var footerHTML = `
     <footer>
        <div class="social-media">
            <span>find me in:</span>
            <!-- Social media links -->
            <a target="_blank" href="https://www.freecodecamp.org/Paing_Ko" class="footer-item">
                <i class="fab fa-free-code-camp"></i>
            </a>

            <a target="_blank" href="https://www.instagram.com/doc2dev/" class="footer-item">
                <i class="fa-brands fa-instagram"></i>
            </a>

            <a target="_blank" href="https://twitter.com/PaingPhyoKo" class="footer-item">
                <i class="fa-brands fa-x-twitter"></i>
            </a>

            <a target="_blank" href="https://www.youtube.com/@paingpko" class="footer-item">
                <i class="fa-brands fa-youtube"></i>
            </a>



            <a target="_blank" href="https://codepen.io/paingphyoko" class="footer-item">
                <i class="fa-brands fa-codepen"></i>
            </a>

            <a target="_blank" href="https://www.codewars.com/users/Paing-Phyo-Ko" class="footer-item">
                <iconify-icon icon="cib:codewars"></iconify-icon>
            </a>

        </div>
        <div class="github-link-footer">
            <a target="_blank" href="https://github.com/Paing-Ko" class="footer-item">Paing-Ko
                <i class="fab fa-github"></i>
            </a>
        </div>
    </footer>
    `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
