// Mobile Navigation ein-/ausklappen
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("main-nav");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});

// Menü nach Klick auf einen Link schließen
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  })
);

// Essensfotos: sobald eine Datei unter assets/img/essen/ liegt, ersetzt sie den Platzhalter
document.querySelectorAll(".slide img").forEach((img) => {
  const show = () => img.naturalWidth > 0 && img.parentElement.classList.add("has-photo");
  if (img.complete) show();
  else img.addEventListener("load", show);
});

// Slider: wechselt automatisch zwischen den Fotos, lässt sich auch wischen
const track = document.querySelector(".slider-track");
if (track) {
  const dots = document.querySelectorAll(".slider-dots button");
  const slides = track.children;
  let current = 0;
  let timer;

  const goTo = (i) => {
    current = (i + slides.length) % slides.length;
    track.scrollTo({ left: current * track.clientWidth });
  };

  track.addEventListener("scroll", () => {
    const i = Math.round(track.scrollLeft / track.clientWidth);
    dots.forEach((d, n) => d.classList.toggle("active", n === i));
    current = i;
  }, { passive: true });

  dots.forEach((dot, n) => dot.addEventListener("click", () => { goTo(n); restart(); }));

  const restart = () => {
    clearInterval(timer);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setInterval(() => goTo(current + 1), 4000);
    }
  };
  track.addEventListener("pointerdown", restart);
  track.addEventListener("touchstart", restart, { passive: true });
  restart();
}

// Google Kalender erst nach Zustimmung laden (Zwei-Klick-Lösung, DSGVO)
const calendar = document.querySelector(".calendar");
const CONSENT_KEY = "smokersbest-calendar-consent";

function loadCalendar() {
  const params = new URLSearchParams({
    src: calendar.dataset.calendarId,
    ctz: "Europe/Berlin",
    hl: "de",
    mode: "AGENDA",
    showTitle: "0",
    showPrint: "0",
    showTabs: "0",
    showCalendars: "0",
    showTz: "0",
  });
  const iframe = document.createElement("iframe");
  iframe.src = "https://calendar.google.com/calendar/embed?" + params;
  iframe.title = "Terminkalender von Smoker's Best";
  iframe.loading = "lazy";
  calendar.replaceChildren(iframe);
  calendar.classList.add("loaded");
}

if (calendar) {
  let remembered = false;
  try { remembered = localStorage.getItem(CONSENT_KEY) === "1"; } catch (e) {}

  if (remembered) {
    loadCalendar();
  } else {
    calendar.querySelector(".calendar-load").addEventListener("click", () => {
      if (calendar.querySelector(".calendar-remember-input").checked) {
        try { localStorage.setItem(CONSENT_KEY, "1"); } catch (e) {}
      }
      loadCalendar();
    });
  }
}

// Aktuelles Jahr im Footer
document.getElementById("year").textContent = new Date().getFullYear();
