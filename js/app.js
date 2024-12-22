// Select all anchor links with a hash in the href
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target element by its ID
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // If the target element exists, scroll smoothly
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});