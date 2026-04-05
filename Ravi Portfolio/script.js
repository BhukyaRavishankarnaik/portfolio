// ===== Greeting =====
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.innerText = "Good Morning ☀️ Ravi!";
} else if (hour < 18) {
  greeting.innerText = "Good Afternoon 🌤️ Ravi!";
} else {
  greeting.innerText = "Good Evening 🌙 Ravi!";
}


// ===== Back to Top Button =====
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ===== 🔥 Scroll Animation (Intersection Observer) =====
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  observer.observe(section);
});
