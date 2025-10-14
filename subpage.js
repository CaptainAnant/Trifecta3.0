document.addEventListener('DOMContentLoaded', () => {
    // Accordion icon rotation logic (unchanged)
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        const collapseElement = item.querySelector('.collapse');
        const toggleIcon = item.querySelector('.service-toggle-icon');
        if (collapseElement && toggleIcon) {
            collapseElement.addEventListener('show.bs.collapse', () => { toggleIcon.classList.add('rotated'); });
            collapseElement.addEventListener('hide.bs.collapse', () => { toggleIcon.classList.remove('rotated'); });
        }
    });

    // Link click prevention logic (unchanged)
    const links = document.querySelectorAll('.js-stop-propagation');
    links.forEach(link => {
        link.addEventListener('click', (event) => { event.stopPropagation(); });
    });

    // --- NEW RESPONSIVE SIDEBAR LOGIC ---
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const toggleSidebar = () => {
        sidebar.classList.toggle('is-open');
        overlay.classList.toggle('is-visible');
    };

    if (sidebarToggleBtn && sidebar && overlay) {
        sidebarToggleBtn.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);
    }
});