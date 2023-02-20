document.body.addEventListener("keydown", function (event) {
  if (event.key === "h") {
    window.location.assign("/");
  }
  if (event.key === "a") {
    window.location.assign("/aboutme");
  }
  if (event.key === "c") {
    window.location.assign("/contacts");
  }
  if (event.key === "j") {
    window.location.assign("/job");
  }
  if (event.key === "p") {
    window.location.assign("/projects");
  }
  if (event.key === "w") {
    window.location.assign("/wiki");
  }
  if (event.key === "t") {
    window.location.assign("/test");
  }
});

const footer = document.querySelector("footer");
var mouseinfooter = false;

footer.addEventListener("mouseenter", enterListener);
footer.addEventListener("mouseleave", leaveListener);

function enterListener(event) {
  mouseinfooter = true;
  if (footer.classList.contains("hidden")) {
    footer.classList.toggle("hidden");
    footer.classList.toggle("visible");
  }
}

function leaveListener(event) {
  mouseinfooter = false;
  if (footer.classList.contains("visible")) {
    footer.classList.toggle("visible");
    footer.classList.toggle("hidden");
  }
}

window.onload = () => {
  footer.classList.toggle("visible");
  setTimeout(() => {
    if (!mouseinfooter && footer.classList.contains("visible")) {
      footer.classList.toggle("visible");
      footer.classList.toggle("hidden");
    }
  }, 2000);
};
