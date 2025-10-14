document.addEventListener('DOMContentLoaded', () => {
    // Find all the accordion items on the page
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        const collapseElement = item.querySelector('.collapse');
        const toggleIcon = item.querySelector('.service-toggle-icon');

        if (collapseElement && toggleIcon) {
            // When the accordion is about to be shown...
            collapseElement.addEventListener('show.bs.collapse', () => {
                toggleIcon.classList.add('rotated');
            });

            // When the accordion is about to be hidden...
            collapseElement.addEventListener('hide.bs.collapse', () => {
                toggleIcon.classList.remove('rotated');
            });
        }
    });
    
});