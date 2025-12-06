document.querySelectorAll(".glitch-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = this.getAttribute("href");
    const glitch = document.getElementById("glitch-screen");

    if (!glitch) {
      window.location.href = target;
      return;
    }

    glitch.classList.add("active");

    setTimeout(() => {
      window.location.href = target;
    }, 800);
  });
});

// ✅ SÉCURITÉ : enlève le glitch si on arrive sur HOME
window.addEventListener("load", () => {
  const glitch = document.getElementById("glitch-screen");
  if (glitch) {
    glitch.classList.remove("active");
  }
});
