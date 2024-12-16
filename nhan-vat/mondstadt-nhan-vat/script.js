document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.querySelector('.character-list');
    const characterIcons = document.querySelectorAll('.character-icon');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    const ICONS_PER_VIEW = 6;
    let currentIndex = 0;
    const totalIcons = characterIcons.length;

    // Hàm cập nhật hiển thị của các icon
    function updateIconsVisibility() {
        characterIcons.forEach((icon, index) => {
            if (index >= currentIndex && index < currentIndex + ICONS_PER_VIEW) {
                icon.style.display = 'block';
                icon.style.transform = `translateX(${(index - currentIndex) * 30}px)`;
            } else {
                icon.style.display = 'none';
            }
        });

        // Cập nhật trạng thái của nút prev/next
        // prevBtn.classList.toggle('disabled', currentIndex === 0);
        // nextBtn.classList.toggle('disabled', currentIndex + ICONS_PER_VIEW >= totalIcons);
    }

    // Xử lý nút prev
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateIconsVisibility();
        }
    });

    // Xử lý nút next
    nextBtn.addEventListener('click', () => {
        if (currentIndex + ICONS_PER_VIEW < totalIcons) {
            currentIndex++;
            updateIconsVisibility();
        }
    });

    // Xử lý click vào character icon
    characterIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetChar = icon.getAttribute('data-char');
            const currentChar = document.querySelector('.character_person.swiper-character-active');
            const nextChar = document.querySelector(`.character_person[data-char="${targetChar}"]`);

            if (currentChar !== nextChar) {
                switchCharacter(currentChar, nextChar);
                updateActiveIcon(icon);
            }
        });
    });

    // Hàm chuyển đổi character (giữ nguyên như cũ)
    function switchCharacter(currentChar, nextChar) {
        const outTransform = 'translateX(500px)';
        const inTransform = 'translateX(500px)';

        currentChar.style.transform = outTransform;
        currentChar.classList.remove('swiper-character-active');
        
        nextChar.style.transform = inTransform;
        
        setTimeout(() => {
            nextChar.style.transform = 'translateX(0)';
            nextChar.classList.add('swiper-character-active');
        }, 50);

        setTimeout(() => {
            currentChar.style.transform = '';
        }, 300);
    }

    // Hàm cập nhật active icon
    function updateActiveIcon(newActiveIcon) {
        document.querySelector('.character-icon-active')?.classList.remove('character-icon-active');
        newActiveIcon.classList.add('character-icon-active');
    }

    // Khởi tạo hiển thị ban đầu
    updateIconsVisibility();
});



document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.querySelector('.character-list');
    const characterIcons = document.querySelectorAll('.character-icon');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    const ICONS_PER_VIEW = 6;
    let currentIndex = 0;
    const totalIcons = characterIcons.length;

    function updateIconsVisibility() {
        characterIcons.forEach((icon, index) => {
            if (index >= currentIndex && index < currentIndex + ICONS_PER_VIEW) {
                icon.style.display = 'block';
                icon.style.transform = `translateX(${(index - currentIndex) * 30}px)`;
            } else {
                icon.style.display = 'none';
            }
        });

        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex + ICONS_PER_VIEW >= totalIcons);
    }

    function switchCharacter(currentChar, nextChar) {
        // Ẩn character hiện tại
        const outTransform = 'translateX(500px)';
        const inTransform = 'translateX(-500px)';

        // Xử lý character person
        currentChar.style.transform = outTransform;
        currentChar.classList.remove('swiper-character-active');
        
        nextChar.style.transform = inTransform;
        
        // Xử lý character info
        const currentInfo = currentChar.nextElementSibling.nextElementSibling.nextElementSibling;
        const nextInfo = nextChar.nextElementSibling.nextElementSibling.nextElementSibling;
        
        currentInfo.classList.remove('character-infor--active');
        
        // Xử lý character icon
        const currentIcon = currentChar.nextElementSibling;
        const nextIcon = nextChar.nextElementSibling;
        
        currentIcon.classList.remove('character_icon--active');
        nextIcon.classList.add('character_icon--active');
        
        setTimeout(() => {
            nextChar.style.transform = 'translateX(0)';
            nextChar.classList.add('swiper-character-active');
            nextInfo.classList.add('character-infor--active');
        }, 50);

        setTimeout(() => {
            currentChar.style.transform = '';
        }, 300);
    }

    // Xử lý click vào character icon ở thanh selection
    characterIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetChar = icon.getAttribute('data-char');
            const currentChar = document.querySelector('.character_person.swiper-character-active');
            const nextChar = document.querySelector(`.character_person[data-char="${targetChar}"]`);

            if (currentChar !== nextChar) {
                switchCharacter(currentChar, nextChar);
                updateActiveIcon(icon);
            }
        });
    });

    function updateActiveIcon(newActiveIcon) {
        document.querySelector('.character-icon-active')?.classList.remove('character-icon-active');
        newActiveIcon.classList.add('character-icon-active');
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateIconsVisibility();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex + ICONS_PER_VIEW < totalIcons) {
            currentIndex++;
            updateIconsVisibility();
        }
    });

    // Khởi tạo hiển thị ban đầu
    updateIconsVisibility();
});
