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

const copyButton = document.getElementById("copy-button");
const inputText = document.getElementById("copy-input").value;
var active = false;

copyButton.addEventListener("click", (event) => {
  navigator.clipboard.writeText(inputText).then(
    function () {
      var copyButtonMessage = "Text Copied!";
      clearSelection();
      copyButton.focus();
      if (active) {
        return;
      } else {
        copyMessageTooltip(copyButton, copyButtonMessage);
        console.log("successfully");
      }
    },
    function () {
      var copyButtonMessage = "Press Ctrl+C to copy";
      if (active) {
        return;
      } else {
        copyMessageTooltip(copyButton, copyButtonMessage);
        console.log("failed");
      }
    }
  );
});

function copyMessageTooltip(copyButton, copyButtonMessage) {
  active = true;

  var tooltipVisibleTime = 2000; // How long to leave tooltip visible
  var tooltipHideTime = 100; // matches .inactive animation time

  // tooltip
  document.getElementById("copy-tooltip").innerText = copyButtonMessage;
  document.getElementById("copy-tooltip").classList.add("active");
  copyButton.setAttribute("aria-describedby", "copy-tooltip");

  setTimeout(function () {
    document.getElementById("copy-tooltip").classList.remove("active");
    document.getElementById("copy-tooltip").classList.add("inactive");
    // https://css-tricks.com/restart-css-animation/

    document
      .getElementById("copy-tooltip")
      .replaceWith(document.getElementById("copy-tooltip").cloneNode(true));

    copyButton.removeAttribute("aria-describedby");

    setTimeout(function () {
      document.getElementById("copy-tooltip").classList.remove("inactive");
      document.getElementById("copy-tooltip").innerText = "";
      active = false;
    }, tooltipHideTime);
  }, tooltipVisibleTime);
}

function clearSelection() {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    // IE?
    document.selection.empty();
  }
}
