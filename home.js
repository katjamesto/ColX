const faqs = document.querySelectorAll(".sectionFaq");

faqs.forEach(sectionFaq => {
    sectionFaq.addEventListener("click", () => {
        sectionFaq.classList.toggle("active");
    });
});