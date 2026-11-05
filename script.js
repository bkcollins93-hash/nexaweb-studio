// NexaWeb Studio: update this number before publishing.
// Use international format without +, spaces or leading zero.
// Example Uganda number: 2567XXXXXXXX
const NEXAWEB_WHATSAPP_NUMBER = "256702076114";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

const whatsappLink = document.getElementById("whatsapp-link");

if (whatsappLink) {
  const message = encodeURIComponent(
    "Hello NexaWeb Studio. I would like to discuss a website for my business."
  );

  whatsappLink.href = `https://wa.me/${NEXAWEB_WHATSAPP_NUMBER}?text=${message}`;
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener";
}

document.getElementById("year").textContent = new Date().getFullYear();
