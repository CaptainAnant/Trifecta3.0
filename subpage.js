document.addEventListener('DOMContentLoaded', () => {
    // This part handles the rotating chevron icon
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        const collapseElement = item.querySelector('.collapse');
        const toggleIcon = item.querySelector('.service-toggle-icon');
        if (collapseElement && toggleIcon) {
            collapseElement.addEventListener('show.bs.collapse', () => {
                toggleIcon.classList.add('rotated');
            });
            collapseElement.addEventListener('hide.bs.collapse', () => {
                toggleIcon.classList.remove('rotated');
            });
        }
    });

    // --- NEW CODE ADDED BELOW ---
    // This part prevents links inside the card from toggling the collapse
    const links = document.querySelectorAll('.js-stop-propagation');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});