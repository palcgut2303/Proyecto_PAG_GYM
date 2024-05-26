window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener('scroll', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});