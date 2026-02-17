window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

function revealSections() {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

/* Certificate Fullscreen View */
function showCert(img) {
  const modal = document.getElementById("certModal");
  const preview = document.getElementById("certPreview");

  preview.src = img.src;
  modal.style.display = "flex";
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}
