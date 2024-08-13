let advancedOpen = true;

function toggleAdvanced() {
  const advancedSettings = document.getElementById("advanced-settings");
  const advancedBtn = document.getElementById("advancedBtn");
  if (advancedOpen) {
    advancedSettings.style.display = "none";
    advancedBtn.innerHTML = "Advanced Settings";
    advancedOpen = false;
  } else {
    advancedSettings.style.display = "block";
    advancedBtn.innerHTML = "Close Settings";
    advancedOpen = true;
  }
}

function openPopups() {
  const delaySeconds = parseInt(document.getElementById("delay").value);
  const numPopups = parseInt(document.getElementById("popup-amount").value);
  const url = document.getElementById("url").value || "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const width = parseInt(document.getElementById("popupWidth").value) || 400;
  const height = parseInt(document.getElementById("popupHeight").value) || 300;

  let countDown = delaySeconds;
  const countDownInterval = setInterval(() => {
    document.getElementById("open-btn").innerHTML = `Opening Popups in ${countDown}...`;
    countDown--;
    if (countDown < 0) {
      clearInterval(countDownInterval);
      document.getElementById("open-btn").innerHTML = "Opening Popups...";
      for (let i = 0; i < numPopups; i++) {
        const left = Math.floor(Math.random() * (window.innerWidth - width));
        const top = Math.floor(Math.random() * (window.innerHeight - height));
        window.open(url, "", `width=${width},height=${height},left=${left},top=${top}`);
      }
    }
  }, 1000);
}
