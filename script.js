document.addEventListener('DOMContentLoaded', function(){
    const heroH1 = document.querySelector('#hero h1');
    const heroSection = document.getElementById('hero');

    if (heroH1 && heroSection) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const heroHeight = heroSection.offsetHeight;

            // Calculate scroll progress (0 to 1) within the hero section.
            // We'll cap the animation to the first 70% of the scroll for a better feel.
            let scrollProgress = Math.min(1, scrollY / (heroHeight * 0.7));

            // Calculate the new background position. 
            // It will move from 100% (all grey) to 0% (all white).
            const newPosition = 100 - (scrollProgress * 100);

            // Apply the new background position to the h1 element
            heroH1.style.backgroundPosition = `${newPosition}% 0`;
        });
    }
});
