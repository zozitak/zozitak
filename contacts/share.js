const shareButton = document.getElementById("share-button");
const shareDialog = document.getElementById("share-dialog");
const closeButton = document.getElementById("close-button");

shareButton.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({ title: "Example Page", url: "" });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  } else {
    shareDialog.classList.add("is-open");
  }
});

closeButton.addEventListener("click", (event) => {
  shareDialog.classList.remove("is-open");
});


