const header = document.getElementById("header");
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formFeedback = document.getElementById("formFeedback");
function updateHeader() {
  header.classList.toggle("header--scrolled", window.scrollY > 60);
}

function initHeroOpen() {
  const hero = document.querySelector(".hero-open");
  if (!hero) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    hero.style.setProperty("--p", "1");
    hero.classList.add("is-settled");
    return;
  }

  const duration = 3000;
  const delay = 200;
  const start = performance.now() + delay;

  function frame(now) {
    const progress = Math.min(Math.max((now - start) / duration, 0), 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    hero.style.setProperty("--p", eased.toFixed(4));

    if (progress < 1) {
      requestAnimationFrame(frame);
      return;
    }

    hero.style.setProperty("--p", "1");
    hero.classList.add("is-settled");
  }

  requestAnimationFrame(frame);
}

function closeNav() {
  nav.classList.remove("nav--open");
  navToggle.classList.remove("nav-toggle--open");
  navToggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
initHeroOpen();

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("nav--open");
  navToggle.classList.toggle("nav-toggle--open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    closeNav();
  });
});

// Email validation regex
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm() {
  if (!contactForm) return;

  const requiredFields = contactForm.querySelectorAll("[required]");
  const email = contactForm.querySelector("#email");
  
  let allFilled = Array.from(requiredFields).every((field) => field.value.trim() !== "");
  let emailValid = email ? isValidEmail(email.value) : true;
  
  submitBtn.disabled = !allFilled || !emailValid;
}

contactForm?.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", validateForm);
});

validateForm();

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const honeypot = contactForm.querySelector("#website");
  if (honeypot?.value) return;

  const formData = new FormData(contactForm);
  const nome = formData.get("nome");
  const empresa = formData.get("empresa");
  const ramo = formData.get("ramo");
  const telefone = formData.get("telefone");
  const email = formData.get("email");
  const mensagem = formData.get("mensagem");

  // Validate email before sending
  if (!isValidEmail(email)) {
    formFeedback.textContent = "E-mail inválido. Por favor, corrija.";
    formFeedback.className = "form-feedback form-feedback--error";
    return;
  }

  const subject = encodeURIComponent(`Orçamento - ${empresa}`);
  const body = encodeURIComponent(
    `Nome: ${nome}\nEmpresa: ${empresa}\nRamo: ${ramo}\nTelefone: ${telefone}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
  );

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${nome}\nEmpresa: ${empresa}\nRamo: ${ramo}\nTelefone: ${telefone}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
  );

  formFeedback.textContent = "Abrindo o e-mail e o WhatsApp...";
  formFeedback.className = "form-feedback form-feedback--success";

  window.open(`https://wa.me/5527997711577?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  window.location.href = `mailto:contato@marquesengenharia.com.br?subject=${subject}&body=${body}`;
});
