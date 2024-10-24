document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
  
    // Check for existing dark mode setting in localStorage
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
    if (isDarkMode) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  
    // Set toggle based on localStorage
    darkModeToggle.checked = isDarkMode;
  
    // Listen for toggle changes
    darkModeToggle.addEventListener("change", () => {
      if (darkModeToggle.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  });
  
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.querySelector("nav").classList.add("dark-mode");
    document.querySelector("footer").classList.add("dark-mode");
    document.querySelectorAll(".widget").forEach(widget => {
      widget.classList.add("dark-mode");
    });
    localStorage.setItem("dark-mode", "enabled");
  }
  
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.querySelector("nav").classList.remove("dark-mode");
    document.querySelector("footer").classList.remove("dark-mode");
    document.querySelectorAll(".widget").forEach(widget => {
      widget.classList.remove("dark-mode");
    });
    localStorage.setItem("dark-mode", "disabled");
  }
  