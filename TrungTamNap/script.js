const formInputs = document.querySelectorAll('.form-next input');
    const formLabels = document.querySelectorAll('.form-next label');

    formInputs.forEach((input, index) => {
        input.addEventListener('mouseover', () => {
            formLabels[index].classList.add("four");
        });
        input.addEventListener('mouseout', () => {
            formLabels[index].classList.remove("four");
        });
    });
        
    document.addEventListener('DOMContentLoaded', function () {
        // Đảm bảo các phần tử tồn tại trước khi gắn sự kiện
        const openLogin = document.getElementById('open-login');
        const openRegister = document.getElementById('open-register');
        const closeButtons = document.querySelectorAll('.close-btn');
        const overlay = document.getElementById('overlay');
        const loginModal = document.getElementById('login-modal');
        const registerModal = document.getElementById('register-modal');
        const switchToRegister = document.getElementById('switch-to-register');
        const switchToLogin = document.getElementById('switch-to-login');
    
        // Kiểm tra phần tử
        if (!openLogin || !openRegister || !overlay || !loginModal || !registerModal || !switchToRegister || !switchToLogin) {
            console.error('Một hoặc nhiều phần tử không tồn tại!');
            return;
        }
    
        // Gắn sự kiện
        openLogin.addEventListener('click', function (event) {
            event.preventDefault();
            loginModal.style.display = 'block';
            overlay.style.display = 'block';
        });
    
        openRegister.addEventListener('click', function (event) {
            event.preventDefault();
            registerModal.style.display = 'block';
            overlay.style.display = 'block';
        });
    
        closeButtons.forEach(button => {
            button.addEventListener('click', function () {
                loginModal.style.display = 'none';
                registerModal.style.display = 'none';
                overlay.style.display = 'none';
            });
        });
    
        overlay.addEventListener('click', function () {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            overlay.style.display = 'none';
        });

        switchToRegister.addEventListener('click', function(event) {
            loginModal.style.display = 'none'; 
            registerModal.style.display = 'block'; 
        });

        switchToLogin.addEventListener('click', function(event) {
            loginModal.style.display = 'block'; 
            registerModal.style.display = 'none'; 
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Đảm bảo JavaScript được chạy sau khi DOM đã sẵn sàng
        const sendButton = document.querySelector('.send-button');
        const emailInput = document.querySelector('.email-group input');
    
        // Kiểm tra nếu các phần tử tồn tại
        if (sendButton && emailInput) {
            sendButton.addEventListener('click', function () {
                const emailValue = emailInput.value.trim();
    
                if (emailValue === '') {
                    alert('Vui lòng nhập Email trước khi gửi!');
                } else {
                    // Logic gửi mã xác nhận
                    console.log(`Mã xác nhận đã được gửi tới: ${emailValue}`);
                    alert('Mã xác nhận đã được gửi đến Email của bạn.');
                }
            });
        } else {
            console.error('Không tìm thấy phần tử cần thiết trong DOM.');
        }
    });
    
    