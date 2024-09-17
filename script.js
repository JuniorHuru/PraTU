document.addEventListener('DOMContentLoaded', function () {
    
    const toggleMenus = document.querySelectorAll('.toggle-menu');

    toggleMenus.forEach(menu => {
        menu.addEventListener('click', function (event) {
            event.preventDefault(); 

            
            document.querySelectorAll('.submenu').forEach(submenu => {
                if (submenu !== this.nextElementSibling) {
                    submenu.style.display = 'none';
                }
            });

            const submenu = this.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });

    // A Tiempo Real
    function updateTime() {
        const now = new Date();
        
        const utcOffset = -5; 
        const utcHours = now.getUTCHours();
        const peruHours = (utcHours + utcOffset + 24) % 24;
        
        const hours = peruHours.toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        document.getElementById('current-time').textContent = timeString;
    }

    setInterval(updateTime, 1000);
});