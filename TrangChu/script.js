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

    // document.getElementById('open-login').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.getElementById('login-modal').style.display = 'block';
    //     document.getElementById('overlay').style.display = 'block';
    //     });
        
    //     // Show the registration modal and overlay when "Đăng Ký" link is clicked
    //     document.getElementById('open-register').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.getElementById('register-modal').style.display = 'block';
    //     document.getElementById('overlay').style.display = 'block';
    //     });
        
    //     // Switch to registration modal when "Đăng Ký Ngay" is clicked in the login modal
    //     document.getElementById('switch-to-register').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.getElementById('login-modal').style.display = 'none'; // Hide login modal
    //     document.getElementById('register-modal').style.display = 'block'; // Show registration modal
    //     });
        
    //     // Switch to login modal when "Đăng Nhập" is clicked in the registration modal
    //     document.getElementById('switch-to-login').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.getElementById('register-modal').style.display = 'none'; // Hide registration modal
    //     document.getElementById('login-modal').style.display = 'block'; // Show login modal
    //     });
        
    //     // Close the modals and overlay when the close button is clicked
    //     document.querySelectorAll('.close-btn').forEach(button => {
    //     button.addEventListener('click', function() {
    //         document.getElementById('login-modal').style.display = 'none';
    //         document.getElementById('register-modal').style.display = 'none';
    //         document.getElementById('overlay').style.display = 'none';
    //     });
    //     });
        
    //     // Close modals and overlay when clicking outside of the modal
    //     document.getElementById('overlay').addEventListener('click', function() {
    //     document.getElementById('login-modal').style.display = 'none';
    //     document.getElementById('register-modal').style.display = 'none';
    //     document.getElementById('overlay').style.display = 'none';
    //     });
        
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
    
    