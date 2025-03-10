document.addEventListener('DOMContentLoaded', () => {
    // === Slider Functionality ===
    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const prev = slider.querySelector('.prev');
        const next = slider.querySelector('.next');
        let currentIndex = 0;

        const updateSlides = () => {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
        };

        prev.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            updateSlides();
        });

        next.addEventListener('click', () => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            updateSlides();
        });

        updateSlides();

        // === Auto Slide Functionality ===
        let autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            updateSlides();
        }, 5000);

        // Pause auto sliding when user hovers over the slider
        slider.addEventListener('mouseover', () => {
            clearInterval(autoSlideInterval);
        });

        // Resume auto sliding when user leaves the slider
        slider.addEventListener('mouseout', () => {
            autoSlideInterval = setInterval(() => {
                currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
                updateSlides();
            }, 5000);
        });
    });

    // === Dropdown Menu Functionality ===
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');

    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah tautan default
            dropdown.classList.toggle('active'); // Toggle kelas aktif
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            if (dropdown.classList.contains('active')) {
                dropdownMenu.style.display = 'block'; // Tampilkan menu dropdown
            } else {
                dropdownMenu.style.display = 'none'; // Sembunyikan menu dropdown
            }
        });

        // Klik di luar dropdown untuk menutup menu
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
                dropdown.classList.remove('active');
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                dropdownMenu.style.display = 'none'; // Sembunyikan menu dropdown
            }
        });
    }

    // === Scroll Effect Functionality ===
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        var logoContainer = header.querySelector('.logo-container');
        var logoImgNormal = header.querySelector('.logo-img.normal');
        var logoImgHover = header.querySelector('.logo-img.hover');
        var logoText = header.querySelector('.logo-text');
        var navLinks = header.querySelectorAll('nav a');
        var dropdownToggle = header.querySelector('.dropdown-toggle');
        var dropdownItems = header.querySelectorAll('.dropdown-menu a');
        var searchBar = header.querySelector('.search-bar input');
        var searchButton = header.querySelector('.search-bar button svg');

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logoContainer.classList.add('scrolled');
            logoImgNormal.style.display = 'none';
            logoImgHover.style.display = 'block';
            logoText.classList.add('scrolled');
            navLinks.forEach(link => link.classList.add('scrolled'));
            dropdownToggle.classList.add('scrolled');
            dropdownItems.forEach(item => item.classList.add('scrolled'));
            searchBar.classList.add('scrolled');
            searchButton.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            logoContainer.classList.remove('scrolled');
            logoImgNormal.style.display = 'block';
            logoImgHover.style.display = 'none';
            logoText.classList.remove('scrolled');
            navLinks.forEach(link => link.classList.remove('scrolled'));
            dropdownToggle.classList.remove('scrolled');
            dropdownItems.forEach(item => item.classList.remove('scrolled'));
            searchBar.classList.remove('scrolled');
            searchButton.classList.remove('scrolled');
        }
    });

    // === Search Functionality ===
    function performSearch() {
        let query = document.getElementById('search-input').value.toLowerCase();
        let elements = document.querySelectorAll('body *');
        
        elements.forEach(element => {
            if (element.innerText.toLowerCase().includes(query) && element.innerText !== '') {
                element.style.backgroundColor = 'yellow';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                element.style.backgroundColor = 'transparent';
            }
        });
    }

    // Tambahkan event listener untuk menjalankan pencarian ketika menekan tombol enter
    document.getElementById('search-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});


// Opening
document.addEventListener('DOMContentLoaded', () => {
    const openingAnimation = document.getElementById('opening-animation');
    
    // Mengatur animasi untuk menghilang setelah 5 detik
    setTimeout(() => {
        openingAnimation.classList.add('fade-out');
    }, 5000); // 5000 milidetik = 5 detik
});