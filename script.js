document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    const slider = document.getElementById('rangeBox');
    const output = document.getElementById('rangeValue');

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const popup = document.getElementById('successPopup');
        popup.classList.add('show');
        
        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
        
        this.reset();
    });
});
