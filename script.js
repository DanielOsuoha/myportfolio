// Add a class to elements when they enter the viewport
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animated');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load
});
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}