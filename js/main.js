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

const CONTACT_EMAIL = "contato@marquesengenhariaambiental.com.br";
const CONTACT_WHATSAPP = "5527997711577";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const honeypot = contactForm.querySelector("#website");
  if (honeypot?.value) return;

  const formData = new FormData(contactForm);
  const nome = String(formData.get("nome") || "").trim();
  const empresa = String(formData.get("empresa") || "").trim();
  const ramo = String(formData.get("ramo") || "").trim();
  const telefone = String(formData.get("telefone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const mensagem = String(formData.get("mensagem") || "").trim();

  if (!isValidEmail(email)) {
    formFeedback.textContent = "E-mail inválido. Por favor, corrija.";
    formFeedback.className = "form-feedback form-feedback--error";
    return;
  }

  const messageText =
    `Solicitação de orçamento - Marques Engenharia\n\n` +
    `Nome: ${nome}\n` +
    `Empresa: ${empresa}\n` +
    `Ramo: ${ramo}\n` +
    `Telefone: ${telefone}\n` +
    `E-mail: ${email}\n\n` +
    `Mensagem:\n${mensagem}`;

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento.\n\n${messageText}`
  );

  submitBtn.disabled = true;
  formFeedback.textContent = "Enviando solicitação...";
  formFeedback.className = "form-feedback";

  try {
    const payload = new FormData();
    payload.set("nome", nome);
    payload.set("empresa", empresa);
    payload.set("ramo", ramo);
    payload.set("telefone", telefone);
    payload.set("email", email);
    payload.set("mensagem", mensagem);
    payload.set("_subject", `Orçamento - ${empresa || nome}`);
    payload.set("_template", "table");
    payload.set("_captcha", "false");
    payload.set("_replyto", email);

    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || result.error || "Falha no envio do e-mail.");
    }

    // Regra: e-mail automático + mesma solicitação no WhatsApp.
    window.open(
      `https://wa.me/${CONTACT_WHATSAPP}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer"
    );

    formFeedback.textContent =
      "Solicitação enviada por e-mail. Abrimos também o WhatsApp com a mesma mensagem.";
    formFeedback.className = "form-feedback form-feedback--success";
    contactForm.reset();
    validateForm();
  } catch (error) {
    formFeedback.textContent =
      "Não foi possível enviar o e-mail automaticamente. Tente novamente em instantes.";
    formFeedback.className = "form-feedback form-feedback--error";
    validateForm();
  }
});
