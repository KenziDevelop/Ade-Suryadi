// Toggle dark/light mode
const themeToggleButton = document.getElementById("tombol-mode");
const themeIcon = document.getElementById("ikon-mode");

// Cek mode yang disimpan di localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("bg-gray-900", "text-white");
    themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M3 12h1m16 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707" />`; // Icon untuk mode gelap
} else {
    document.body.classList.add("bg-gray-100", "text-black");
    themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M3 12h1m16 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707" />`; // Icon untuk mode terang
}


    // Event listener untuk tombol toggle tema
    themeToggleButton.addEventListener("click", () => {
        if (document.body.classList.contains("bg-gray-900")) {
            document.body.classList.replace("bg-gray-900", "bg-gray-100");
            document.body.classList.replace("text-white", "text-black");
            themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M3 12h1m16 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707" />`; // Icon untuk mode terang
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.replace("bg-gray-100", "bg-gray-900");
            document.body.classList.replace("text-black", "text-white");
            themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M3 12h1m16 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707" />`; // Icon untuk mode gelap
            localStorage.setItem("theme", "dark");
        }
    });
    
    const tombolsidebar = document.getElementById("tombolsidebar");
    const tutupsidebar = document.getElementById("tutupsidebar");
    const sidebar = document.getElementById("sidebar");

tombolsidebar.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("translate-x-0");
});

tutupsidebar.addEventListener("click", () => {
    sidebar.classList.add("hidden");
    sidebar.classList.remove("translate-x-0");
});

// Toggle project description visibility
function toggleDescription(descId) {
    const desc = document.getElementById(descId);
    desc.classList.toggle("hidden");
    desc.classList.toggle("max-h-0");
    desc.classList.toggle("overflow-hidden");
}
