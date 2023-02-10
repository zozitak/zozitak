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
});
