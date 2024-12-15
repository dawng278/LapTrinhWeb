document.addEventListener('DOMContentLoaded', function() {
    // Region Selection
    const regionItems = document.querySelectorAll('.region-item');
    regionItems.forEach(item => {
        item.addEventListener('click', function() {
            regionItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Character Selection
    const characterIcons = document.querySelectorAll('.character-icon');
    characterIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            characterIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            updateCharacterInfo(this.dataset.char);
        });
    });

    // Navigation Buttons
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const characterList = document.querySelector('.character-list');

    prevBtn.addEventListener('click', () => {
        characterList.scrollBy({
            left: -100,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        characterList.scrollBy({
            left: 100,
            behavior: 'smooth'
        });
    });

    // Language Toggle
    const languageToggle = document.querySelector('.switch input');
    languageToggle.addEventListener('change', function() {
        updateVoiceLanguage(this.checked);
    });

    // Character Info Update Function
    function updateCharacterInfo(character) {
        // This would be replaced with actual character data
        const characters = {
            jean: {
                title: 'JEAN',
                cv: 'SAITO Chiwa',
                description: 'Là quyền đội trưởng của Đội Kỵ Sĩ Tây Phong...',
                quote: 'Gió ơi, hãy trả lời ta!'
            },
            amber: {
                title: 'AMBER',
                cv: 'Kelly Baskin',
                description: 'Outrider of the Knights of Favonius...',
                quote: 'Baron Bunny, go!'
            }
            // Add more characters as needed
        };

        const charData = characters[character];
        if (charData) {
            document.querySelector('.character-title').textContent = charData.title;
            document.querySelector('.cv-text').textContent = `CV: ${charData.cv}`;
            document.querySelector('.character-description').textContent = charData.description;
            document.querySelector('.character-quote').textContent = charData.quote;
        }
    }

    // Voice Language Update Function
    function updateVoiceLanguage(isEnglish) {
        const cvText = document.querySelector('.cv-text');
        // This would be replaced with actual VA data
        if (isEnglish) {
            cvText.textContent = 'CV: Stephanie Southerland';
        } else {
            cvText.textContent = 'CV: SAITO Chiwa';
        }
    }
});
