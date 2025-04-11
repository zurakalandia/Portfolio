const observer = new
IntersectionObserver(entries => {
    entries.forEach(entry => {

entry.target.classList.toggle("visible", entry.isIntersecting);
    });
});

document.querySelectorAll(".animated").forEach(el => observer.observe(el))