// Add a class to elements when they enter the viewport
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animated');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const buffer = 20; // Adjust this value as needed

        return (
            rect.bottom >= -buffer && // Bottom edge of the element is close to or above the top edge of the viewport with a buffer
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('in-view');
            }
        });
    }
    //just running some tests
    // function getlinks(){
    //     let links = document.links;
    //     for (i=0;i<links.length;i++){
    //         console.log(links[i].href)
    //     }
    // }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load
});
