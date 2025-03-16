document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Function to update theme icon
    function updateThemeIcon() {
        if (body.classList.contains("dark-mode")) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Update theme icon on page load
    updateThemeIcon();

    // Theme Toggle Event
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
        updateThemeIcon();
    });

    // Sidebar Toggle (Only for Mobile)
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
}

});

