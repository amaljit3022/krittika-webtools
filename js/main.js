// Load navbar from components/navbar.html into every page
document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar");
  
    if (navbarContainer) {
      fetch("components/navbar.html")
        .then((res) => res.text())
        .then((data) => {
          navbarContainer.innerHTML = data;
  
          // After navbar is loaded, highlight active tab
          highlightActiveLink();
        })
        .catch((err) => console.error("Navbar load failed:", err));
    }
  });
  
  // Highlight active link based on current file name
  function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(".html", "") || "index";
  
    document.querySelectorAll(".nav-link").forEach((link) => {
      const linkPage = link.getAttribute("data-page");
      if (linkPage === page) {
        link.classList.add("active");
      }
    });
  }
  